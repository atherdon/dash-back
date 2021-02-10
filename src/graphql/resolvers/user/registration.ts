import bcrypt from 'bcrypt';
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

const saltRounds = 10;

/**
 * Registration user
 * @param data [GraphQL.RegistrationParams]
 * @return [GraphQL.User]
 */
const postOneUser: T.Resolver<GraphQL.MutationRegistrationArgs, GraphQL.User | null> = async (
  _,
  params
) => {
  const { email, password, passwordRepeat, name } = params.data;
  // Check email is valid
  if (!lib.checkEmail(email)) {
    new lib.ErrorHandler(`Email '${email}' is not valid`, 400);
  }
  // Check user is exists
  const user = await prisma.user.findFirst({
    where: { email },
  });
  if (user !== null) {
    new lib.ErrorHandler(`Email '${email}' was registered earlier`, 400);
  }
  // Check password length
  const minPasswordLength = 6;
  if (password.length < minPasswordLength) {
    new lib.ErrorHandler(`Password length less than ${minPasswordLength} not accepted`, 400);
  }
  // Check password repeat
  if (password !== passwordRepeat) {
    throw new Error(JSON.stringify({ mess: 'Passwords do not match', code: 400 }));
  }
  // Hashing password
  const errMess = 'Create password hash failed';
  const passwordHash: string | Error = await new Promise((resolve) => {
    // Create salt
    bcrypt.genSalt(saltRounds, function (err: Error, salt: string) {
      if (err) {
        lib.Console.error(errMess + ' SALT', err, new Error());
        resolve(err);
      }
      // Create password hash
      bcrypt.hash(password, salt, function (err: Error, hash: string) {
        if (err) {
          lib.Console.error(errMess, err, new Error());
          resolve(err);
        }
        resolve(hash);
      });
    });
  });
  // Check error
  if (typeof passwordHash !== 'string') {
    new lib.ErrorHandler(errMess, 500);
    // Return null for typescript
    return null;
  }
  const result = await prisma.user.create({
    data: {
      email,
      password: passwordHash,
      name,
    },
  });
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role || 0,
    lastLogin: result.created?.toISOString() || '',
    password: '••••••',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default postOneUser;

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { env }: any = process;
const { TOKEN_KEY }: T.Env = env;

/**
 * Login user
 * @param data [GraphQL.LoginParams]
 * @return [GraphQL.User]
 */
const loginUser: T.Resolver<GraphQL.MutationLoginArgs, GraphQL.User | null> = async (_, params) => {
  const { email, password } = params.data;
  // Check email is valid
  if (!lib.checkEmail(email)) {
    new lib.ErrorHandler(`Email '${email}' is not valid`, 400, `Email regex: ${lib.emailRegex}`);
    return null;
  }
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  // Check user exists
  if (user === null) {
    new lib.ErrorHandler(`Email '${email}' is not registered`, 404, 'User not found');
    return null;
  }
  // Compare passwords
  let errMess = 'Error compare passwords';
  const compRes: boolean | Error = await new Promise((resolve) => {
    bcrypt.compare(password, user.password, function (err: Error, result) {
      if (err) {
        lib.Console.error(errMess, err, new Error());
        resolve(err);
      }
      resolve(result);
    });
  });
  // Check compare error
  if (typeof compRes !== 'boolean') {
    new lib.ErrorHandler(errMess, 500, compRes.message);
    return null;
  }
  // Check password is the same
  if (compRes === false) {
    new lib.ErrorHandler('Email or password do not match', 406, 'Password not the same');
    return null;
  }
  errMess = 'Error create token';
  const parsedToken: T.JWT = { id: user.id, pass: lib.mirrorTailString(user.password) };
  let token: string | Error;
  try {
    token = jwt.sign(parsedToken, TOKEN_KEY);
  } catch (e) {
    lib.Console.error(errMess, e, new Error());
    token = e;
  }
  if (typeof token !== 'string') {
    new lib.ErrorHandler(errMess, 500, token.message);
    return null;
  }
  // Update last login time
  const result = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      lastLogin: new Date(),
    },
  });
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role || 0,
    password: '••••••',
    token,
    lastLogin: result.lastLogin?.toISOString() || '',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default loginUser;

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
    new lib.ErrorHandler(`Email '${email}' is not valid`, 400);
  }
  const result = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  // Check user exists
  if (result === null) {
    new lib.ErrorHandler(`Email '${email}' is not registered`, 404);
    return null;
  }
  // Compare passwords
  let errMess = 'Error compare passwords';
  const compRes: boolean | Error = await new Promise((resolve) => {
    bcrypt.compare(password, result.password, function (err: Error, result) {
      if (err) {
        lib.Console.error(errMess, err, new Error());
        resolve(err);
      }
      resolve(result);
    });
  });
  // Check compare error
  if (typeof compRes !== 'boolean') {
    throw new lib.ErrorHandler(errMess, 500);
  }
  // Check password is the same
  if (compRes === false) {
    throw new lib.ErrorHandler('Email or password do not match', 406);
  }
  errMess = 'Error create token';
  const parsedToken: T.JWT = { id: result.id, pass: lib.mirrorTailString(result.password) };
  let token: string | Error;
  try {
    token = jwt.sign(parsedToken, TOKEN_KEY);
  } catch (e) {
    lib.Console.error(errMess, e, new Error());
    token = e;
  }
  if (typeof token !== 'string') {
    new lib.ErrorHandler(errMess, 500);
    return null;
  }
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role || 0,
    password: '••••••',
    token,
    lastLogin: result.created?.toISOString() || '',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default loginUser;

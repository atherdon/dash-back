import type { Request, Response, NextFunction } from 'express';
import gql from 'graphql-tag';
import { PrismaClient, User } from '@prisma/client';
import rbac from '../graphql/RBAC';
import * as lib from '../lib';

const prisma = new PrismaClient();

const UNAUTHORISED = 'Unauthorised';

export async function auth(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | void> {
  const { query, variables } = req.body;
  const { authorization } = req.headers;
  let gqlObj: any;
  try {
    gqlObj = gql`
      ${query}
    `;
  } catch (e) {
    return res
      .status(500)
      .json(lib.getError(500, 'error', "Error parse 'graphql' query", e.message));
  }
  // Get name of node from request query
  const node = gqlObj.definitions[0]?.selectionSet.selections[0]?.name.value;
  // Check if node is closed
  let isclosed = false;
  for (let i = 0; rbac[i]; i++) {
    if (rbac[i].node === node) {
      isclosed = true;
    }
  }
  if (!isclosed) {
    return next();
  }
  if (!authorization) {
    return res
      .status(401)
      .json(lib.getError(401, 'warning', UNAUTHORISED, 'Authorization header is required'));
  }
  const token = authorization.replace('Bearer', '').trim();
  const parsedtoken = lib.parseToken(token);
  if (parsedtoken.data === null) {
    return res
      .status(500)
      .json(lib.getError(500, 'error', 'Error credentials parse', parsedtoken.error?.message));
  }
  const { data } = parsedtoken;
  // Get user data
  let user: User | null;
  try {
    user = await prisma.user.findFirst({
      where: {
        id: data.id,
      },
    });
  } catch (e) {
    user = null;
  }
  if (user === null) {
    return res
      .status(404)
      .json(lib.getError(404, 'warning', 'User not found', `User id: ${data.id}`));
  }
  // Check password is changed
  const tailPass = lib.mirrorTailString(user.password);
  if (tailPass !== data.pass) {
    return res.status(401).json(lib.getError(401, 'warning', UNAUTHORISED, 'Password was changed'));
  }
  // Check role
  const role = user.role === null ? 0 : user.role;
  for (let i = 0; rbac[i]; i++) {
    const rB = rbac[i];
    // Check minimal role
    if (rB.node === node) {
      if (rB.minRole !== undefined) {
        if (role < rB.minRole) {
          res.setHeader('Min-Role-Not-Allowed', 'true');
          // TODO need change, than headers not sets
        }
      }
      // Check custom roles
      if (rB.roles.length !== 0) {
        if (rB.roles.indexOf(role) === -1) {
          res.setHeader('Roles-Not-Allowed', 'true');
        }
      }
    }
  }
  next();
}

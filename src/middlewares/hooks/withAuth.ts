/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import * as T from '../../types';
import * as lib from '../../lib';
import checkSelfSchema from '../../graphql/checkSelfSchema';
const prisma = new PrismaClient();

const UNAUTHORISED = 'Unauthorised';
const FORBIDDEN = 'Forbidden';

type Resolver = (parent: any, params: any, context: any, info: any) => any;

/**
 * Authorization and authentification hook
 * @param rules {T.RBAC} - node rules
 * @param callback {Resolver} - closing node
 */
export default function withAuth(rules: T.RBAC, callback: Resolver): Resolver {
  return async function (parent: any, params: any, context: any, info: any) {
    const { authorization } = context.headers;
    const { minRole, selfSchema, roles } = rules;
    const dataPrams = params.data;
    // Check Authorization header
    if (!authorization) {
      new lib.ErrorHandler(UNAUTHORISED, 401, 'Authorisaton header is required');
      return null;
    }
    // Get parsed data from token
    const token = authorization.replace('Bearer', '').trim();
    const parsedToken = lib.parseToken(token);
    if (parsedToken.data === null) {
      new lib.ErrorHandler('Error credentials parse', 500, 'Error parse token');
      return null;
    }
    const { data } = parsedToken;
    // Get user data
    const user = await prisma.user.findFirst({
      where: {
        id: data.id,
      },
    });
    if (user === null) {
      new lib.ErrorHandler('Credentials not accepted', 403, 'User not found');
      return null;
    }
    // Check password is changed
    const tailPass = lib.mirrorTailString(user.password);
    if (tailPass !== data.pass) {
      new lib.ErrorHandler(UNAUTHORISED, 401, 'Password was changed');
      return null;
    }
    // Check auth
    const userRole = user.role || 0;
    //// Check minimal accepted role
    let mR = false;
    if (minRole !== undefined) {
      mR = userRole < minRole;
    }
    //// Check custom roles
    let cR = false;
    if (roles !== undefined) {
      cR = roles.indexOf(userRole) === -1;
    }
    //// Check self schema.
    const { _sS, whereId } = checkSelfSchema(params, data, selfSchema);
    //// When set only selfSchema rule
    if (roles === undefined && minRole === undefined && selfSchema !== undefined && !_sS) {
      new lib.ErrorHandler(
        FORBIDDEN,
        403,
        `Accepted only for self. Requested for: ${whereId}. User id: ${user.id}`
      );
      return null;
    }
    //// Check access
    if (mR && !_sS) {
      new lib.ErrorHandler(
        FORBIDDEN,
        403,
        `Minimal role: ${minRole}. User role: ${userRole}. Requested for: ${whereId}. User id: ${user.id}`
      );
      return null;
    }
    if (cR && !_sS) {
      new lib.ErrorHandler(
        FORBIDDEN,
        403,
        `Accepted roles: [${roles}]. User role: ${userRole}. Requested for: ${whereId}. User id: ${user.id}`
      );
      return null;
    }
    if (rules.nonRenewable !== undefined && dataPrams !== null && (cR || mR)) {
      for (const p in dataPrams) {
        if (rules.nonRenewable.indexOf(p) !== -1) {
          new lib.ErrorHandler(
            'Unauthorized access attempt',
            403,
            `Field '${p}' is not renewable wihout special rights. NonRenewable list: [${rules.nonRenewable}]`
          );
          return null;
        }
      }
    }
    // Success auth
    return callback(parent, params, context, info);
  };
}

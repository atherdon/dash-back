import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one user
 * Authorization: true;
 * @param where [GraphQL.GetOneUserParams]
 * @return [GraphQL.User]
 */
const deleteOneUser: T.Resolver<GraphQL.MutationDeleteOneUserArgs, GraphQL.User | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.user.delete({
    where,
  });
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role || 0,
    password: '••••••',
    lastLogin: result.lastLogin?.toISOString() || '',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default deleteOneUser;

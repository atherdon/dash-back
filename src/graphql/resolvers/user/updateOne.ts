import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one user.
 * Authorization: true;
 * @param where [GraphQL.GetOneUserParams]
 * @param data [GraphQL.UpdateOneUserParams]
 * @return [GraphQL.User]
 */
const updateOneUser: T.Resolver<GraphQL.MutationUpdateOneUserArgs, GraphQL.User | null> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  const result = await prisma.user.update({
    where,
    data: {
      // Field 'email' is skiped for update
      name: data.name || undefined,
      role: data.role || 0,
      password: data.password || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role || 0,
    password: '••••••',
    lastLogin: result.created?.toISOString() || '',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneUser;

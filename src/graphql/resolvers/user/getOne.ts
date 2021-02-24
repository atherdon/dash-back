import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one User
 * Authorization: true
 * @param where [GraphQL.GetOneUserParams]
 * @return [GraphQL.User]
 */
const getOneUser: T.Resolver<GraphQL.QueryGetOneUserArgs, GraphQL.User | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.user.findFirst({
    where,
    include: {
      Role: true,
    },
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    name: result.name || 'No name',
    email: result.email,
    role: result.role,
    password: '••••••',
    roleName: result.Role.name,
    lastLogin: result.created?.toISOString() || '',
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneUser;

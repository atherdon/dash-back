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
const getOneUser: T.Resolver<GraphQL.QueryGetOneBrandArgs, GraphQL.User | null> = async (
  _parent,
  params,
  context
) => {
  console.log(context)
  const { where } = params;
  const result = await prisma.user.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
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

export default getOneUser;

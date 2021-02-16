import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one expandable
 * @param where [GraphQL.GetOneExpandableParams]
 * @return [GraphQL.Expandable]
 */
const getOneExpandable: T.Resolver<
  GraphQL.QueryGetOneExpandableArgs,
  GraphQL.Expandable | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.expandable.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    name: result.name,
    key: result.key,
    age: result.age,
    address: result.address,
    description: result.description,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneExpandable;

import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one filter
 * @param where [GraphQL.GetOneFilterParams]
 * @return [GraphQL.Filter]
 */
const getOneFilter: T.Resolver<GraphQL.QueryGetOneFilterArgs, GraphQL.Filter | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.filter.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    filter: result.filter,
    value: result.value,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneFilter;

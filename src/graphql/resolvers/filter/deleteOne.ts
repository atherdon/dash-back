import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one filter
 * @param where [GraphQL.GetOneFilterParams]
 * @return [GraphQL.Filter]
 */
const deleteOneFilter: T.Resolver<
  GraphQL.MutationDeleteOneFilterArgs,
  GraphQL.Filter | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.filter.delete({
    where,
  });
  return {
    id: result.id,
    filter: result.filter,
    value: result.value,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default deleteOneFilter;

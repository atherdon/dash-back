import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one filter
 * @param where [GraphQL.GetOneFilterParams]
 * @param data [GraphQL.UpdateOneFilterParams]
 * @return [GraphQL.Filter]
 */
const updateOneFilter: T.Resolver<
  GraphQL.MutationUpdateOneFilterArgs,
  GraphQL.Filter | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.filter.update({
    where,
    data: {
      filter: data.filter || undefined,
      value: data.value || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    filter: result.filter,
    value: result.value,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneFilter;

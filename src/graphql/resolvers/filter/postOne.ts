/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one filter
 * @param data [GraphQL.PostOneFilterParams]
 * @return [GraphQL.Filter]
 */
const postOneFilter: T.Resolver<GraphQL.MutationPostOneFilterArgs, GraphQL.Filter | null> = async (_, params) => {
  const { data } = params;
  const result = await prisma.filter.create({
    data: {
      filter: data.filter,
      value: data.value,
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

export default postOneFilter;

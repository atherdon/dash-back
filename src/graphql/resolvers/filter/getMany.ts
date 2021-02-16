import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many filter
 * @return [GraphQL.Filter[]]
 */
const getManyFilter: T.Resolver<void, GraphQL.Filter[]> = async () => {
  const result = await prisma.filter.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      filter: result.filter,
      value: result.value,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyFilter;

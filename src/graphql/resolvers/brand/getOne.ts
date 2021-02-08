import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @return [GraphQL.Brand]
 */
const getOneBrand: T.Resolver<GraphQL.QueryGetOneBrandArgs, GraphQL.Brand | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.brand.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    url: result.url,
    email: result.email,
    avgTimeStory: result.avgAllTimeStory || 0,
    avgAllTimeStory: result.avgAllTimeStory || 0,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneBrand;

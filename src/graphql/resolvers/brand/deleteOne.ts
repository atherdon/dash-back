import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @return [GraphQL.Brand]
 */
const deleteOneBrand: T.Resolver<GraphQL.MutationDeleteOneBrandArgs, GraphQL.Brand | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.brand.delete({
    where,
  });
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

export default deleteOneBrand;

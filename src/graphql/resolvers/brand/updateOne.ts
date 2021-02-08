import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return [GraphQL.Brand]
 */
const updateOneBrand: T.Resolver<GraphQL.MutationUpdateOneBrandArgs, GraphQL.Brand | null> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  const result = await prisma.brand.update({
    where,
    data: {
      url: data.url || undefined,
      email: data.email || undefined,
      avgTimeStory: data.avgTimeStory || undefined,
      avgAllTimeStory: data.avgAllTimeStory || undefined,
      updated: new Date(),
    },
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

export default updateOneBrand;

import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one brand
 * @param brand [GraphQL.Brand]
 * @return [GraphQL.Brand]
 */
const postOneBrand: T.Resolver<GraphQL.MutationPostOneBrandArgs, GraphQL.Brand | null> = async (
  _,
  params
) => {
  const { email, url } = params.data;
  const result = await prisma.brand.create({
    data: {
      email,
      url,
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

export default postOneBrand;

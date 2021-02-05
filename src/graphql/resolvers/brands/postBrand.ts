import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

const postBrand: T.Resolver<GraphQL.MutationPostBrandArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const brand = await prisma.brand.create({
    data: {
      email: params.brand.email,
      url: params.brand.url,
    },
  });
  return {
    brand: {
      id: brand.id,
      url: brand.url,
      email: brand.email,
      avgTimeStory: brand.avgAllTimeStory,
      avgAllTimeStory: brand.avgAllTimeStory,
      created: brand.created?.toISOString(),
      updated: brand.updated?.toISOString(),
    },
  };
};

export default postBrand;

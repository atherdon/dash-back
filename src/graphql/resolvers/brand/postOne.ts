/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

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
  // Get params
  const { email, url } = params.data;
  // Catch database error
  let result: Brand;
  try {
    result = await prisma.brand.create({
      data: {
        email,
        url,
      },
    });
  } catch (e) {
    const errMess = 'Error create brand';
    lib.Console.error(errMess, e, new Error());
    return null;
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

export default postOneBrand;

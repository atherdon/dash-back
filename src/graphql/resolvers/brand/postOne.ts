/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

// Get prisma client outside a hadnler
const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Post one brand
 * @param brand [GraphQL.Brand]
 * @return "brand" [GraphQL.Brand]
 */
const postOneBrand: T.Resolver<GraphQL.MutationPostOneBrandArgs, GraphQL.Response> = async (
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
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  // Return success result
  return {
    status: lib.SUCCESS,
    message: 'Brand created',
    httpCode: 201,
    brand: {
      id: result.id,
      url: result.url,
      email: result.email,
      avgTimeStory: result.avgAllTimeStory || 0,
      avgAllTimeStory: result.avgAllTimeStory || 0,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    },
  };
};

// Export by default
export default postOneBrand;

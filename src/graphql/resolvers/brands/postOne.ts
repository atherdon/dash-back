/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

// Get prisma client outside a hadnler
const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Create one brand
 * @param params [GraphQL.MutationPostBrandArgs]
 * @return "brand" [GraphQL.Brand]
 */
const postBrand: T.Resolver<GraphQL.MutationPostBrandArgs, GraphQL.Response> = async (
  _,
  params
) => {
  // Get params
  const { email, url } = params.brand;
  // Catch database error
  let brand;
  try {
    brand = await prisma.brand.create({
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

// Export by default
export default postBrand;

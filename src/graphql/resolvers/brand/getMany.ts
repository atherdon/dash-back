import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get many brands
 * @return "brands" [GraphQL.Brands]
 */
const getManyBrand: T.Resolver<void, GraphQL.Response> = async () => {
  let result: Brand[];
  try {
    result = await prisma.brand.findMany();
  } catch (e) {
    const errMess = 'Error get brands';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  if (result.length === 0) {
    return {
      status: lib.WARNING,
      message: 'Brands not found',
      httpCode: 404,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Brands received',
    httpCode: 200,
    brands: result.map((result) => {
      return {
        id: result.id,
        url: result.url,
        email: result.email,
        avgTimeStory: result.avgAllTimeStory || 0,
        avgAllTimeStory: result.avgAllTimeStory || 0,
        created: result.created?.toISOString() || '',
        updated: result.updated?.toISOString() || '',
      };
    }),
  };
};

export default getManyBrand;

import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

const getBrands: T.Resolver<void, GraphQL.Response> = async (_parent, params) => {
  let brands: Brand[];
  try {
    brands = await prisma.brand.findMany();
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
  const result: GraphQL.Brand[] = brands.map((brand) => {
    return {
      id: brand.id,
      url: brand.url,
      email: brand.email,
      avgTimeStory: brand.avgAllTimeStory,
      avgAllTimeStory: brand.avgAllTimeStory,
      created: brand.created?.toISOString(),
      updated: brand.updated?.toISOString(),
    };
  });
  return {
    status: lib.SUCCESS,
    message: 'Brands received',
    httpCode: 200,
    brands: result,
  };
};

export default getBrands;

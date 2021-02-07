import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @return "brand" [GraphQL.Brand]
 */
const getOneBrand: T.Resolver<GraphQL.QueryGetOneBrandArgs, GraphQL.Response> = async (
  _parent,
  params,
  info: T.Info
) => {
  const { where } = params;
  let result: Brand | null;
  try {
    result = await prisma.brand.findFirst({
      where,
    });
  } catch (e) {
    const errMess = 'Error get brand';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  if (result === null) {
    return {
      status: lib.WARNING,
      message: 'Brand not found',
      httpCode: 404,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Brand received',
    httpCode: 200,
    brand: info.onlyCheck
      ? undefined
      : {
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

export default getOneBrand;

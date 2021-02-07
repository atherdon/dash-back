import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import getOneBrand from './getOne';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Delete one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return "brand" [GraphQL.Brand]
 */
const deleteOneBrand: T.Resolver<GraphQL.MutationDeleteOneBrandArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const { where } = params;
  // Check if exists
  const data = await getOneBrand(_parent, { where }, '', { onlyCheck: true });
  if (data.status !== lib.SUCCESS) {
    return data;
  }
  // Delete brand
  let result: Brand | null;
  try {
    result = await prisma.brand.delete({
      where,
    });
  } catch (e) {
    const errMess = 'Error delete brand';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Brand deleted',
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

export default deleteOneBrand;

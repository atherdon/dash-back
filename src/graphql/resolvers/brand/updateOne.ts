import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import getOneBrand from './getOne';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Update one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return "brand" [GraphQL.Brand]
 */
const updateOneBrand: T.Resolver<GraphQL.MutationUpdateOneBrandArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  // Check if exists
  const oldRes = await getOneBrand(_parent, { where }, '', { onlyCheck: true });
  if (oldRes.status !== lib.SUCCESS) {
    return oldRes;
  }
  // Update brand
  let result: Brand | null;
  try {
    result = await prisma.brand.update({
      where,
      data: {
        url: data.url || undefined,
        email: data.email || undefined,
        avgTimeStory: data.avgTimeStory || undefined,
        avgAllTimeStory: data.avgAllTimeStory || undefined,
        updated: new Date(),
      },
    });
  } catch (e) {
    const errMess = 'Error update brand';
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
    message: 'Brand updated',
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

export default updateOneBrand;

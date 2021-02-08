import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @return [GraphQL.Brand]
 */
const getOneBrand: T.Resolver<GraphQL.QueryGetOneBrandArgs, GraphQL.Brand | null> = async (
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
    return null;
  }
  if (result === null) {
    return result;
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

export default getOneBrand;

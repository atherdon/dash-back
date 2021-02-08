import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Delete one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return [GraphQL.Brand]
 */
const deleteOneBrand: T.Resolver<GraphQL.MutationDeleteOneBrandArgs, GraphQL.Brand | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  let result: Brand | null;
  try {
    result = await prisma.brand.delete({
      where,
    });
  } catch (e) {
    const errMess = 'Error delete brand';
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

export default deleteOneBrand;

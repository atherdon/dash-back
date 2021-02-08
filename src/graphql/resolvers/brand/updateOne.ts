import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Update one brand
 * @param where [GraphQL.GetOneBrandParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return [GraphQL.Brand]
 */
const updateOneBrand: T.Resolver<GraphQL.MutationUpdateOneBrandArgs, GraphQL.Brand | null> = async (
  _parent,
  params
) => {
  const { where, data } = params;
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

export default updateOneBrand;

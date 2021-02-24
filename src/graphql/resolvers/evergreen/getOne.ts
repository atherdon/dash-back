import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one Evergreen
 * @param where [GraphQL.GetOneEvergreenParams]
 * @return [GraphQL.Evergreen]
 */
const getOneEvergreen: T.Resolver<GraphQL.QueryGetOneEvergreenArgs, GraphQL.Evergreen | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.evergreen.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    url: result.url,
    v: result.v,
    email: result.email,
    isPublished: result.isPublished,
    added: result.added,
    edited: result.edited,
    published: result.published,
    avgTimeStory: result.avgAllTimeStory,
    avgAllTimeStory: result.avgAllTimeStory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneEvergreen;

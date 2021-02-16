import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one author
 * @param where [GraphQL.GetOneTopAuthorParams]
 * @return [GraphQL.TopAuthor]
 */
const getOneAuthor: T.Resolver<GraphQL.QueryGetOneTopAuthorArgs, GraphQL.TopAuthor | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.topAuthor.findFirst({
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

export default getOneAuthor;

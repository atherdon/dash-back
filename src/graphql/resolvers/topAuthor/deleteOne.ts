import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one top author
 * @param where [GraphQL.GetOneTopAuthorParams]
 * @return [GraphQL.TopAuthor]
 */
const deleteOneAuthor: T.Resolver<
  GraphQL.MutationDeleteOneTopAuthorArgs,
  GraphQL.TopAuthor | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.topAuthor.delete({
    where,
  });
  return {
    id: result.id,
    url: result.url,
    v: result.v,
    email: result.email,
    isPublished: result.isPublished,
    added: result.added,
    published: result.published,
    edited: result.edited,
    avgTimeStory: result.avgAllTimeStory,
    avgAllTimeStory: result.avgAllTimeStory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default deleteOneAuthor;

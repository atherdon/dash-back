import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one author
 * @param where [GraphQL.GetOneAuthorParams]
 * @return [GraphQL.Author]
 */
const deleteOneAuthor: T.Resolver<
  GraphQL.MutationDeleteOneBrandArgs,
  GraphQL.Author | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.author.delete({
    where,
  });
  return {
    id: result.id,
    url: result.url,
    email: result.email,
    isPublished: result.isPublished || false,
    avgTimeStory: result.avgAllTimeStory || 0,
    avgAllTimeStory: result.avgAllTimeStory || 0,
    created: result.created?.toISOString() || '',
    edited: result.edited?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
    published: result.published?.toISOString() || '',
  };
};

export default deleteOneAuthor;

import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one author
 * @param where [GraphQL.GetOneAuthorParams]
 * @param data [GraphQL.UpdateOneAuthorParams]
 * @return [GraphQL.Author]
 */
const updateOneAuthor: T.Resolver<
  GraphQL.MutationUpdateOneAuthorArgs,
  GraphQL.Author | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.author.update({
    where,
    data: {
      url: data.url || undefined,
      email: data.email || undefined,
      avgTimeStory: data.avgTimeStory || undefined,
      avgAllTimeStory: data.avgAllTimeStory || undefined,
      edited: data.edited || undefined,
      published: data.published || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    url: result.url,
    email: result.email,
    avgTimeStory: result.avgAllTimeStory || 0,
    avgAllTimeStory: result.avgAllTimeStory || 0,
    isPublished: result.isPublished || false,
    created: result.created?.toISOString() || '',
    edited: result.edited?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
    published: result.published?.toISOString() || '',
  };
};

export default updateOneAuthor;

/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Post one top author
 * @param data [GraphQL.TopAuthor]
 * @return [GraphQL.TopAuthor]
 */
const postOneAuthor: T.Resolver<
  GraphQL.MutationPostOneTopAuthorArgs,
  GraphQL.TopAuthor | null
> = async (_, params) => {
  const { data } = params;
  const result = await prisma.topAuthor.create({
    data: {
      url: data.url,
      email: data.email,
      v: data.v,
      isPublished: data.isPublished,
      added: data.added,
      edited: data.edited,
      published: data.published,
      avgTimeStory: data.avgTimeStory,
      avgAllTimeStory: data.avgAllTimeStory,
    },
  });
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

export default postOneAuthor;

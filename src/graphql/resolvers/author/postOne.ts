/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Post one author
 * @param data [GraphQL.Author]
 * @return [GraphQL.Author]
 */
const postOneAuthor: T.Resolver<GraphQL.MutationPostOneAuthorArgs, GraphQL.Author | null> = async (
  _,
  params
) => {
  const { email, url } = params.data;
  const result = await prisma.author.create({
    data: {
      email,
      url,
    },
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
    published: result.published?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default postOneAuthor;

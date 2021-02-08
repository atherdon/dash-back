/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

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
  let result: Author;
  try {
    result = await prisma.author.create({
      data: {
        email,
        url,
      },
    });
  } catch (e) {
    const errMess = 'Error create author';
    lib.Console.error(errMess, e, new Error());
    return null;
  }
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

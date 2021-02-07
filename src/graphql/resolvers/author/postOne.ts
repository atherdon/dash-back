/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

// Get prisma client outside a hadnler
const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Post one author
 * @param data [GraphQL.Author]
 * @return "author" [GraphQL.Author]
 */
const postOneAuthor: T.Resolver<GraphQL.MutationPostOneAuthorArgs, GraphQL.Response> = async (
  _,
  params
) => {
  // Get params
  const { email, url } = params.data;
  // Catch database error
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
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  // Return success result
  return {
    status: lib.SUCCESS,
    message: 'Author created',
    httpCode: 201,
    author: {
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
    },
  };
};

// Export by default
export default postOneAuthor;

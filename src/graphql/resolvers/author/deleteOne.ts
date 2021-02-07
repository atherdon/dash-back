import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import getOneAuthor from './getOne';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Delete one author
 * @param where [GraphQL.GetOneAuthorParams]
 * @return "author" [GraphQL.Author]
 */
const deleteOneAuthor: T.Resolver<GraphQL.MutationDeleteOneBrandArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const { where } = params;
  // Check if exists
  const data = await getOneAuthor(_parent, { where }, '', { onlyCheck: true });
  if (data.status !== lib.SUCCESS) {
    return data;
  }
  // Delete brand
  let result: Author | null;
  try {
    result = await prisma.author.delete({
      where,
    });
  } catch (e) {
    const errMess = 'Error delete author';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Author deleted',
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
      updated: result.updated?.toISOString() || '',
      published: result.published?.toISOString() || '',
    },
  };
};

export default deleteOneAuthor;

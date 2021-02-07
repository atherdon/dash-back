import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get one author
 * @param where [GraphQL.GetOneAuthorParams]
 * @return "author" [GraphQL.Author]
 */
const getOneAuthor: T.Resolver<GraphQL.QueryGetOneAuthorArgs, GraphQL.Response> = async (
  _parent,
  params,
  info: T.Info
) => {
  const { where } = params;
  let result: Author | null;
  try {
    result = await prisma.author.findFirst({
      where,
    });
  } catch (e) {
    const errMess = 'Error get author';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  if (result === null) {
    return {
      status: lib.WARNING,
      message: 'Author not found',
      httpCode: 404,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Author received',
    httpCode: 200,
    author: info.onlyCheck
      ? undefined
      : {
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

export default getOneAuthor;

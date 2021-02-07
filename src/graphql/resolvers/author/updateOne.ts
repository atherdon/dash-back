import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import getOneAuthor from './getOne';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Update one author
 * @param where [GraphQL.GetOneAuthorParams]
 * @param data [GraphQL.UpdateOneAuthorParams]
 * @return "author" [GraphQL.Author]
 */
const updateOneAuthor: T.Resolver<GraphQL.MutationUpdateOneAuthorArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  // Check if exists
  const oldRes = await getOneAuthor(_parent, { where }, '', { onlyCheck: true });
  if (oldRes.status !== lib.SUCCESS) {
    return oldRes;
  }
  // Update brand
  let result: Author | null;
  try {
    result = await prisma.author.update({
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
  } catch (e) {
    const errMess = 'Error update author';
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
    message: 'Author updated',
    httpCode: 201,
    author: {
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
    },
  };
};

export default updateOneAuthor;

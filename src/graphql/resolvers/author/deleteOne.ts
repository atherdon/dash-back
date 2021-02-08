import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

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
  let result: Author | null;
  try {
    result = await prisma.author.delete({
      where,
    });
  } catch (e) {
    const errMess = 'Error delete author';
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
    updated: result.updated?.toISOString() || '',
    published: result.published?.toISOString() || '',
  };
};

export default deleteOneAuthor;

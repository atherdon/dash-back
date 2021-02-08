import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

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
    return null;
  }
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

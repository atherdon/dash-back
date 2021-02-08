import * as T from '../../../types';
import { PrismaClient, Author } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get many authors
 * @return [GraphQL.Author[]]
 */
const getManyAuthor: T.Resolver<void, GraphQL.Author[]> = async () => {
  let result: Author[];
  try {
    result = await prisma.author.findMany();
  } catch (e) {
    const errMess = 'Error get authors';
    lib.Console.error(errMess, e, new Error());
    return [];
  }
  return result.map((result) => {
    return {
      id: result.id,
      url: result.url,
      email: result.email,
      avgTimeStory: result.avgAllTimeStory || 0,
      published: result.published?.toISOString() || '',
      isPublished: result.isPublished || false,
      avgAllTimeStory: result.avgAllTimeStory || 0,
      created: result.created?.toISOString() || '',
      edited: result.edited?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyAuthor;

import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many authors
 * @return [GraphQL.Author[]]
 */
const getManyAuthor: T.Resolver<void, GraphQL.Author[]> = async () => {
  const result = await prisma.author.findMany();
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

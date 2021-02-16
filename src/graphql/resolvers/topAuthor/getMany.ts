import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many top authors
 * @return [GraphQL.TopAuthor[]]
 */
const getManyAuthor: T.Resolver<void, GraphQL.TopAuthor[]> = async () => {
  const result = await prisma.topAuthor.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      url: result.url,
      v: result.v,
      email: result.email,
      isPublished: result.isPublished,
      added: result.added,
      edited: result.edited,
      published: result.published,
      avgTimeStory: result.avgAllTimeStory,
      avgAllTimeStory: result.avgAllTimeStory,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyAuthor;

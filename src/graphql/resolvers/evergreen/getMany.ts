import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many Evergreens
 * @return [GraphQL.EvergreenMany]
 */
const getManyEvergreen: T.Resolver<void, GraphQL.EvergreenMany> = async () => {
  const count = await prisma.evergreen.count();
  const result = await prisma.evergreen.findMany();
  return {
    count,
    items: result.map((result) => {
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
        count,
        created: result.created?.toISOString() || '',
        updated: result.updated?.toISOString() || '',
      };
    }),
  }
};

export default getManyEvergreen;

import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many tags
 * @return [GraphQL.Tag[]]
 */
const getManyTag: T.Resolver<void, GraphQL.Tag[]> = async () => {
  const result = await prisma.tag.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      word: result.word,
      count: result.count,
      char: result.char,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyTag;

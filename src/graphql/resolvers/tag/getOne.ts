import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one tag
 * @param where [GraphQL.GetOneTagParams]
 * @return [GraphQL.Tag]
 */
const getOneTag: T.Resolver<GraphQL.QueryGetOneTagArgs, GraphQL.Tag | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.tag.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    word: result.word,
    count: result.count,
    char: result.char,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneTag;

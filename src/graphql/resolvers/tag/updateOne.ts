import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one tag
 * @param where [GraphQL.GetOneTagParams]
 * @param data [GraphQL.UpdateOneTagParams]
 * @return [GraphQL.Tag]
 */
const updateOneTag: T.Resolver<GraphQL.MutationUpdateOneTagArgs, GraphQL.Tag | null> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.tag.update({
    where,
    data: {
      word: data.word || undefined,
      count: data.count || undefined,
      char: data.char || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    word: result.word,
    count: result.count,
    char: result.char,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneTag;

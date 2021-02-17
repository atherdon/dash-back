import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one tag
 * @param data [GraphQL.PostOneTagParams]
 * @return [GraphQL.Tag]
 */
const postOneTag: T.Resolver<GraphQL.MutationPostOneTagArgs, GraphQL.Tag | null> = async (_, params) => {
  const { data } = params;
  const result = await prisma.tag.create({
    data: {
      word: data.word,
      count: data.count,
      char: data.char,
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

export default postOneTag;

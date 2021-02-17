import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one tag
 * @param where [GraphQL.GetOneTagParams]
 * @return [GraphQL.Page]
 */
const deleteOneTag: T.Resolver<GraphQL.MutationDeleteOneTagArgs, GraphQL.Tag | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.tag.delete({
    where,
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

export default deleteOneTag;

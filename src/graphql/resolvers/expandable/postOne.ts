import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one expandable
 * @param data [GraphQL.PostOneExpandableParams]
 * @return [GraphQL.Expandable]
 */
const postOneExpandable: T.Resolver<
  GraphQL.MutationPostOneExpandableArgs,
  GraphQL.Expandable | null
> = async (_, params) => {
  const { data } = params;
  const result = await prisma.expandable.create({
    data: {
      name: data.name,
      key: data.key,
      parentCategory: data.parentCategory,
      articles: data.articles.join(','),
    },
  });
  return {
    id: result.id,
    name: result.name,
    key: result.key,
    articles: result.articles.split(',') || [],
    parentCategory: result.parentCategory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default postOneExpandable;

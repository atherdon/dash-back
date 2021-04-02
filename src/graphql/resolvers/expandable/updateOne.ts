import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one expandable
 * @param where [GraphQL.GetOneExpandableParams]
 * @param data [GraphQL.UpdateOneExpandableParams]
 * @return [GraphQL.Expandable]
 */
const updateOneExpandable: T.Resolver<
  GraphQL.MutationUpdateOneExpandableArgs,
  GraphQL.Expandable | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.expandable.update({
    where,
    data: {
      name: data.name || undefined,
      key: data.key || undefined,
      parentCategory: data.parentCategory || undefined,
      articles: data.articles ? data.articles.join(',') : undefined,
      updated: new Date(),
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

export default updateOneExpandable;

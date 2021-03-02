import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one article
 * @param where [GraphQL.GetOneArticleParams]
 * @return [GraphQL.Article]
 */
const deleteOneArticle: T.Resolver<
  GraphQL.MutationDeleteOneArticleArgs,
  GraphQL.Article | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.article.delete({
    where,
  });
  return {
    id: result.id,
    url: result.url,
    v: result.v,
    type: result.type,
    email: result.email,
    isPublished: result.isPublished,
    added: result.added.toISOString(),
    edited: result.edited?.toISOString() || '',
    published: result.published?.toISOString() || '',
    avgTimeStory: result.avgAllTimeStory || null,
    avgAllTimeStory: result.avgAllTimeStory || null,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default deleteOneArticle;

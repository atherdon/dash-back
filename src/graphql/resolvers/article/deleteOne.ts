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
  // Delete article tags
  await prisma.articleTag.deleteMany({
    where: {
      articleId: where.id,
    },
  });
  // Delete article
  const result = await prisma.article.delete({
    where,
    select: {
      id: true,
      url: true,
      ready: true,
      type: true,
      isPublished: true,
      added: true,
      edited: true,
      published: true,
      avgTimeStory: true,
      avgAllTimeStory: true,
      created: true,
      updated: true,
      ArticleTag: true,
    },
  });
  return {
    id: result.id,
    url: result.url,
    ready: result.ready || false,
    type: result.type,
    tags: result.ArticleTag.map((item) => item.tagId.toString()),
    isPublished: result.isPublished || false,
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

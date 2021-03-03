import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one article
 * @param where [GraphQL.GetOneArticleParams]
 * @return [GraphQL.Article]
 */
const getOneArticle: T.Resolver<GraphQL.QueryGetOneArticleArgs, GraphQL.Article | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.article.findFirst({
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
  if (result === null) {
    return result;
  }
  // Get article tag list
  const tags = await prisma.articleTag.findMany({
    where: {
      articleId: result.id,
    },
    select: {
      Tag: true,
    },
  });
  return {
    id: result.id,
    url: result.url,
    ready: result.ready || false,
    type: result.type,
    tags: tags.map((item) => item.Tag.word),
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

export default getOneArticle;

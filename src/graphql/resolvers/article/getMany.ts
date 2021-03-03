import * as T from '../../../types';
import { PrismaClient, Prisma } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many articles
 * @params where [GraphQL.GetManyArticleParams]
 * @return [GraphQL.ArticleMany]
 */
const getManyArticle: T.Resolver<GraphQL.QueryGetManyArticleArgs, GraphQL.ArticleMany> = async (
  _,
  params
) => {
  const { where } = params;
  // Change specifiied where
  const newWhere: Prisma.ArticleWhereInput = {
    type: where.type,
    isPublished: typeof where.isPublished === 'boolean' ? where.isPublished : undefined,
  };
  // Get count all with where filter
  const count = await prisma.article.count({ where: newWhere });
  // Get pagination values
  let skip = undefined;
  let take = undefined;
  if (where.pagination) {
    take = where.pagination.limit;
    skip = take * where.pagination.current - take;
  }
  const result = await prisma.article.findMany({
    where: newWhere,
    take,
    skip,
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
  // Parse articles to get tags
  const items = result.map(async (result) => {
    // Get article tag list
    const tags = await prisma.articleTag.findMany({
      where: {
        articleId: result.id,
      },
      select: {
        Tag: true,
      },
    });
    const article = {
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
    return article;
  });
  return {
    count,
    items: await Promise.all(items),
  };
};

export default getManyArticle;

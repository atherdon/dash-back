import * as T from '../../../types';
import { PrismaClient, Prisma } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many article by tags
 * @params where [GraphQL.GetManyArticleTagParams]
 * @return [GraphQL.ArticleTagMany]
 */
const getManyArticleTag: T.Resolver<
  GraphQL.QueryGetManyArticleTagArgs,
  GraphQL.ArticleTagMany
> = async (_, params) => {
  const { where } = params;
  // Change specifiied where
  const newWhere: Prisma.ArticleTagWhereInput = {
    Article: {
      type: where.type,
    },
    articleId: where.articleId || undefined,
    tagId: where.tagId || undefined,
    Tag: {
      word: where.word || undefined,
    },
  };
  // Get count all with where filter
  const count = await prisma.articleTag.count({ where: newWhere });
  // Get pagination values
  let skip = undefined;
  let take = undefined;
  if (where.pagination) {
    take = where.pagination.limit;
    skip = take * where.pagination.current - take;
  }
  const result = await prisma.articleTag.findMany({
    where: newWhere,
    select: {
      Article: true,
      Tag: true,
      id: true,
      tagId: true,
      articleId: true,
      created: true,
      updated: true,
    },
    take,
    skip,
  });
  const items = result.map(async (result) => {
    // Get article tag list
    const tags = await prisma.articleTag.findMany({
      where: {
        articleId: result.Article.id,
      },
      select: {
        Tag: true,
      },
    });
    return {
      id: result.id,
      tagId: result.tagId,
      articleId: result.articleId,
      Article: {
        id: result.Article.id,
        url: result.Article.url,
        ready: result.Article.ready || false,
        type: result.Article.type,
        tags: tags.map((item) => item.Tag.word),
        isPublished: result.Article.isPublished || false,
        added: result.Article.added.toISOString(),
        edited: result.Article.edited?.toISOString() || '',
        published: result.Article.published?.toISOString() || '',
        avgTimeStory: result.Article.avgAllTimeStory || null,
        avgAllTimeStory: result.Article.avgAllTimeStory || null,
        created: result.Article.created?.toISOString() || '',
        updated: result.Article.updated?.toISOString() || '',
      },
      Tag: {
        id: result.Tag.id,
        word: result.Tag.word,
        count: result.Tag.count,
        char: result.Tag.char,
        created: result.Tag.created?.toISOString() || '',
        updated: result.Tag.updated?.toISOString() || '',
      },
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
  return {
    count,
    items: await Promise.all(items),
  };
};

export default getManyArticleTag;

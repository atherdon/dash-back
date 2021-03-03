import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one article tag
 * @param where [GraphQL.GetOneArticleTagParams]
 * @return [GraphQL.ArticleTag]
 */
const deleteOneArticleTag: T.Resolver<
  GraphQL.MutationDeleteOneArticleTagArgs,
  GraphQL.ArticleTag | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.articleTag.delete({
    where,
    select: {
      Article: true,
      Tag: true,
      id: true,
      tagId: true,
      articleId: true,
      created: true,
      updated: true,
    },
  });
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
};

export default deleteOneArticleTag;

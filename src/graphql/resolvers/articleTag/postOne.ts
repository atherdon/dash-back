import type * as T from '../../../types';
import { PrismaClient, Article, Tag } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

// Interfaces for global objects
interface Result {
  Article: Article;
  Tag: Tag;
  id: number;
  tagId: number;
  articleId: number;
  created: Date | null;
  updated: Date | null;
}

// Global objects
const select = {
  Article: true,
  Tag: true,
  id: true,
  tagId: true,
  articleId: true,
  created: true,
  updated: true,
};
const getResult = async (result: Result) => {
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

/**
 * Post one article tag
 * @param data [GraphQL.PostOneArticleTagParams]
 * @return [GraphQL.ArticleTag]
 */
const postOneArticleTag: T.Resolver<
  GraphQL.MutationPostOneArticleTagArgs,
  GraphQL.ArticleTag | null
> = async (_, params) => {
  const { data } = params;
  // Check if exists
  let result = await prisma.articleTag.findFirst({
    where: {
      articleId: data.articleId,
      tagId: data.tagId,
    },
    select,
  });
  if (result !== null) {
    return await getResult(result);
  }
  // If not exists create new
  result = await prisma.articleTag.create({
    data: {
      tagId: data.tagId,
      articleId: data.articleId,
    },
    select,
  });
  return await getResult(result);
};

export default postOneArticleTag;

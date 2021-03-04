import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one article
 * @param where [GraphQL.GetOneArticleParams]
 * @param data [GraphQL.UpdateOneArticleParams]
 * @return [GraphQL.Article]
 */
const updateOneArticle: T.Resolver<
  GraphQL.MutationUpdateOneArticleArgs,
  GraphQL.Article | null
> = async (_parent, params) => {
  const { where, data } = params;
  // Check dates
  let added: Date | undefined = new Date(data.added || '');
  added = isNaN(added.getDate()) ? undefined : added;
  let edited: Date | undefined = new Date(data.edited || '');
  edited = isNaN(edited.getDate()) ? undefined : edited;
  let published: Date | undefined = new Date(data.published || '');
  published = isNaN(published.getDate()) ? undefined : published;
  const result = await prisma.article.update({
    where,
    data: {
      url: data.url || undefined,
      ready: typeof data.ready === 'boolean' ? data.ready : undefined,
      isPublished: typeof data.isPublished === 'boolean' ? data.isPublished : undefined,
      type: data.type || undefined,
      added,
      edited,
      published,
      avgTimeStory: data.avgTimeStory || undefined,
      avgAllTimeStory: data.avgAllTimeStory || undefined,
      updated: new Date(),
    },
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
    avgTimeStory: result.avgAllTimeStory,
    avgAllTimeStory: result.avgAllTimeStory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneArticle;

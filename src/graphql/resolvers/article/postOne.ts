import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one article
 * @param data [GraphQL.PostOneArticleParams]
 * @return [GraphQL.Article]
 */
const postOneArticle: T.Resolver<
  GraphQL.MutationPostOneArticleArgs,
  GraphQL.Article | null
> = async (_, params) => {
  const { data } = params;
  // Check dates
  let added: Date | string = new Date(data.added);
  added = isNaN(added.getDate()) ? '' : added;
  let edited: Date | null = new Date(data.edited || '');
  edited = isNaN(edited.getDate()) ? null : edited;
  let published: Date | null = new Date(data.published || '');
  published = isNaN(published.getDate()) ? null : published;
  const result = await prisma.article.create({
    data: {
      url: data.url,
      email: data.email,
      v: data.v,
      type: data.type,
      isPublished: data.isPublished,
      added,
      edited,
      published,
      avgTimeStory: data.avgTimeStory,
      avgAllTimeStory: data.avgAllTimeStory,
    },
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
    avgTimeStory: result.avgAllTimeStory,
    avgAllTimeStory: result.avgAllTimeStory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default postOneArticle;

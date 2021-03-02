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
      email: data.email || undefined,
      v: data.v || undefined,
      isPublished: typeof data.isPublished === 'boolean' ? data.isPublished : undefined,
      type: data.type || undefined,
      added,
      edited,
      published,
      avgTimeStory: data.avgTimeStory || undefined,
      avgAllTimeStory: data.avgAllTimeStory || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    url: result.url,
    v: result.v,
    email: result.email,
    type: result.type,
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

export default updateOneArticle;

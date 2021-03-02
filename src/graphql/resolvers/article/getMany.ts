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
    skip = take * where.pagination.current - take + 1;
  }
  const result = await prisma.article.findMany({
    where: newWhere,
    take,
    skip,
  });
  return {
    count,
    items: result.map((result) => {
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
    }),
  };
};

export default getManyArticle;

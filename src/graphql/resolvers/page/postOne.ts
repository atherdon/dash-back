import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one page
 * @param data [GraphQL.PostOnePageParams]
 * @return [GraphQL.Page]
 */
const postOnePage: T.Resolver<GraphQL.MutationPostOnePageArgs, GraphQL.Page | null> = async (_, params) => {
  const { data } = params;
  const result = await prisma.page.create({
    data: {
      url: data.url,
      clicks: data.clicks,
      impressions: data.impressions,
      ctr: data.ctr,
      position: data.position,
    },
  });
  return {
    id: result.id,
    url: result.url,
    clicks: result.clicks,
    impressions: result.impressions,
    ctr: result.ctr,
    position: result.position,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default postOnePage;

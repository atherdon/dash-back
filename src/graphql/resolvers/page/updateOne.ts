import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one page
 * @param where [GraphQL.GetOnePageParams]
 * @param data [GraphQL.UpdateOnePageParams]
 * @return [GraphQL.Page]
 */
const updateOnePage: T.Resolver<GraphQL.MutationUpdateOnePageArgs, GraphQL.Page | null> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.page.update({
    where,
    data: {
      url: data.url || undefined,
      clicks: data.clicks || undefined,
      impressions: data.impressions || undefined,
      ctr: data.ctr || undefined,
      position: data.position || undefined,
      updated: new Date(),
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

export default updateOnePage;

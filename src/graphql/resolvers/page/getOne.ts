import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one page
 * @param where [GraphQL.GetOnePageParams]
 * @return [GraphQL.Page]
 */
const getOnePage: T.Resolver<GraphQL.QueryGetOnePageArgs, GraphQL.Page | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.page.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
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

export default getOnePage;

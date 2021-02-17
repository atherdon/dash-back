import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one page
 * @param where [GraphQL.GetOnePageParams]
 * @return [GraphQL.Page]
 */
const deleteOnePage: T.Resolver<GraphQL.MutationDeleteOnePageArgs, GraphQL.Page | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.page.delete({
    where,
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

export default deleteOnePage;

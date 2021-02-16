import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one appearance
 * @param where [GraphQL.GetOneAppearanceParams]
 * @return [GraphQL.Filter]
 */
const deleteOneAppearance: T.Resolver<
  GraphQL.MutationDeleteOneAppearanceArgs,
  GraphQL.Appearance | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.appearance.delete({
    where,
  });
  return {
    id: result.id,
    search: result.search,
    clicks: result.clicks,
    impressions: result.impressions,
    ctr: result.ctr,
    position: result.position,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default deleteOneAppearance;

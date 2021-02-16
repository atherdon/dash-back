import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one appearance
 * @param where [GraphQL.GetOneAppearanceParams]
 * @param data [GraphQL.UpdateOneAppearanceParams]
 * @return [GraphQL.Appearance]
 */
const updateOneAppearance: T.Resolver<
  GraphQL.MutationUpdateOneAppearanceArgs,
  GraphQL.Appearance | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.appearance.update({
    where,
    data: {
      search: data.search || undefined,
      clicks: data.clicks || undefined,
      impressions: data.impressions || undefined,
      ctr: data.ctr || undefined,
      updated: new Date(),
    },
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

export default updateOneAppearance;

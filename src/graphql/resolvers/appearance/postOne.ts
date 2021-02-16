/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one appearance
 * @param data [GraphQL.PostOneAppearanceParams]
 * @return [GraphQL.Appearance]
 */
const postOneAppearance: T.Resolver<
  GraphQL.MutationPostOneAppearanceArgs,
  GraphQL.Appearance | null
> = async (_, params) => {
  const { data } = params;
  const result = await prisma.appearance.create({
    data: {
      search: data.search,
      clicks: data.clicks,
      impressions: data.impressions,
      ctr: data.ctr,
      position: data.position,
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

export default postOneAppearance;

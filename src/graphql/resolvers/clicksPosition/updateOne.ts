import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one clicks position
 * @param where [GraphQL.GetOneClicksPositionParams]
 * @param data [GraphQL.UpdateOneClicksPositionParams]
 * @return [GraphQL.ClicksPosition]
 */
const updateOneClicksPosition: T.Resolver<
  GraphQL.MutationUpdateOneClicksPositionArgs,
  GraphQL.ClicksPosition | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.clicksPosition.update({
    where,
    data: {
      date: data.date || undefined,
      clicks: data.clicks || undefined,
      impressions: data.impressions || undefined,
      ctr: data.ctr || undefined,
      position: data.position || undefined,
    },
  });
  return {
    id: result.id,
    date: result.date,
    clicks: result.clicks,
    impressions: result.impressions,
    ctr: result.ctr,
    position: result.position,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneClicksPosition;

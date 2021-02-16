import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one clicks position
 * @param where [GraphQL.GetOneClicksPositionParams]
 * @return [GraphQL.ClicksPosition]
 */
const deleteOneClicksPosition: T.Resolver<
  GraphQL.MutationDeleteOneClicksPositionArgs,
  GraphQL.ClicksPosition | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.clicksPosition.delete({
    where,
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

export default deleteOneClicksPosition;

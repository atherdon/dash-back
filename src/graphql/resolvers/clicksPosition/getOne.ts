import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one clicks position
 * @param where [GraphQL.GetOneClicksPositionParams]
 * @return [GraphQL.ClicksPosition]
 */
const getOneClicksPosition: T.Resolver<
  GraphQL.QueryGetOneClicksPositionArgs,
  GraphQL.ClicksPosition | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.clicksPosition.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
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

export default getOneClicksPosition;

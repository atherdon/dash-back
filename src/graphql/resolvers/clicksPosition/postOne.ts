/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one clicks position
 * @param data [GraphQL.PostOneClicksPositionParams]
 * @return [GraphQL.ClicksPosition]
 */
const postOneClicksPosition: T.Resolver<
  GraphQL.MutationPostOneClicksPositionArgs,
  GraphQL.ClicksPosition | null
> = async (_, params) => {
  const { data } = params;
  const result = await prisma.clicksPosition.create({
    data: {
      date: data.date,
      clicks: data.clicks,
      impressions: data.impressions,
      ctr: data.ctr,
      position: data.position,
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

export default postOneClicksPosition;

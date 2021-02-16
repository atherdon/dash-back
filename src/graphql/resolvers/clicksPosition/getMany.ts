import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many clicks position
 * @return [GraphQL.ClicksPosition[]]
 */
const getManyClicksPosition: T.Resolver<void, GraphQL.ClicksPosition[]> = async () => {
  const result = await prisma.clicksPosition.findMany();
  return result.map((result) => {
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
  });
};

export default getManyClicksPosition;

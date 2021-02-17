import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one device
 * @param where [GraphQL.GetOneDeviceParams]
 * @return [GraphQL.Device]
 */
const getOneDevice: T.Resolver<GraphQL.QueryGetOneDeviceArgs, GraphQL.Device | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.device.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
  return {
    id: result.id,
    name: result.name,
    clicks: result.clicks,
    impressions: result.impressions,
    ctr: result.ctr,
    position: result.position,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneDevice;

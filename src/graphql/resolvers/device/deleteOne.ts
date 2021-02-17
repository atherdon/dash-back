import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one device
 * @param where [GraphQL.GetOneDeviceParams]
 * @return [GraphQL.Device]
 */
const deleteOneDevice: T.Resolver<
  GraphQL.MutationDeleteOneDeviceArgs,
  GraphQL.Device | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.device.delete({
    where,
  });
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

export default deleteOneDevice;

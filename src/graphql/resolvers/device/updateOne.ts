import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one device
 * @param where [GraphQL.GetOneDeviceParams]
 * @param data [GraphQL.UpdateOneDeviceParams]
 * @return [GraphQL.Device]
 */
const updateOneDevice: T.Resolver<
  GraphQL.MutationUpdateOneDeviceArgs,
  GraphQL.Device | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.device.update({
    where,
    data: {
      name: data.name || undefined,
      clicks: data.clicks || undefined,
      impressions: data.impressions || undefined,
      ctr: data.ctr || undefined,
      position: data.position || undefined,
      updated: new Date(),
    },
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

export default updateOneDevice;

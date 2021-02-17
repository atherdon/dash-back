import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one country
 * @param where [GraphQL.GetOneCountryParams]
 * @param data [GraphQL.UpdateOneCountryParams]
 * @return [GraphQL.Country]
 */
const updateOneCountry: T.Resolver<
  GraphQL.MutationUpdateOneCountryArgs,
  GraphQL.Country | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.country.update({
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

export default updateOneCountry;

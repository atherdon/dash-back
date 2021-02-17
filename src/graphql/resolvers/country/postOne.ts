import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one country
 * @param data [GraphQL.PostOneCountryParams]
 * @return [GraphQL.Country]
 */
const postOneCountry: T.Resolver<
  GraphQL.MutationPostOneCountryArgs,
  GraphQL.Country | null
> = async (_, params) => {
  const { data } = params;
  const result = await prisma.country.create({
    data: {
      name: data.name,
      clicks: data.clicks,
      impressions: data.impressions,
      ctr: data.ctr,
      position: data.position,
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

export default postOneCountry;

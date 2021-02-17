import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one country
 * @param where [GraphQL.GetOneCountryParams]
 * @return [GraphQL.Country]
 */
const getOneCountry: T.Resolver<GraphQL.QueryGetOneCountryArgs, GraphQL.Country | null> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.country.findFirst({
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

export default getOneCountry;

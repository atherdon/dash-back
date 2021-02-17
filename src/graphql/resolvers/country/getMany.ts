import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many countries
 * @return [GraphQL.Country[]]
 */
const getManyCountry: T.Resolver<void, GraphQL.Country[]> = async () => {
  const result = await prisma.country.findMany();
  return result.map((result) => {
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
  });
};

export default getManyCountry;

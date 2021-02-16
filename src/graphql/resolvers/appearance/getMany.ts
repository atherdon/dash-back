import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many appearance
 * @return [GraphQL.Appearance[]]
 */
const getManyAppearance: T.Resolver<void, GraphQL.Appearance[]> = async () => {
  const result = await prisma.appearance.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      search: result.search,
      clicks: result.clicks,
      impressions: result.impressions,
      ctr: result.ctr,
      position: result.position,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyAppearance;

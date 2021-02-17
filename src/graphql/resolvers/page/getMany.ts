import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many pages
 * @return [GraphQL.Page[]]
 */
const getManyPage: T.Resolver<void, GraphQL.Page[]> = async () => {
  const result = await prisma.page.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      url: result.url,
      clicks: result.clicks,
      impressions: result.impressions,
      ctr: result.ctr,
      position: result.position,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyPage;

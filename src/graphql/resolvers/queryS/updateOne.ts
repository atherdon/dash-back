import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one query
 * @param where [GraphQL.GetOneQuerySParams]
 * @param data [GraphQL.UpdateOneQuerySParams]
 * @return [GraphQL.QueryS]
 */
const updateOneQueryS: T.Resolver<
  GraphQL.MutationUpdateOneQuerySArgs,
  GraphQL.QueryS | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.queryS.update({
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

export default updateOneQueryS;

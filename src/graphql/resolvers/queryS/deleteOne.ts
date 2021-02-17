import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one query
 * @param where [GraphQL.GetOneQuerySParams]
 * @return [GraphQL.QueryS]
 */
const deleteOneQueryS: T.Resolver<
  GraphQL.MutationDeleteOneQuerySArgs,
  GraphQL.QueryS | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.queryS.delete({
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

export default deleteOneQueryS;

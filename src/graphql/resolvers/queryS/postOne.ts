import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one query
 * @param data [GraphQL.PostOneQuerySParams]
 * @return [GraphQL.QueryS]
 */
const postOneQueryS: T.Resolver<GraphQL.MutationPostOneQuerySArgs, GraphQL.QueryS | null> = async (_, params) => {
  const { data } = params;
  const result = await prisma.queryS.create({
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

export default postOneQueryS;

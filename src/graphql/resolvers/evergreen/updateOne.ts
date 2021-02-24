import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one Evergreen
 * @param where [GraphQL.GetOneEvergreenParams]
 * @param data [GraphQL.UpdateOneEvergreenParams]
 * @return [GraphQL.Evergreen]
 */
const updateOneEvergreen: T.Resolver<GraphQL.MutationUpdateOneEvergreenArgs, GraphQL.Evergreen | null> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  const result = await prisma.evergreen.update({
    where,
    data: {
      url: data.url || undefined,
      email: data.email || undefined,
      v: data.v || undefined,
      isPublished: typeof data.isPublished === 'boolean' ? data.isPublished : undefined,
      added: data.added || undefined,
      edited: data.edited || undefined,
      published: data.published || undefined,
      avgTimeStory: data.avgTimeStory || undefined,
      avgAllTimeStory: data.avgAllTimeStory || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    url: result.url,
    v: result.v,
    email: result.email,
    isPublished: result.isPublished,
    added: result.added,
    edited: result.edited,
    published: result.published,
    avgTimeStory: result.avgAllTimeStory,
    avgAllTimeStory: result.avgAllTimeStory,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneEvergreen;

import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many expandables
 * @return [GraphQL.Expandable[]]
 */
const getManyExpandable: T.Resolver<void, GraphQL.Expandable[]> = async () => {
  const result = await prisma.expandable.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      name: result.name,
      key: result.key,
      articles: result.articles.split(',') || [],
      address: result.address,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyExpandable;

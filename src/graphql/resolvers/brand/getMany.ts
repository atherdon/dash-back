import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many brands
 * @return [GraphQL.Brand[]]
 */
const getManyBrand: T.Resolver<void, GraphQL.Brand[]> = async () => {
  const result = await prisma.brand.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      url: result.url,
      email: result.email,
      avgTimeStory: result.avgAllTimeStory || 0,
      avgAllTimeStory: result.avgAllTimeStory || 0,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyBrand;

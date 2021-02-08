import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get many brands
 * @return [GraphQL.Brand[]]
 */
const getManyBrand: T.Resolver<void, GraphQL.Brand[]> = async () => {
  let result: Brand[];
  try {
    result = await prisma.brand.findMany();
  } catch (e) {
    const errMess = 'Error get brands';
    lib.Console.error(errMess, e, new Error());
    return [];
  }
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

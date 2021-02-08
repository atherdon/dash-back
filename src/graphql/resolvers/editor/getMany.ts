import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many editors
 * @return [GraphQL.Editor[]]
 */
const getManyEditor: T.Resolver<void, GraphQL.Editor[]> = async () => {
  const result = await prisma.editor.findMany();
  return result.map((result) => {
    return {
      id: result.id,
      name: result.name,
      edited: result.edited || 0,
      editedPercent: result.editedPercent || 0,
      published: result.published || 0,
      publishedPercent: result.publishedPercent || 0,
      rejected: result.rejectedPercent || 0,
      rejectedPercent: result.rejectedPercent || 0,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyEditor;

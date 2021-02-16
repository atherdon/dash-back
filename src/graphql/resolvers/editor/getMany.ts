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
      edited: result.edited,
      editedPercent: result.editedPercent,
      published: result.published,
      publishedPercent: result.publishedPercent,
      rejected: result.rejectedPercent,
      rejectedPercent: result.rejectedPercent,
      created: result.created?.toISOString() || '',
      updated: result.updated?.toISOString() || '',
    };
  });
};

export default getManyEditor;

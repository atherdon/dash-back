import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get one editor
 * @param where [GraphQL.GetOneEditorParams]
 * @return [GraphQL.Editor]
 */
const getOneEditor: T.Resolver<GraphQL.QueryGetOneEditorArgs, GraphQL.Editor | null> = async (
  _parent,
  params
) => {
  const { where } = params;
  const result = await prisma.editor.findFirst({
    where,
  });
  if (result === null) {
    return result;
  }
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
};

export default getOneEditor;

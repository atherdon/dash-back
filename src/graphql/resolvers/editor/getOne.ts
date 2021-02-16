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
    edited: result.edited,
    editedPercent: result.editedPercent,
    published: result.published,
    publishedPercent: result.publishedPercent,
    rejected: result.rejectedPercent,
    rejectedPercent: result.rejectedPercent,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default getOneEditor;

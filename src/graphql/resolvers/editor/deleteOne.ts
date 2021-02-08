import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Delete one editor
 * @param where [GraphQL.GetOneEditorParams]
 * @param data [GraphQL.UpdateOneBrandParams]
 * @return [GraphQL.Brand]
 */
const deleteOneEditor: T.Resolver<
  GraphQL.MutationDeleteOneEditorArgs,
  GraphQL.Editor | null
> = async (_parent, params) => {
  const { where } = params;
  const result = await prisma.editor.delete({
    where,
  });
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

export default deleteOneEditor;

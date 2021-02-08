import * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

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
  let result: Editor | null;
  try {
    result = await prisma.editor.delete({
      where,
    });
  } catch (e) {
    const errMess = 'Error delete editor';
    lib.Console.error(errMess, e, new Error());
    return null;
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

export default deleteOneEditor;

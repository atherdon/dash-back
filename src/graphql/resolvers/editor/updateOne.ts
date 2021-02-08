import * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Update one editor
 * @param where [GraphQL.GetOneEditorParams]
 * @param data [GraphQL.UpdateOneEditorParams]
 * @return [GraphQL.Editor]
 */
const updateOneBrand: T.Resolver<
  GraphQL.MutationUpdateOneEditorArgs,
  GraphQL.Editor | null
> = async (_parent, params) => {
  const { where, data } = params;
  let result: Editor | null;
  try {
    result = await prisma.editor.update({
      where,
      data: {
        name: data.name || undefined,
        edited: data.edited || undefined,
        editedPercent: data.editedPercent || undefined,
        published: data.published || undefined,
        publishedPercent: data.publishedPercent || undefined,
        rejected: data.rejected || undefined,
        rejectedPercent: data.rejectedPercent || undefined,
        updated: new Date(),
      },
    });
  } catch (e) {
    const errMess = 'Error update editor';
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

export default updateOneBrand;

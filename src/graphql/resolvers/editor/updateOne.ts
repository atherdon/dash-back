import * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import getOneBrand from './getOne';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Update one editor
 * @param where [GraphQL.GetOneEditorParams]
 * @param data [GraphQL.UpdateOneEditorParams]
 * @return "editor" [GraphQL.Editor]
 */
const updateOneBrand: T.Resolver<GraphQL.MutationUpdateOneEditorArgs, GraphQL.Response> = async (
  _parent,
  params
) => {
  const { where, data } = params;
  // Check if exists
  const oldRes = await getOneBrand(_parent, { where }, '', { onlyCheck: true });
  if (oldRes.status !== lib.SUCCESS) {
    return oldRes;
  }
  // Update
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
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Editor updated',
    httpCode: 201,
    editor: {
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
    },
  };
};

export default updateOneBrand;

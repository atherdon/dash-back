import * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get one editor
 * @param where [GraphQL.GetOneEditorParams]
 * @return "editor" [GraphQL.Editor]
 */
const getOneEditor: T.Resolver<GraphQL.QueryGetOneEditorArgs, GraphQL.Response> = async (
  _parent,
  params,
  info: T.Info
) => {
  const { where } = params;
  let result: Editor | null;
  try {
    result = await prisma.editor.findFirst({
      where,
    });
  } catch (e) {
    const errMess = 'Error get editor';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  if (result === null) {
    return {
      status: lib.WARNING,
      message: 'Editor not found',
      httpCode: 404,
    };
  }
  return {
    status: lib.SUCCESS,
    message: 'Editor received',
    httpCode: 200,
    editor: info.onlyCheck
      ? undefined
      : {
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

export default getOneEditor;

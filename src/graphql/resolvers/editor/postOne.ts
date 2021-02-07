/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

// Get prisma client outside a hadnler
const prisma = new PrismaClient();

// Define handler with any specific name

/**
 * Post one editor
 * @param editor [GraphQL.Editor]
 * @return "editor" [GraphQL.Editor]
 */
const postOneEditor: T.Resolver<GraphQL.MutationPostOneEditorArgs, GraphQL.Response> = async (
  _,
  params
) => {
  // Get params
  const { data } = params;
  // Catch database error
  let result: Editor;
  try {
    result = await prisma.editor.create({
      data: {
        name: data.name,
      },
    });
  } catch (e) {
    const errMess = 'Error create editor';
    lib.Console.error(errMess, e, new Error());
    // Return error result
    return {
      status: lib.ERROR,
      message: errMess,
      stdErrorMessage: lib.isDev() ? e.message : '',
      httpCode: 500,
    };
  }
  // Return success result
  return {
    status: lib.SUCCESS,
    message: 'Editor created',
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

// Export by default
export default postOneEditor;

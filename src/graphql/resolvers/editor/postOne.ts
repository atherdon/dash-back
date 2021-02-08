/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Post one editor
 * @param editor [GraphQL.Editor]
 * @return [GraphQL.Editor]
 */
const postOneEditor: T.Resolver<GraphQL.MutationPostOneEditorArgs, GraphQL.Editor | null> = async (
  _,
  params
) => {
  const { data } = params;
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

// Export by default
export default postOneEditor;

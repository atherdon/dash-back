/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Post one editor
 * @param data [GraphQL.PostOneEditorParams]
 * @return [GraphQL.Editor]
 */
const postOneEditor: T.Resolver<GraphQL.MutationPostOneEditorArgs, GraphQL.Editor | null> = async (
  _,
  params
) => {
  const { data } = params;
  const result = await prisma.editor.create({
    data: {
      name: data.name,
      edited: data.edited,
      editedPercent: data.editedPercent,
      published: data.published,
      publishedPercent: data.publishedPercent,
      rejected: data.rejected,
      rejectedPercent: data.rejectedPercent,
    },
  });
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

// Export by default
export default postOneEditor;

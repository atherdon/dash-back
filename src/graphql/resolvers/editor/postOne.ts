/**
 * Type of example resolver file
 */
import type * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

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
  const result = await prisma.editor.create({
    data: {
      name: data.name,
    },
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

// Export by default
export default postOneEditor;

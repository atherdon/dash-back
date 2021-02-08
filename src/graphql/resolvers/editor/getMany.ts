import * as T from '../../../types';
import { PrismaClient, Editor } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';
import * as lib from '../../../lib';

const prisma = new PrismaClient();

/**
 * Get many editors
 * @return [GraphQL.Editor[]]
 */
const getManyEditor: T.Resolver<void, GraphQL.Editor[]> = async () => {
  let result: Editor[];
  try {
    result = await prisma.editor.findMany();
  } catch (e) {
    const errMess = 'Error get editors';
    lib.Console.error(errMess, e, new Error());
    return [];
  }
  return result.map((result) => {
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
  });
};

export default getManyEditor;

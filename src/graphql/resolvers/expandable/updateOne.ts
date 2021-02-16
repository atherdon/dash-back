import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Update one expandable
 * @param where [GraphQL.GetOneExpandableParams]
 * @param data [GraphQL.UpdateOneExpandableParams]
 * @return [GraphQL.Expandable]
 */
const updateOneExpandable: T.Resolver<
  GraphQL.MutationUpdateOneExpandableArgs,
  GraphQL.Expandable | null
> = async (_parent, params) => {
  const { where, data } = params;
  const result = await prisma.expandable.update({
    where,
    data: {
      name: data.name || undefined,
      key: data.key || undefined,
      age: data.age || undefined,
      address: data.address || undefined,
      description: data.description || undefined,
      updated: new Date(),
    },
  });
  return {
    id: result.id,
    name: result.name,
    key: result.key,
    age: result.age,
    address: result.address,
    description: result.description,
    created: result.created?.toISOString() || '',
    updated: result.updated?.toISOString() || '',
  };
};

export default updateOneExpandable;

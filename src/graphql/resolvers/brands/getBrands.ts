import * as T from '../../../types';
import { PrismaClient, Brand } from '@prisma/client';

const prisma = new PrismaClient();

const getBrands: T.Resolver<void, Brand[]> = async (_parent, params) => {
  const brands = await prisma.brand.findMany();
  return brands;
};

export default getBrands;

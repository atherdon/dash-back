import { PrismaClient, Brand } from '@prisma/client';
// @ts-ignore // outside rootDir
import { brands } from '../../../data/brands.js';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/brands.js
 */
export default async function fillBrands(): Promise<void> {
  lib.Console.info('Script "fillBrands" is started ...');
  let skipped = 0;
  for (let i = 0; brands[i]; i++) {
    const brand = brands[i];
    const saveRes: Brand = {
      // @ts-ignore
      id: undefined,
      url: brand['Draft url'],
      v: brand.v,
      email: brand.email,
      added: typeof brand.Added === 'string' ? brand.Added : brand.Added.toString(),
      edited: typeof brand.Edited === 'string' ? brand.Edited : brand.Edited.toString(),
      published:
        typeof brand.Published__1 === 'string' ? brand.Published__1 : brand.Published__1.toString(),
      isPublished:
        typeof brand.Published__1 === 'string' ? brand.Published__1 : brand.Published__1.toString(),
      avgTimeStory:
        typeof brand['Avg time story'] === 'string'
          ? brand['Avg time story']
          : brand['Avg time story'].toString(),
      avgAllTimeStory:
        typeof brand['Avg time ALL story'] === 'string'
          ? brand['Avg time ALL story']
          : brand['Avg time ALL story'].toString(),
      created: new Date(),
      updated: new Date(),
    };
    const oldBrand = await prisma.brand.findFirst({
      where: {
        url: saveRes.url,
      },
    });
    if (oldBrand === null) {
      lib.Console.info(`Insert brand with url: ${saveRes.url}`);
      await prisma.brand.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" brand models.`);
  lib.Console.info('Script "fillBrands" is done!');
}

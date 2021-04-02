import { PrismaClient, Expandable } from '@prisma/client';
import { expandable2 } from '../../../data/expandable/expandable2.js';
import { expandable3 } from '../../../data/expandable/expandable3.js';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/expandable.js and data/expandable2.js
 */
export default async function fillExpandables(): Promise<void> {
  lib.Console.info('Script "fillExpandable" is started ...');
  const expandables = expandable2.concat(expandable3);
  let skipped = 0;
  for (let i = 0; expandables[i]; i++) {
    const expandable = expandables[i];
    const saveRes: Expandable = {
      // @ts-ignore
      id: undefined,
      key: expandable.key,
      name: expandable.name,
      parentCategory: expandable.parentCategory,
      articles: expandable.articles.join(','),
      created: new Date(),
      updated: new Date(),
    };
    const oldExpandable = await prisma.expandable.findFirst({
      where: {
        name: saveRes.name,
      },
    });
    if (oldExpandable === null) {
      lib.Console.info(`Insert expandable with name: ${saveRes.name}`);
      await prisma.expandable.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" expandable models.`);
  lib.Console.info('Script "fillExpandable" is done!');
}

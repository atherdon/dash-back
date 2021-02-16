import { PrismaClient, Filter } from '@prisma/client';
import * as filters from '../../../data/keywords/- Filters.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/~ Filters.json
 */
export default async function fillFilters(): Promise<void> {
  lib.Console.info('Script "fillFilters" is started ...');
  let skipped = 0;
  for (let i = 0; filters[i]; i++) {
    const filter = filters[i];
    const saveRes: Filter = {
      // @ts-ignore
      id: undefined,
      filter: filter.Filter,
      value: filter.Value,
      created: new Date(),
      updated: new Date(),
    };
    const oldFilter = await prisma.filter.findFirst({
      where: {
        filter: saveRes.filter,
      },
    });
    if (oldFilter === null) {
      lib.Console.info(`Insert filter with name: ${saveRes.filter}`);
      await prisma.filter.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" filter models.`);
  lib.Console.info('Script "fillFilters" is done!');
}

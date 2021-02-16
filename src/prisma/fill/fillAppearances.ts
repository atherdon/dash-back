import { PrismaClient, Appearance } from '@prisma/client';
import * as appearances from '../../../data/keywords/Appearance.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Appearance.json
 */
export default async function fillAppearances(): Promise<void> {
  lib.Console.info('Script "fillAppearances" is started ...');
  let skipped = 0;
  for (let i = 0; appearances[i]; i++) {
    const appearance = appearances[i];
    const saveRes: Appearance = {
      // @ts-ignore
      id: undefined,
      search: appearance['Search Appearance'],
      clicks: appearance.Clicks,
      impressions: appearance.Impressions,
      ctr: appearance.CTR,
      position: appearance.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldAppearance = await prisma.appearance.findFirst({
      where: {
        search: saveRes.search,
      },
    });
    if (oldAppearance === null) {
      lib.Console.info(`Insert appearance with search: ${saveRes.search}`);
      await prisma.appearance.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" appearance models.`);
  lib.Console.info('Script "fillAppearances" is done!');
}

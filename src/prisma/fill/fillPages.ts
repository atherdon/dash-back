import { PrismaClient, Page } from '@prisma/client';
import * as pages from '../../../data/keywords/Pages.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Pages.json
 */
export default async function fillPages(): Promise<void> {
  lib.Console.info('Script "fillPages" is started ...');
  let skipped = 0;
  for (let i = 0; pages[i]; i++) {
    const page = pages[i];
    const saveRes: Page = {
      // @ts-ignore
      id: undefined,
      url: page.Page,
      clicks: page.Clicks,
      impressions: page.Impressions,
      ctr: page.CTR,
      position: page.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldPage = await prisma.page.findFirst({
      where: {
        url: saveRes.url,
      },
    });
    if (oldPage === null) {
      lib.Console.info(`Insert page with url: ${saveRes.url}`);
      await prisma.page.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" page models.`);
  lib.Console.info('Script "fillPages" is done!');
}

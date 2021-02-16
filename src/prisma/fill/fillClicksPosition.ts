import { PrismaClient, ClicksPosition } from '@prisma/client';
import * as clicksPositions from '../../../data/keywords/Clicks-Position.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Clicks-Position.json
 */
export default async function fillClicksPosition(): Promise<void> {
  lib.Console.info('Script "fillClicksPosition" is started ...');
  let skipped = 0;
  for (let i = 0; clicksPositions[i]; i++) {
    const clicksPosition = clicksPositions[i];
    const saveRes: ClicksPosition = {
      // @ts-ignore
      id: undefined,
      date: clicksPosition.Date,
      clicks: clicksPosition.Clicks,
      impressions: clicksPosition.Impressions,
      ctr: clicksPosition.CTR,
      position: clicksPosition.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldFilter = await prisma.clicksPosition.findFirst({
      where: {
        date: saveRes.date,
      },
    });
    if (oldFilter === null) {
      lib.Console.info(`Insert clicks position with date: ${saveRes.date}`);
      await prisma.clicksPosition.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" clicks position models.`);
  lib.Console.info('Script "fillClicksPosition" is done!');
}

import { PrismaClient, QueryS } from '@prisma/client';
import * as queries from '../../../data/keywords/Queries.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Pages.json
 */
export default async function fillQueries(): Promise<void> {
  lib.Console.info('Script "fillQueries" is started ...');
  let skipped = 0;
  for (let i = 0; queries[i]; i++) {
    const query = queries[i];
    const saveRes: QueryS = {
      // @ts-ignore
      id: undefined,
      name: query.Query,
      clicks: query.Clicks,
      impressions: query.Impressions,
      ctr: query.CTR,
      position: query.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldQuery = await prisma.queryS.findFirst({
      where: {
        name: saveRes.name,
      },
    });
    if (oldQuery === null) {
      lib.Console.info(`Insert query with name: ${saveRes.name}`);
      await prisma.queryS.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" query models.`);
  lib.Console.info('Script "fillQueries" is done!');
}

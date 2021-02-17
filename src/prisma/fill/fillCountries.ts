import { PrismaClient, Country } from '@prisma/client';
import * as countries from '../../../data/keywords/Countries.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Countries.json
 */
export default async function fillCountries(): Promise<void> {
  lib.Console.info('Script "fillCountries" is started ...');
  let skipped = 0;
  for (let i = 0; countries[i]; i++) {
    const country = countries[i];
    const saveRes: Country = {
      // @ts-ignore
      id: undefined,
      name: country.Country,
      clicks: country.Clicks,
      impressions: country.Impressions,
      ctr: country.CTR,
      position: country.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldCountry = await prisma.country.findFirst({
      where: {
        name: saveRes.name,
      },
    });
    if (oldCountry === null) {
      lib.Console.info(`Insert country with name: ${saveRes.name}`);
      await prisma.country.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" country models.`);
  lib.Console.info('Script "fillCountries" is done!');
}

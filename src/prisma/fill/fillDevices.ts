import { PrismaClient, Device } from '@prisma/client';
import * as devices from '../../../data/keywords/Devices.json';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/keywords/Devices.json
 */
export default async function fillDevices(): Promise<void> {
  lib.Console.info('Script "fillDevices" is started ...');
  let skipped = 0;
  for (let i = 0; devices[i]; i++) {
    const device = devices[i];
    const saveRes: Device = {
      // @ts-ignore
      id: undefined,
      name: device.Device,
      clicks: device.Clicks,
      impressions: device.Impressions,
      ctr: device.CTR,
      position: device.Position,
      created: new Date(),
      updated: new Date(),
    };
    const oldDevice = await prisma.device.findFirst({
      where: {
        name: saveRes.name,
      },
    });
    if (oldDevice === null) {
      lib.Console.info(`Insert device with name: ${saveRes.name}`);
      await prisma.country.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" device models.`);
  lib.Console.info('Script "fillDevices" is done!');
}

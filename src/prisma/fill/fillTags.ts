import fs from 'fs';
import path from 'path';
import { PrismaClient, Tag } from '@prisma/client';
import * as lib from '../../lib';

const prisma = new PrismaClient();

/**
 * Fill data to database from data/tags
 */
export default async function fillTags(): Promise<void> {
  lib.Console.info('Script "fillTags" is started ...');
  await operation('bccin.csv');
  await operation('pming.csv');
  await operation('sups.csv');
  prisma.$disconnect();
  lib.Console.info('Script "fillTags" is done!');
}

async function operation(fileName: string) {
  lib.Console.warn(`Start operation for file ${fileName}`);
  const tagData: string = fs
    .readFileSync(path.resolve(__dirname, `../../../../data/tags/${fileName}`))
    .toString();
  const tagLines = tagData.split('\n');
  let skipped = 0;
  for (let i = 0; tagLines[i]; i++) {
    const tagLine = tagLines[i];
    const tags = tagLine.split(',');
    if (tags[1] !== 'words') {
      const saveRes: Tag = {
        // @ts-ignore
        id: undefined,
        word: tags[1],
        count: parseInt(tags[2], 10) || 0,
        char: tags[3],
        updated: new Date(),
        created: new Date(),
      };
      const oldTag = await prisma.tag.findFirst({
        where: {
          word: saveRes.word,
        },
      });
      if (oldTag === null) {
        lib.Console.info(`Insert tag with word: ${saveRes.word}`);
        await prisma.tag.create({
          data: saveRes,
        });
      } else {
        skipped++;
      }
    }
  }
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" tag models.`);
  lib.Console.warn(`Operation for file ${fileName} is done!`);
}

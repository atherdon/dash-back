import { PrismaClient, TopAuthor } from '@prisma/client';
// @ts-ignore // outside rootDir
import { topAuthors } from '../../../data/top-authors.js';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/top-authors.js
 */
export default async function fillTopAuthors(): Promise<void> {
  lib.Console.info('Script "fillTopAuthors" is started ...');
  let skipped = 0;
  for (let i = 0; topAuthors[i]; i++) {
    const topAuthor = topAuthors[i];
    const saveRes: TopAuthor = {
      // @ts-ignore
      id: undefined,
      url: topAuthor['Draft url'],
      v: topAuthor.v,
      email: topAuthor.email,
      added: typeof topAuthor.Added === 'string' ? topAuthor.Added : topAuthor.Added.toString(),
      edited:
        typeof topAuthor.Editted === 'string' ? topAuthor.Editted : topAuthor.Editted.toString(),
      published:
        typeof topAuthor.Published__1 === 'string'
          ? topAuthor.Published__1
          : topAuthor.Published__1.toString(),
      isPublished:
        typeof topAuthor.Published__1 === 'string'
          ? topAuthor.Published__1
          : topAuthor.Published__1.toString(),
      avgTimeStory:
        typeof topAuthor['Avg time story'] === 'string'
          ? topAuthor['Avg time story']
          : topAuthor['Avg time story'].toString(),
      avgAllTimeStory:
        typeof topAuthor['Avg time ALL story'] === 'string'
          ? topAuthor['Avg time ALL story']
          : topAuthor['Avg time ALL story'].toString(),
      created: new Date(),
      updated: new Date(),
    };
    const oldTopAuthor = await prisma.topAuthor.findFirst({
      where: {
        url: saveRes.url,
      },
    });
    if (oldTopAuthor === null) {
      lib.Console.info(`Insert topAuthor with url: ${saveRes.url}`);
      await prisma.topAuthor.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" topAuthors models.`);
  lib.Console.info('Script "fillTopAuthors" is done!');
}

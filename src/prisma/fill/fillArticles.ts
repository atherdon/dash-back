import { PrismaClient, Article } from '@prisma/client';
// @ts-ignore // outside rootDir
import { brands } from '../../../data/brands.js';
import { topAuthors } from '../../../data/top-authors.js';
import * as lib from '../../lib';
const prisma = new PrismaClient();
async function operations(brands: any, type: string) {
  lib.Console.info('Script "fillArticles" is started ...');
  let skipped = 0;
  for (let i = 0; brands[i]; i++) {
    const article = brands[i];
    const saveRes: Article = {
      // @ts-ignore
      id: undefined,
      url: article['Draft url'],
      ready: article.v === 'v',
      type,
      added: new Date(article.Added),
      edited: new Date(article.Edited) || null,
      published: new Date(article.Published__1) || null,
      isPublished: article.Published === 'TRUE',
      avgTimeStory:
        typeof article['Avg time story'] === 'number'
          ? article['Avg time story']
          : isNaN(parseInt(article['Avg time story'], 10))
          ? null
          : parseInt(article['Avg time story'], 10),
      avgAllTimeStory:
        typeof article['Avg time ALL story'] === 'number'
          ? article['Avg time ALL story']
          : isNaN(parseInt(article['Avg time ALL story'], 10))
          ? null
          : parseInt(article['Avg time ALL story'], 10),
      created: new Date(),
      updated: new Date(),
    };
    const oldBrand = await prisma.article.findFirst({
      where: {
        url: saveRes.url,
      },
    });
    if (oldBrand === null) {
      lib.Console.info(`Insert "${type}" with url: ${saveRes.url}`);
      await prisma.article.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" "${type}" models.`);
  lib.Console.info('Script "fillArticles" is done!');
}
/**
 * Fill data to database from data/brands.js
 */
export default async function fillArticles(): Promise<void> {
  await operations(brands, 'evergreen');
  await operations(topAuthors, 'top-author');
}

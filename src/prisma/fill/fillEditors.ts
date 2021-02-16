import { PrismaClient, Editor } from '@prisma/client';
import { editors } from '../../../data/editors.js';
import * as lib from '../../lib';
const prisma = new PrismaClient();

/**
 * Fill data to database from data/editors.js
 */
export default async function fillBrands(): Promise<void> {
  lib.Console.info('Script "fillBrands" is started ...');
  let skipped = 0;
  for (let i = 0; editors[i]; i++) {
    const editor = editors[i];
    const saveRes: Editor = {
      // @ts-ignore
      id: undefined,
      name: editor.name,
      edited: editor.edited,
      editedPercent: editor.editedPercent,
      published: editor.published,
      publishedPercent: editor.publishedPercent,
      rejected: editor.rejected,
      rejectedPercent: editor.rejectedPercent,
      created: new Date(),
      updated: new Date(),
    };
    const oldEditor = await prisma.editor.findFirst({
      where: {
        name: saveRes.name,
      },
    });
    if (oldEditor === null) {
      lib.Console.info(`Insert editor with name: ${saveRes.name}`);
      await prisma.editor.create({
        data: saveRes,
      });
    } else {
      skipped++;
    }
  }
  prisma.$disconnect();
  if (skipped !== 0) lib.Console.warn(`Skipped "${skipped}" editor models.`);
  lib.Console.info('Script "fillEditors" is done!');
}

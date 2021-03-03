/*
  Warnings:

  - You are about to drop the column `v` on the `Article` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "ready" BOOLEAN DEFAULT false,
    "type" TEXT NOT NULL,
    "isPublished" BOOLEAN DEFAULT false,
    "added" DATETIME NOT NULL,
    "edited" DATETIME,
    "published" DATETIME,
    "avgTimeStory" INTEGER,
    "avgAllTimeStory" INTEGER,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Article" ("id", "url", "type", "isPublished", "added", "edited", "published", "avgTimeStory", "avgAllTimeStory", "created", "updated") SELECT "id", "url", "type", "isPublished", "added", "edited", "published", "avgTimeStory", "avgAllTimeStory", "created", "updated" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

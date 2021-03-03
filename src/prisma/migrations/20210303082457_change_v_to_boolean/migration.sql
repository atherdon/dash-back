/*
  Warnings:

  - You are about to alter the column `v` on the `Article` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "v" BOOLEAN NOT NULL,
    "type" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL,
    "added" DATETIME NOT NULL,
    "edited" DATETIME,
    "published" DATETIME,
    "avgTimeStory" INTEGER,
    "avgAllTimeStory" INTEGER,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Article" ("id", "url", "v", "type", "isPublished", "added", "edited", "published", "avgTimeStory", "avgAllTimeStory", "created", "updated") SELECT "id", "url", "v", "type", "isPublished", "added", "edited", "published", "avgTimeStory", "avgAllTimeStory", "created", "updated" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

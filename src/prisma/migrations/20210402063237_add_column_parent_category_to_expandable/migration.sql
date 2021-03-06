/*
  Warnings:

  - You are about to drop the column `address` on the `Expandable` table. All the data in the column will be lost.
  - Added the required column `parentCategory` to the `Expandable` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expandable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "parentCategory" TEXT NOT NULL,
    "articles" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Expandable" ("id", "key", "name", "articles", "created", "updated") SELECT "id", "key", "name", "articles", "created", "updated" FROM "Expandable";
DROP TABLE "Expandable";
ALTER TABLE "new_Expandable" RENAME TO "Expandable";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

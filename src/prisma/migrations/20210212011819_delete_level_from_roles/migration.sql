/*
  Warnings:

  - You are about to drop the column `level` on the `Roles` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Roles" ("id", "name", "created") SELECT "id", "name", "created" FROM "Roles";
DROP TABLE "Roles";
ALTER TABLE "new_Roles" RENAME TO "Roles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

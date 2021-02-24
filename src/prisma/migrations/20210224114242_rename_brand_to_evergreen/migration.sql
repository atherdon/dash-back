/*
  Warnings:

  - You are about to alter the column `position` on the `Appearance` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `position` on the `ClicksPosition` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `position` on the `Country` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `position` on the `Device` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `position` on the `Page` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `position` on the `QueryS` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "Evergreen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "v" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isPublished" TEXT NOT NULL,
    "added" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "published" TEXT NOT NULL,
    "avgTimeStory" TEXT NOT NULL,
    "avgAllTimeStory" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appearance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "search" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Appearance" ("id", "search", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "search", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "Appearance";
DROP TABLE "Appearance";
ALTER TABLE "new_Appearance" RENAME TO "Appearance";
CREATE TABLE "new_ClicksPosition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_ClicksPosition" ("id", "date", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "date", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "ClicksPosition";
DROP TABLE "ClicksPosition";
ALTER TABLE "new_ClicksPosition" RENAME TO "ClicksPosition";
CREATE TABLE "new_Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Country" ("id", "name", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "name", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "Country";
DROP TABLE "Country";
ALTER TABLE "new_Country" RENAME TO "Country";
CREATE TABLE "new_Device" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Device" ("id", "name", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "name", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "Device";
DROP TABLE "Device";
ALTER TABLE "new_Device" RENAME TO "Device";
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Page" ("id", "url", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "url", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE TABLE "new_QueryS" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" REAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_QueryS" ("id", "name", "clicks", "impressions", "ctr", "position", "created", "updated") SELECT "id", "name", "clicks", "impressions", "ctr", "position", "created", "updated" FROM "QueryS";
DROP TABLE "QueryS";
ALTER TABLE "new_QueryS" RENAME TO "QueryS";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Brand";
PRAGMA foreign_keys=on;

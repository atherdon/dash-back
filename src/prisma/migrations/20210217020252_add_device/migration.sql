/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `Country`. If there are existing duplicate values, the migration will fail.

*/
-- CreateTable
CREATE TABLE "Device" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" DECIMAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Country.name_unique" ON "Country"("name");

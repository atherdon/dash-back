-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" INTEGER NOT NULL,
    "lastLogin" DATETIME,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("role") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Article" (
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

-- CreateTable
CREATE TABLE "Brand" (
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

-- CreateTable
CREATE TABLE "TopAuthor" (
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

-- CreateTable
CREATE TABLE "Editor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "edited" TEXT NOT NULL,
    "editedPercent" TEXT NOT NULL,
    "published" TEXT NOT NULL,
    "publishedPercent" TEXT NOT NULL,
    "rejected" TEXT NOT NULL,
    "rejectedPercent" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Expandable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Filter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filter" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Appearance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "search" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" DECIMAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ClicksPosition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" TEXT NOT NULL,
    "position" DECIMAL NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME DEFAULT CURRENT_TIMESTAMP
);

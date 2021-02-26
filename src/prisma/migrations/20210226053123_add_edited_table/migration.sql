-- CreateTable
CREATE TABLE "Edited" (
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

/*
  Warnings:

  - A unique constraint covering the columns `[settingsId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PRESET" AS ENUM ('HD', 'SD');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "settingsId" TEXT;

-- AlterTable
ALTER TABLE "Workspace" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "screen" TEXT,
    "mic" TEXT,
    "camera" TEXT,
    "preset" "PRESET" NOT NULL DEFAULT 'SD',

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_settingsId_key" ON "User"("settingsId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_settingsId_fkey" FOREIGN KEY ("settingsId") REFERENCES "Settings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

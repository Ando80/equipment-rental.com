/*
  Warnings:

  - You are about to drop the column `userId` on the `Engin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Engin" DROP CONSTRAINT "Engin_userId_fkey";

-- AlterTable
ALTER TABLE "Engin" DROP COLUMN "userId";

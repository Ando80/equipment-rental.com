/*
  Warnings:

  - You are about to drop the column `typeId` on the `Engin` table. All the data in the column will be lost.
  - You are about to drop the column `engin` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `enabled` on the `Type` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Engin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enginId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Engin" DROP CONSTRAINT "Engin_typeId_fkey";

-- AlterTable
ALTER TABLE "Engin" DROP COLUMN "typeId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "engin",
DROP COLUMN "type",
ADD COLUMN     "enginId" TEXT NOT NULL,
ADD COLUMN     "typeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "enabled";

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

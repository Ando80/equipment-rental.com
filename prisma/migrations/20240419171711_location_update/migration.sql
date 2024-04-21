/*
  Warnings:

  - You are about to drop the column `typeID` on the `Location` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_typeID_fkey";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "typeID",
ADD COLUMN     "typeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

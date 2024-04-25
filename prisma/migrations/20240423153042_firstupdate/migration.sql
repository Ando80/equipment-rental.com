/*
  Warnings:

  - Added the required column `typeId` to the `Engin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Engin" ADD COLUMN     "typeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

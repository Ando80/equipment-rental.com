/*
  Warnings:

  - You are about to drop the column `slug` on the `Engin` table. All the data in the column will be lost.
  - You are about to drop the column `enginId` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Location` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Engin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Engin_slug_key";

-- AlterTable
ALTER TABLE "Engin" DROP COLUMN "slug",
ADD COLUMN     "typeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "enginId",
DROP COLUMN "typeId",
ADD COLUMN     "engin" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

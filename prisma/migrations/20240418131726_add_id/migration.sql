/*
  Warnings:

  - The primary key for the `Engin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `Engin` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Type` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_enginId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_typeID_fkey";

-- AlterTable
ALTER TABLE "Engin" DROP CONSTRAINT "Engin_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Engin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Type" DROP CONSTRAINT "Type_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Type_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_enginId_fkey" FOREIGN KEY ("enginId") REFERENCES "Engin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

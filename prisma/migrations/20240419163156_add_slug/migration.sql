/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Engin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Engin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Engin" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Engin_slug_key" ON "Engin"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Type_slug_key" ON "Type"("slug");

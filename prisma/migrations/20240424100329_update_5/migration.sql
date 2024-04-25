/*
  Warnings:

  - Added the required column `userId` to the `Engin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Engin" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Engin" ADD CONSTRAINT "Engin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

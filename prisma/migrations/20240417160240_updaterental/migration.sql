-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_enginId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_typeID_fkey";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_typeID_fkey" FOREIGN KEY ("typeID") REFERENCES "Type"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_enginId_fkey" FOREIGN KEY ("enginId") REFERENCES "Engin"("registration") ON DELETE CASCADE ON UPDATE CASCADE;

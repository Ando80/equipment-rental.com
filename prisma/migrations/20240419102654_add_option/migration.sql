-- AlterTable
ALTER TABLE "Engin" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "frais" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Facture" ALTER COLUMN "logo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "lastname" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "businessName" DROP NOT NULL,
ALTER COLUMN "businessAdress" DROP NOT NULL,
ALTER COLUMN "nbrEngin" DROP NOT NULL,
ALTER COLUMN "dateDebut" DROP NOT NULL,
ALTER COLUMN "dateFin" DROP NOT NULL,
ALTER COLUMN "payement" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Type" ALTER COLUMN "image" DROP NOT NULL;

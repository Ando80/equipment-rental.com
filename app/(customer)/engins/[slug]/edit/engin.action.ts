"use server";

import { ActionError, userAction } from "@/safe-actions";
import { EnginSchema } from "./engin.schema";
import { prisma } from "@/prisma";
import { z } from "zod";

// Fonction pour vérifier si le type spécifié existe
const verifyTypeExists = async (slug: string) => {
  console.log("Type Slug:", slug); // Ajouter un log pour vérifier le slug
  const typeExists = await prisma.type.findUnique({
    where: { slug: slug },
  });
  if (!typeExists) {
    throw new ActionError("Specified type does not exist");
  }
};

// Action de création d'un engin
export const createEnginAction = userAction(
  z.object({
    typeId: z.string(),
    registration: z.string(),
  }),

  async (input, context) => {
    console.log("Create Engin - Input:", input); // Ajouter un log pour vérifier l'entrée
    await verifyTypeExists(input.typeId);
    const engin = await prisma.engin.create({
      data: {
        userId: context.user.id,
        typeId: input.typeId,
        registration: input.registration,
      },
    });

    return engin;
  }
);

// Action de mise à jour d'un engin
export const updateEnginAction = userAction(
  z.object({
    id: z.string(),
    typeId: z.string(),
    data: EnginSchema,
  }),
  async (input, context) => {
    console.log("Update Engin - Input:", input); // Ajouter un log pour vérifier l'entrée
    await verifyTypeExists(input.typeId);

    const updatedEngin = await prisma.engin.update({
      where: {
        id: input.id,
      },
      data: input.data,
    });
    return updatedEngin;
  }
);

// Action de suppression d'un engin
export const deleteEnginAction = userAction(
  z.string(),
  async (enginId, context) => {
    console.log("Delete Engin - Engin ID:", enginId); // Ajouter un log pour vérifier l'ID de l'engin
    // Vérifier si l'engin spécifié existe
    const enginExists = await prisma.engin.findUnique({
      where: { id: enginId },
    });
    if (!enginExists) {
      throw new ActionError("Specified engin does not exist");
    }

    // Supprimer l'engin
    await prisma.engin.delete({
      where: { id: enginId },
    });
  }
);

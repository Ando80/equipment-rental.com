"use server";

import { ActionError, userAction } from "@/safe-actions";
import { EnginSchema } from "./engin.schema";
import { prisma } from "@/prisma";
import { z } from "zod";

const verifySlugUniqueness = async (slug: string, enginId?: string) => {
  const slugExists = await prisma.engin.count({
    where: {
      slug: slug,
      id: enginId
        ? {
            not: enginId,
          }
        : undefined,
    },
  });

  if (slugExists) {
    throw new ActionError("Slug already exists");
  }
};

export const createEnginAction = userAction(
  EnginSchema,
  async (input, context) => {
    await verifySlugUniqueness(input.slug);

    const engin = await prisma.engin.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return engin;
  }
);

export const updateEnginAction = userAction(
  z.object({
    id: z.string(),
    data: EnginSchema,
  }),
  async (input, context) => {
    await verifySlugUniqueness(input.data.slug, input.id);

    const updatedEngin = await prisma.engin.update({
      where: {
        id: input.id,
        userId: context.user.id,
      },
      data: input.data,
    });
    return updatedEngin;
  }
);

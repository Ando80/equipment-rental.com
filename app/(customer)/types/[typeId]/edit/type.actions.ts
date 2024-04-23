"use server";

import { ActionError, userAction } from "@/safe-actions";
import { TypeSchema } from "./type.schema";
import { prisma } from "@/prisma";
import { z } from "zod";

const verifySlugUniqueness = async (slug: string, typeId?: string) => {
  const slugExists = await prisma.type.count({
    where: {
      slug: slug,
      id: typeId
        ? {
            not: typeId,
          }
        : undefined,
    },
  });

  if (slugExists) {
    throw new ActionError("Slug already exists");
  }
};

export const createTypeAction = userAction(
  TypeSchema,
  async (input, context) => {
    await verifySlugUniqueness(input.slug);

    const type = await prisma.type.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return type;
  }
);

export const updateTypeAction = userAction(
  z.object({
    id: z.string(),
    data: TypeSchema,
  }),
  async (input, context) => {
    await verifySlugUniqueness(input.data.slug, input.id);

    const updatedType = await prisma.type.update({
      where: {
        id: input.id,
        userId: context.user.id,
      },
      data: input.data,
    });
    return updatedType;
  }
);

export const deleteTypeAction = userAction(
  z.string(),
  async (typeId, context) => {
    await prisma.type.delete({
      where: {
        id: typeId,
        userId: context.user.id,
      },
    });
  }
);

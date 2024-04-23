"use server";

import { ActionError, userAction } from "@/safe-actions";
import { EnginSchema } from "./engin.schema";
import { prisma } from "@/prisma";
import { z } from "zod";

export const createEnginAction = userAction(
  EnginSchema,
  async (input, context) => {
    const type = await prisma.engin.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return type;
  }
);

export const updateEnginAction = userAction(
  z.object({
    id: z.string(),
    data: EnginSchema,
  }),
  async (input, context) => {
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

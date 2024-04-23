"use server";

import { userAction } from "@/safe-actions";
import { LocationSchema } from "./location.schema";
import { prisma } from "@/prisma";

export const createLocationAction = userAction(
  LocationSchema,
  async (input, context) => {
    const location = await prisma.location.create({
      data: {
        ...input,
        userId: context.user.id,
      },
    });

    return location;
  }
);

export const editLocation = async () => {};

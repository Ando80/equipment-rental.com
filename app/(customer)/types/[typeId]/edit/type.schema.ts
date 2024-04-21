import { z } from "zod";

export const TypeSchema = z.object({
  name: z.string(),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9_-]*$/)
    .min(5)
    .max(20),
  image: z.string().optional().nullable(),
});
export type TypesType = z.infer<typeof TypeSchema>;

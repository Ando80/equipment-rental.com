import { z } from "zod";

export const EnginSchema = z.object({
  registration: z.string(),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9_-]*$/)
    .min(5)
    .max(20),
  image: z.string().optional().nullable(),
  frais: z.number().optional().nullable(),
  state: z.string().optional().nullable(),
});
export type EnginType = z.infer<typeof EnginSchema>;

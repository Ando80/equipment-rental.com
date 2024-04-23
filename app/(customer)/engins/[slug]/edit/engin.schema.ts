import { z } from "zod";

export const EnginSchema = z.object({
  registration: z.string(),
  image: z.string().optional().nullable(),
  frais: z.number().optional().nullable(),
  state: z.string().optional().nullable(),
});
export type EnginType = z.infer<typeof EnginSchema>;

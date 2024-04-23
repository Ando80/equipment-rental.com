import { z } from "zod";

export const LocationSchema = z.object({
  firstname: z.string(),
  lastname: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  businessName: z.string().optional().nullable(),
  businessAdress: z.string().optional().nullable(),
  nbrEngin: z.number().optional().nullable(),
  dateDebut: z.date().optional().nullable(),
  dateFin: z.date().optional().nullable(),
  typeId: z.date().optional().nullable(),
  enginId: z.date().optional().nullable(),
  payement: z.string().optional().nullable(),
});

export type LocationType = z.infer<typeof LocationSchema>;

export const PAYEMENTS_CLASSES = [
  "Par carte bancaire",
  "Par cheque",
  "Par especes",
];

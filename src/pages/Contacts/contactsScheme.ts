import { z } from "zod";

export const contactsScheme = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  subject: z.string().min(2).max(50).optional(),
  message: z.string().min(2).max(1000),
});

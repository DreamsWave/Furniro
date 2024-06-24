import { z } from "zod";

export const checkoutScheme = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  companyName: z.string().min(2).max(50).optional(),
  country: z.string().min(2).max(50),
  street: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
  province: z.string().min(2).max(50),
  zipcode: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  email: z.string().email(),
  additional: z.string().optional(),
  // paymentType: z.enum(["directBankTransfer", "cashOnDelivery"]),
});

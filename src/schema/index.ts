import { z } from "zod";

export const PersonalDetailsSchema = z.object({
  fullName: z
    .string({ required_error: "Full Name is required" })
    .min(1, "Full Name is required"),
  address: z
    .string({ required_error: "Address is required" })
    .min(1, "Address is required"),
  city: z
    .string({ required_error: "City is required" })
    .min(1, "City is required"),
  postCode: z
    .string({ required_error: "Post Code is required" })
    .min(1, "Post Code is required"),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(1, "Phone Number is required"),
});

export type PersonalDetails = z.infer<typeof PersonalDetailsSchema>;

export const PaymentDetailsSchema = z.object({
  cardNumber: z
    .string({ required_error: "Card Number is required" })
    .min(1, "Card Number is required"),
  expiryDate: z
    .string({
      required_error: "Expiry Date is required",
      invalid_type_error: "Expiry Date is invalid",
    })
    .min(1, "Expiry Date is required"),
  cvv: z.coerce
    .number({ required_error: "CVV is required" })
    .min(100, "CVV is required")
    .max(999, "CVV is required"),
});

export type PaymentDetails = z.infer<typeof PaymentDetailsSchema>;

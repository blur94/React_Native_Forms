import { z } from "zod";
import dayjs from "dayjs";

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
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Expiry Date is invalid")
    .min(1, "Expiry Date is required")
    .refine(
      (date) => {
        const [month, year] = date.split("/").map(Number);
        const expiryDate = dayjs(
          new Date(year < 100 ? 2000 + year : year, month - 1)
        );
        return expiryDate.endOf("month").isAfter(dayjs());
      },
      { message: "Expiry Date cannot be in the past" }
    ),
  cvv: z.coerce
    .number({ required_error: "CVV is required" })
    .min(100, "CVV is required")
    .max(999, "CVV is too long"),
});

export type PaymentDetails = z.infer<typeof PaymentDetailsSchema>;

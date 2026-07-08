import { z } from "zod";

const noControlChars = /^[^\r\n\t]*$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long.")
    .regex(noControlChars, "Name contains invalid characters."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-.\s]{7,20}$/, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254, "Email is too long."),
  address: z
    .string()
    .trim()
    .min(5, "Please enter your project address.")
    .max(200, "Address is too long.")
    .regex(noControlChars, "Address contains invalid characters."),
  service: z.string().min(1, "Please select a service."),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a bit more about your project.")
    .max(1000, "Message is too long."),
});

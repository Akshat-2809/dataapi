import { z } from "zod";

export const USE_CASES = ["AI agents", "RAG & search", "Data pipelines", "Just exploring"] as const;
export const VOLUMES = ["Under 200", "200 – 2,500", "2,500 – 10,000", "10,000+"] as const;

export type WaitlistField = "name" | "email" | "company" | "useCase" | "volume";

export const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120, "That name is too long."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Please enter your email.")
    .max(254, "That email is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  company: z.string().trim().max(120, "That name is too long."),
  useCase: z.enum(USE_CASES, "Please choose one."),
  volume: z.enum(VOLUMES, "Please choose one."),
});

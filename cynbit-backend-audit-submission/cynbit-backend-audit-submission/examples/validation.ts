import { z } from "zod";

/** Illustrative example only; not Cynbit production code. */
export const inquirySchema = z.object({
  fullName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000)
}).strict();

export type InquiryInput = z.infer<typeof inquirySchema>;

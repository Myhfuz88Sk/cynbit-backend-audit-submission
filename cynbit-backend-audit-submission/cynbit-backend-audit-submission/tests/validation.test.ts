import { describe, expect, it } from "vitest";
import { inquirySchema } from "../examples/validation.js";

describe("inquirySchema", () => {
  it("accepts valid input", () => {
    expect(inquirySchema.safeParse({
      fullName: "Alex Example",
      email: "alex@example.com",
      company: "",
      industry: "Software",
      message: "I would like to learn more about your services."
    }).success).toBe(true);
  });

  it("rejects invalid email", () => {
    expect(inquirySchema.safeParse({
      fullName: "Alex", email: "not-an-email",
      message: "This message is long enough."
    }).success).toBe(false);
  });

  it("rejects oversized message", () => {
    expect(inquirySchema.safeParse({
      fullName: "Alex", email: "alex@example.com",
      message: "x".repeat(5001)
    }).success).toBe(false);
  });

  it("rejects unexpected fields", () => {
    expect(inquirySchema.safeParse({
      fullName: "Alex", email: "alex@example.com",
      message: "This message is long enough.", isAdmin: true
    }).success).toBe(false);
  });
});

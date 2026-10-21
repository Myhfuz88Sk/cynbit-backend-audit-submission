import express from "express";
import { randomUUID } from "node:crypto";
import { inquirySchema } from "./validation.js";

const app = express();
app.use(express.json({ limit: "32kb" }));

app.post("/api/inquiries", async (req, res, next) => {
  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      data: null,
      error: { code: "VALIDATION_ERROR", message: "Please check the submitted fields." }
    });
  }

  try {
    // Replace with an approved persistence/CRM/email service.
    // Add rate limiting, spam controls, and dependency timeouts in production.
    return res.status(201).json({ data: { accepted: true }, error: null });
  } catch (error) {
    return next(error);
  }
});

app.use((error: unknown, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const requestId = randomUUID();
  // Use a proper logger in production. Never log the complete body or secrets.
  console.error("Request failed", { requestId, method: req.method, path: req.path });
  return res.status(500).json({
    data: null,
    error: { code: "INTERNAL_ERROR", message: "Something went wrong. Please try again later." },
    requestId
  });
});

export default app;

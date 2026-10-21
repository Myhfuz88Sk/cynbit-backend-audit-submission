# Security & Performance Findings Register

These are investigation items and recommendations, not allegations of confirmed vulnerabilities. Potential severity describes impact if a control is absent; current evidence is limited.

## F-01 — Server-side form validation
- **Category:** Data validation
- **Status:** Not verified
- **Potential severity:** Medium if absent; current evidence Informational
- **Evidence:** Public contact form displays name, email, optional company/industry, and message fields.
- **Risk:** Client-side checks can be bypassed; malformed or oversized values may reach downstream services.
- **Safe verification:** Observe normal form validation with benign values only; do not send exploit payloads.
- **Recommendation:** Server-side schema validation, field length limits, accepted types, safe 400 response.

## F-02 — Safe and consistent error responses
- **Category:** Error handling / information disclosure
- **Status:** Not verified
- **Potential severity:** Low–Medium if unsafe errors are returned
- **Evidence:** No backend error response was captured in this desk review.
- **Risk:** Stack traces or internal provider/database details may leak; inconsistent errors complicate clients.
- **Recommendation:** Stable error codes and safe messages; detailed diagnostics in controlled logs with request IDs.

## F-03 — Abuse controls on public inquiry forms
- **Category:** Availability / abuse prevention
- **Status:** Not verified; no repeated or automated submissions performed
- **Potential severity:** Medium if controls are inadequate
- **Evidence:** Public inquiry form is visible; anti-spam implementation cannot be inferred from the form alone.
- **Risk:** Automated submissions may create spam or consume downstream resources.
- **Recommendation:** Request-size limits, reasonable rate limits, appropriate anti-spam controls, timeouts, monitoring.

## F-04 — Applicant/inquiry data minimization
- **Category:** Privacy / data handling
- **Status:** UI fields observed; storage and retention not verified
- **Potential severity:** Medium if data is over-collected or poorly protected
- **Risk:** Excessive retention, broad access, or full-body logging increases privacy impact.
- **Recommendation:** Collect only necessary data, restrict access, define retention/deletion, redact personal data from logs.

## F-05 — Performance measurement
- **Category:** Performance
- **Status:** Not measured
- **Severity:** Informational
- **Evidence:** No controlled timing or request-size measurements were captured.
- **Risk:** Large assets, repeated requests, or unsuitable caching may slow pages.
- **Recommendation:** Measure normal page loads with DevTools/Lighthouse; optimize only based on evidence. No production load tests.

## F-06 — Authorization for protected resources
- **Category:** Authentication / authorization
- **Status:** Not verified; no private resource access attempted
- **Potential severity:** High if sensitive resources lack checks; no vulnerability confirmed
- **Evidence:** Public pages cannot establish how private resources are protected.
- **Recommendation:** Enforce server-side authorization for every protected object/action; do not rely on hidden UI controls.

## F-07 — Caching and transport headers
- **Category:** Performance / transport security
- **Status:** Header verification pending
- **Severity:** Informational
- **Recommendation:** Verify HTTPS and relevant headers via ordinary browser inspection. Cache versioned public assets appropriately; do not publicly cache private/personal responses.

## Prioritization
1. P1 if verified: unauthorized access to private data or sensitive information disclosure.
2. P2 if verified: missing server-side validation, unsafe error leakage, absent abuse controls on public submission routes.
3. P3: measured performance and consistency improvements.

Do not label an item “confirmed” until supporting evidence has been captured.

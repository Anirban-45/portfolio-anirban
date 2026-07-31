export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export type ContactResult = { success: true } | { success: false; error: string };

/**
 * Single seam between the contact form and whatever actually delivers mail.
 *
 * Currently a stub: it simulates network latency and always succeeds, so the
 * modal's loading / success / error states can be developed and demoed.
 *
 * ----------------------------------------------------------------------------
 * TO GO LIVE, replace the body below with one of these. Nothing else changes.
 *
 * A) Static-friendly (keeps `output: "export"` in next.config.ts).
 *    Sign up at web3forms.com, then:
 *
 *    const res = await fetch("https://api.web3forms.com/submit", {
 *      method: "POST",
 *      headers: { "Content-Type": "application/json", Accept: "application/json" },
 *      body: JSON.stringify({
 *        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
 *        name: `${payload.firstName} ${payload.lastName}`,
 *        email: payload.email,
 *        message: payload.message,
 *      }),
 *    });
 *    const data = await res.json();
 *    return data.success
 *      ? { success: true }
 *      : { success: false, error: data.message ?? "Unknown error" };
 *
 * B) Real API route (requires REMOVING `output: "export"` and a Node host).
 *    Create app/api/contact/route.ts, then:
 *
 *    const res = await fetch("/api/contact", {
 *      method: "POST",
 *      headers: { "Content-Type": "application/json" },
 *      body: JSON.stringify(payload),
 *    });
 *    if (!res.ok) return { success: false, error: `Request failed (${res.status})` };
 *    return await res.json();
 * ----------------------------------------------------------------------------
 */
export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResult> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Flip to `false` to exercise the modal's error state during development.
  const SIMULATE_SUCCESS = true;

  if (!SIMULATE_SUCCESS) {
    return { success: false, error: "Simulated failure for testing." };
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[contact] stubbed submit, not actually sent:", payload);
  }

  return { success: true };
}

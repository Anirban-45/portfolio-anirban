export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export type ContactResult =
  | { success: true }
  | { success: false; error: string };

export async function sendContactMessage(
  payload: ContactPayload
): Promise<ContactResult> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    return {
      success: false,
      error: data?.error ?? `Request failed (${res.status})`,
    };
  }

  return await res.json();
}

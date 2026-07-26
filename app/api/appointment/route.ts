/**
 * Appointment requests from the booking form.
 *
 * This is a portfolio build for a clinic that does not exist, so nothing is
 * forwarded anywhere — the handler validates the payload and answers. The
 * validation is real on purpose: it is the part a live clinic would keep.
 */

type Payload = {
  name?: unknown;
  phone?: unknown;
  service?: unknown;
  when?: unknown;
  lang?: unknown;
};

// Crude but effective: one IP cannot fire the form more than 5 times a minute.
const hits = new Map<string, number[]>();
const WINDOW = 60_000;
const LIMIT = 5;

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) hits.clear();
  return recent.length > LIMIT;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (tooMany(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : "";

  if (name.length < 2) {
    return Response.json({ error: "name" }, { status: 422 });
  }
  if (phone.replace(/\D/g, "").length < 8) {
    return Response.json({ error: "phone" }, { status: 422 });
  }

  return Response.json({ ok: true, callback: "10min" });
}

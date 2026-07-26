import { NextResponse } from "next/server";
import { listAppointments, setStatus, dbReady, type Appointment } from "@/lib/db";
import { toISO } from "@/lib/slots";

export const dynamic = "force-dynamic";

/* Same shape as the booking form: a handful of tries a minute, then stop. */
const hits = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 300) hits.clear();
  return recent.length > 12;
}

function authorised(key: unknown): boolean {
  const expected = process.env.ADMIN_KEY;
  return Boolean(expected) && typeof key === "string" && key === expected;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "local";
  if (tooMany(ip)) return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!authorised(body.key)) {
    return NextResponse.json({ ok: false, error: "auth" }, { status: 401 });
  }
  if (!dbReady) return NextResponse.json({ ok: false, error: "offline" }, { status: 503 });

  /* --- change a status --- */
  if (body.action === "status") {
    const id = String(body.id ?? "");
    const status = String(body.status ?? "");
    if (!id || !["new", "done", "cancelled"].includes(status)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    const ok = await setStatus(id, status as Appointment["status"]);
    return NextResponse.json({ ok });
  }

  /* --- the default: everything from a week ago to two months ahead --- */
  const now = new Date();
  const from = new Date(now);
  from.setDate(from.getDate() - 7);
  const to = new Date(now);
  to.setDate(to.getDate() + 60);

  try {
    const rows = await listAppointments(toISO(from), toISO(to));
    return NextResponse.json({ ok: true, rows, today: toISO(now) });
  } catch {
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

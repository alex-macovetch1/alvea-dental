import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/content";
import { dbReady, insertAppointment, takenSlots } from "@/lib/db";
import {
  demoBusy,
  doctorsFor,
  isValidISO,
  makeCode,
  overlaps,
  serviceMinutes,
  slotsFor,
  validPhone,
} from "@/lib/slots";

export const dynamic = "force-dynamic";

/* A booking form is a small, quiet target. Five per minute per address is
   more than any human needs and enough to stop a loop. */
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

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "local";
  if (tooMany(ip)) {
    return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad" }, { status: 400 });
  }

  const service = String(body.service ?? "");
  const doctorWanted = String(body.doctor ?? "any");
  const day = String(body.day ?? "");
  const start = Number(body.start);
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const note = String(body.note ?? "").trim().slice(0, 500);
  const lang = body.lang === "ru" ? "ru" : "ro";

  if (!SERVICES.some((s) => s.slug === service)) {
    return NextResponse.json({ ok: false, error: "service" }, { status: 400 });
  }
  if (!isValidISO(day) || !Number.isInteger(start)) {
    return NextResponse.json({ ok: false, error: "slot" }, { status: 400 });
  }
  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "name" }, { status: 400 });
  }
  if (!validPhone(phone)) {
    return NextResponse.json({ ok: false, error: "phone" }, { status: 400 });
  }

  const candidates = doctorsFor(service, doctorWanted);
  if (!candidates.length) {
    return NextResponse.json({ ok: false, error: "doctor" }, { status: 400 });
  }

  const len = serviceMinutes(service);

  // Re-check the hour on the server. What the browser was shown a minute ago
  // is a suggestion, not a fact.
  let chosen: string | null = null;
  for (const d of candidates) {
    if (!slotsFor(d, day, service).includes(start)) continue;
    if (demoBusy(d, day, start)) continue;
    const taken = await takenSlots(d, day);
    if (overlaps(start, len, taken)) continue;
    chosen = d;
    break;
  }

  if (!chosen) {
    return NextResponse.json({ ok: false, error: "taken" }, { status: 409 });
  }

  if (!dbReady) {
    // Without a database the site still has to answer honestly.
    return NextResponse.json({ ok: false, error: "offline" }, { status: 503 });
  }

  const code = makeCode();
  try {
    const row = await insertAppointment({
      code,
      service,
      doctor: chosen,
      day,
      start_min: start,
      minutes: len,
      name,
      phone,
      note: note || null,
      lang,
    });
    // null means the unique index caught someone who was half a second faster
    if (!row) return NextResponse.json({ ok: false, error: "taken" }, { status: 409 });
    return NextResponse.json({ ok: true, code: row.code, doctor: row.doctor });
  } catch {
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

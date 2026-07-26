import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/content";
import { takenSlots } from "@/lib/db";
import { demoBusy, doctorsFor, isValidISO, overlaps, serviceMinutes, slotsFor } from "@/lib/slots";

export const dynamic = "force-dynamic";

/**
 * GET /api/slots?doctor=…&day=YYYY-MM-DD&service=…
 * Returns the free start times as minutes from midnight, plus which doctor
 * would take each one when the visitor did not pick a name.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const doctor = url.searchParams.get("doctor") ?? "";
  const day = url.searchParams.get("day") ?? "";
  const service = url.searchParams.get("service") ?? "";

  if (!SERVICES.some((s) => s.slug === service) || !isValidISO(day)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const docs = doctorsFor(service, doctor);
  if (!docs.length) return NextResponse.json({ error: "unknown doctor" }, { status: 400 });

  const len = serviceMinutes(service);
  const byStart = new Map<number, string>();

  for (const d of docs) {
    let taken: { start_min: number; minutes: number }[] = [];
    try {
      taken = await takenSlots(d, day);
    } catch {
      // a database hiccup should show a full calendar, never a broken page
    }
    for (const s of slotsFor(d, day, service)) {
      if (overlaps(s, len, taken) || demoBusy(d, day, s)) continue;
      if (!byStart.has(s)) byStart.set(s, d);
    }
  }

  const free = [...byStart.keys()].sort((a, b) => a - b);
  return NextResponse.json({
    day,
    service,
    minutes: len,
    free,
    doctorFor: Object.fromEntries(byStart),
  });
}

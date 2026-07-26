import { NextResponse } from "next/server";
import { SERVICES } from "@/lib/content";
import { takenRange } from "@/lib/db";
import {
  calendarDays,
  demoBusy,
  doctorsFor,
  overlaps,
  serviceMinutes,
  slotsFor,
} from "@/lib/slots";

export const dynamic = "force-dynamic";

/**
 * GET /api/days?doctor=…&service=…
 * How many hours are still free on each of the next four weeks' days, so the
 * month grid can grey out what is pointless to click.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const doctor = url.searchParams.get("doctor") ?? "";
  const service = url.searchParams.get("service") ?? "";

  if (!SERVICES.some((s) => s.slug === service)) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const docs = doctorsFor(service, doctor);
  if (!docs.length) return NextResponse.json({ error: "unknown doctor" }, { status: 400 });

  const days = calendarDays();
  const len = serviceMinutes(service);

  let taken: { doctor: string; day: string; start_min: number; minutes: number }[] = [];
  try {
    taken = await takenRange(docs, days[0], days[days.length - 1]);
  } catch {
    // an unreachable database means "everything looks free", not a dead page
  }

  const counts: Record<string, number> = {};
  for (const day of days) {
    const starts = new Set<number>();
    for (const d of docs) {
      const busy = taken.filter((t) => t.doctor === d && t.day.startsWith(day));
      for (const s of slotsFor(d, day, service)) {
        if (overlaps(s, len, busy) || demoBusy(d, day, s)) continue;
        starts.add(s);
      }
    }
    counts[day] = starts.size;
  }

  return NextResponse.json({ days, counts });
}

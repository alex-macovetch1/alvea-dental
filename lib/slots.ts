/**
 * The rules the calendar runs on. Everything here is a pure function, so the
 * wizard in the browser and the API route on the server always agree about
 * which hours exist — the server just also knows which ones are taken.
 */

import { TEAM } from "./content";
import { SERVICE_PAGES } from "./services-content";
import { DOCTOR_PAGES } from "./team-content";

/** every appointment starts on the half hour */
export const STEP = 30;
/** how far ahead the calendar opens */
export const HORIZON_DAYS = 28;
/** nothing can be booked less than this far from now */
export const LEAD_MIN = 90;

const LUNCH_FROM = 13 * 60;
const LUNCH_TO = 14 * 60;

export function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function fromMin(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/** Monday is 1, Sunday is 0 — the same numbering as Date.getDay(). */
export function clinicHours(dow: number): { open: number; close: number } | null {
  if (dow === 0) return null;
  if (dow === 6) return { open: 9 * 60, close: 16 * 60 };
  return { open: 8 * 60, close: 20 * 60 };
}

export function serviceMinutes(slug: string): number {
  return SERVICE_PAGES[slug]?.minutes ?? 30;
}

export function doctorWorks(doctorSlug: string, dow: number): boolean {
  return DOCTOR_PAGES[doctorSlug]?.days.includes(dow) ?? false;
}

/** Which doctors can take this service — "any" means everyone who does it. */
export function doctorsFor(service: string, doctor: string): string[] {
  if (doctor === "any") return TEAM.filter((m) => m.services.includes(service)).map((m) => m.slug);
  return TEAM.some((m) => m.slug === doctor) ? [doctor] : [];
}

/** "2026-07-28" → a Date at local midnight, without timezone surprises */
export function parseISO(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function toISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function isValidISO(iso: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) && !Number.isNaN(parseISO(iso).getTime());
}

/** The days the calendar offers: from today to the horizon. */
export function calendarDays(from = new Date()): string[] {
  const out: string[] = [];
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  for (let i = 0; i < HORIZON_DAYS; i++) {
    out.push(toISO(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

/**
 * A small deterministic hash. It gives the empty demo calendar a believable
 * shape: roughly a third of the hours look already taken, and they stay the
 * same on every reload instead of flickering.
 */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

export function demoBusy(doctor: string, day: string, start: number): boolean {
  return hash(`${doctor}|${day}|${start}`) < 0.34;
}

/**
 * Every start time that physically fits on this day for this doctor and
 * service. Taken hours are removed later, by whoever has the database.
 */
export function slotsFor(doctor: string, day: string, service: string, now = new Date()): number[] {
  if (!isValidISO(day)) return [];
  const date = parseISO(day);
  const dow = date.getDay();
  const hours = clinicHours(dow);
  if (!hours) return [];
  if (!doctorWorks(doctor, dow)) return [];

  const len = serviceMinutes(service);
  const isToday = toISO(now) === day;
  const earliest = isToday ? now.getHours() * 60 + now.getMinutes() + LEAD_MIN : -1;

  const out: number[] = [];
  for (let s = hours.open; s + len <= hours.close; s += STEP) {
    // the clinic eats between 13 and 14
    if (s < LUNCH_TO && s + len > LUNCH_FROM) continue;
    if (s <= earliest) continue;
    out.push(s);
  }
  return out;
}

/** Does a new booking of `len` minutes at `start` hit an existing one? */
export function overlaps(
  start: number,
  len: number,
  taken: { start_min: number; minutes: number }[]
): boolean {
  return taken.some((t) => start < t.start_min + t.minutes && t.start_min < start + len);
}

/** Six characters, readable out loud over the phone. */
export function makeCode(): string {
  const abc = "ACDEFGHJKLMNPQRTUVWXY3456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += abc[Math.floor(Math.random() * abc.length)];
  return s;
}

export function validPhone(v: string): boolean {
  const digits = v.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

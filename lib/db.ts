/**
 * A thin wrapper over Supabase's REST endpoint. Plain fetch on purpose:
 * the whole surface is three calls, and a client library would be a
 * dependency for nothing.
 *
 * The service key never leaves the server — every caller here is a route
 * handler, never a component.
 */

const URL_ = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_SERVICE_KEY;

export type Appointment = {
  id: string;
  code: string;
  created_at: string;
  service: string;
  doctor: string;
  day: string;
  start_min: number;
  minutes: number;
  name: string;
  phone: string;
  note: string | null;
  lang: string;
  status: "new" | "done" | "cancelled";
};

export const dbReady = Boolean(URL_ && KEY);

function headers(extra: Record<string, string> = {}) {
  return {
    apikey: KEY!,
    Authorization: `Bearer ${KEY!}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

const TABLE = "alvea_appointments";

/** Everything already booked for one doctor on one day. */
export async function takenSlots(
  doctor: string,
  day: string
): Promise<{ start_min: number; minutes: number }[]> {
  if (!dbReady) return [];
  const q = `${URL_}/rest/v1/${TABLE}?select=start_min,minutes&doctor=eq.${encodeURIComponent(
    doctor
  )}&day=eq.${day}&status=neq.cancelled`;
  const r = await fetch(q, { headers: headers(), cache: "no-store" });
  if (!r.ok) return [];
  return (await r.json()) as { start_min: number; minutes: number }[];
}

/** Booked hours for several doctors at once — used to shade the month view. */
export async function takenRange(
  doctors: string[],
  from: string,
  to: string
): Promise<{ doctor: string; day: string; start_min: number; minutes: number }[]> {
  if (!dbReady || !doctors.length) return [];
  const list = doctors.map((d) => `"${d}"`).join(",");
  const q = `${URL_}/rest/v1/${TABLE}?select=doctor,day,start_min,minutes&doctor=in.(${encodeURIComponent(
    list
  )})&day=gte.${from}&day=lte.${to}&status=neq.cancelled`;
  const r = await fetch(q, { headers: headers(), cache: "no-store" });
  if (!r.ok) return [];
  return await r.json();
}

export type NewAppointment = Omit<Appointment, "id" | "created_at" | "status">;

/** Returns null when the unique index rejects a slot someone else just took. */
export async function insertAppointment(row: NewAppointment): Promise<Appointment | null> {
  if (!dbReady) return null;
  const r = await fetch(`${URL_}/rest/v1/${TABLE}`, {
    method: "POST",
    headers: headers({ Prefer: "return=representation" }),
    body: JSON.stringify(row),
  });
  if (r.status === 409) return null;
  if (!r.ok) throw new Error(`insert failed: ${r.status} ${await r.text()}`);
  const rows = (await r.json()) as Appointment[];
  return rows[0] ?? null;
}

/** The clinic's own screen: the next few weeks, newest day first. */
export async function listAppointments(from: string, to: string): Promise<Appointment[]> {
  if (!dbReady) return [];
  const q = `${URL_}/rest/v1/${TABLE}?select=*&day=gte.${from}&day=lte.${to}&order=day.asc,start_min.asc`;
  const r = await fetch(q, { headers: headers(), cache: "no-store" });
  if (!r.ok) throw new Error(`list failed: ${r.status}`);
  return await r.json();
}

export async function setStatus(id: string, status: Appointment["status"]): Promise<boolean> {
  if (!dbReady) return false;
  const r = await fetch(`${URL_}/rest/v1/${TABLE}?id=eq.${id}`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({ status }),
  });
  return r.ok;
}

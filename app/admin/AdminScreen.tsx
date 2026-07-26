"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SERVICES, TEAM } from "@/lib/content";
import { fromMin } from "@/lib/slots";
import css from "./admin.module.css";

type Row = {
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

const KEY_STORE = "alvea-admin";
const MONTHS = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sep", "oct", "noi", "dec"];
const WD = ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"];

function label(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return `${WD[date.getDay()]}, ${d} ${MONTHS[m - 1]}`;
}

export default function AdminScreen() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [today, setToday] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"upcoming" | "all" | "cancelled">("upcoming");

  const load = useCallback(async (k: string) => {
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: k }),
      });
      const j = await r.json();
      if (!j.ok) {
        setError(j.error === "auth" ? "Parolă greșită." : "Nu am putut încărca agenda.");
        setAuthed(false);
        sessionStorage.removeItem(KEY_STORE);
      } else {
        setRows(j.rows);
        setToday(j.today);
        setAuthed(true);
        sessionStorage.setItem(KEY_STORE, k);
      }
    } catch {
      setError("Nu am putut încărca agenda.");
    }
    setBusy(false);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem(KEY_STORE);
    if (saved) {
      setKey(saved);
      load(saved);
    }
  }, [load]);

  const change = async (id: string, status: Row["status"]) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, action: "status", id, status }),
    });
  };

  if (!authed) {
    return (
      <div className={css.gate}>
        <form
          className={css.gateBox}
          onSubmit={(e) => {
            e.preventDefault();
            load(key);
          }}
        >
          <span className={css.gateMark}>ALVEA</span>
          <h1>Agenda clinicii</h1>
          <p>Ecranul intern. Programările intră aici în momentul în care pacientul confirmă ora.</p>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Parola"
            autoFocus
          />
          {error && <span className={css.gateErr}>{error}</span>}
          <button type="submit" disabled={busy}>
            {busy ? "Verific…" : "Intră"}
          </button>
          <Link href="/" className={css.gateBack}>
            ← Înapoi pe site
          </Link>
        </form>
      </div>
    );
  }

  const visible = rows.filter((r) => {
    if (filter === "cancelled") return r.status === "cancelled";
    if (filter === "upcoming") return r.status !== "cancelled" && r.day >= today;
    return true;
  });

  const byDay = visible.reduce<Record<string, Row[]>>((acc, r) => {
    (acc[r.day] ??= []).push(r);
    return acc;
  }, {});

  const upcoming = rows.filter((r) => r.status === "new" && r.day >= today).length;
  const todayCount = rows.filter((r) => r.day === today && r.status !== "cancelled").length;

  return (
    <div className={css.shell}>
      <header className={css.bar}>
        <div>
          <span className={css.mark}>ALVEA</span>
          <b>Agenda clinicii</b>
        </div>
        <div className={css.barRight}>
          <span className={css.pill}>
            azi: <b>{todayCount}</b>
          </span>
          <span className={css.pill}>
            de confirmat: <b>{upcoming}</b>
          </span>
          <button className={css.refresh} onClick={() => load(key)} disabled={busy}>
            {busy ? "…" : "Reîmprospătează"}
          </button>
          <Link href="/" className={css.exit}>
            Site
          </Link>
        </div>
      </header>

      <div className={css.tabs}>
        {(
          [
            ["upcoming", "Ce urmează"],
            ["all", "Tot"],
            ["cancelled", "Anulate"],
          ] as const
        ).map(([v, l]) => (
          <button key={v} data-on={filter === v} onClick={() => setFilter(v)}>
            {l}
          </button>
        ))}
      </div>

      {Object.keys(byDay).length === 0 && (
        <p className={css.empty}>Nimic aici încă. Prima programare de pe site apare imediat.</p>
      )}

      {Object.entries(byDay).map(([day, list]) => (
        <section className={css.day} key={day}>
          <h2>
            {label(day)}
            {day === today && <i>azi</i>}
            <em>
              {list.length} {list.length === 1 ? "programare" : "programări"}
            </em>
          </h2>
          <div className={css.rows}>
            {list.map((r) => {
              const svc = SERVICES.find((s) => s.slug === r.service);
              const doc = TEAM.find((m) => m.slug === r.doctor);
              return (
                <article className={css.row} key={r.id} data-status={r.status}>
                  <span className={css.time}>
                    {fromMin(r.start_min)}
                    <i>{r.minutes} min</i>
                  </span>
                  <div className={css.who}>
                    <b>{r.name}</b>
                    <a href={`tel:${r.phone.replace(/\s/g, "")}`}>{r.phone}</a>
                    {r.note && <p className={css.note}>{r.note}</p>}
                  </div>
                  <div className={css.what}>
                    <span>{svc?.title.ro ?? r.service}</span>
                    <i>{doc?.name ?? r.doctor}</i>
                  </div>
                  <span className={css.code}>{r.code}</span>
                  <div className={css.acts}>
                    {r.status !== "done" && (
                      <button onClick={() => change(r.id, "done")}>A venit</button>
                    )}
                    {r.status !== "cancelled" && (
                      <button className={css.cancel} onClick={() => change(r.id, "cancelled")}>
                        Anulează
                      </button>
                    )}
                    {r.status !== "new" && (
                      <button onClick={() => change(r.id, "new")}>Repune</button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

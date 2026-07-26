"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CLINIC, SERVICES, TEAM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SERVICE_PAGES } from "@/lib/services-content";
import {
  BOOK,
  MONTHS,
  WEEKDAYS_SHORT,
  formatDate,
} from "@/lib/site-content";
import { calendarDays, clinicHours, fromMin, parseISO, validPhone } from "@/lib/slots";
import { DOCTOR_PAGES } from "@/lib/team-content";
import { Arrow, ArrowRight, Check, Clock, Phone, Pin } from "./Icons";
import css from "./Booker.module.css";

type Step = 0 | 1 | 2 | 3 | 4;

export default function Booker() {
  const { lang, t } = useLang();
  const params = useSearchParams();

  const [step, setStep] = useState<Step>(0);
  const [service, setService] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [start, setStart] = useState<number | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [err, setErr] = useState<{ name?: string; phone?: string; form?: string }>({});

  const [dayCounts, setDayCounts] = useState<Record<string, number> | null>(null);
  const [free, setFree] = useState<number[] | null>(null);
  const [doctorFor, setDoctorFor] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ code: string; doctor: string } | null>(null);

  const days = useMemo(() => calendarDays(), []);

  /* ---- prefill from /servicii/x and /echipa/y ---- */
  useEffect(() => {
    const s = params.get("serviciu");
    const d = params.get("medic");
    if (s && SERVICES.some((x) => x.slug === s)) {
      setService(s);
      setStep(1);
    }
    if (d && TEAM.some((x) => x.slug === d)) {
      setDoctor(d);
      // a doctor link with no service still needs the service picked first
      if (s) setStep(2);
    }
  }, [params]);

  const eligible = useMemo(
    () => (service ? TEAM.filter((m) => m.services.includes(service)) : []),
    [service]
  );

  /* ---- which days still have room ---- */
  useEffect(() => {
    if (!service || !doctor || step < 2) return;
    let alive = true;
    setDayCounts(null);
    fetch(`/api/days?service=${service}&doctor=${doctor}`)
      .then((r) => r.json())
      .then((j) => alive && setDayCounts(j.counts ?? {}))
      .catch(() => alive && setDayCounts({}));
    return () => {
      alive = false;
    };
  }, [service, doctor, step]);

  /* ---- the hours of the chosen day ---- */
  useEffect(() => {
    if (!service || !doctor || !day) return;
    let alive = true;
    setFree(null);
    fetch(`/api/slots?service=${service}&doctor=${doctor}&day=${day}`)
      .then((r) => r.json())
      .then((j) => {
        if (!alive) return;
        setFree(j.free ?? []);
        setDoctorFor(j.doctorFor ?? {});
      })
      .catch(() => alive && setFree([]));
    return () => {
      alive = false;
    };
  }, [service, doctor, day]);

  const go = useCallback((s: Step) => {
    setStep(s);
    // the wizard is tall; jumping back to its top keeps the next choice in view
    document.getElementById("wizard")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof err = {};
    if (name.trim().length < 2) next.name = t(BOOK.errName);
    if (!validPhone(phone)) next.phone = t(BOOK.errPhone);
    setErr(next);
    if (Object.keys(next).length) return;

    setSending(true);
    try {
      const r = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, doctor, day, start, name, phone, note, lang }),
      });
      const j = await r.json();
      if (j.ok) {
        setDone({ code: j.code, doctor: j.doctor });
      } else if (j.error === "taken") {
        setErr({ form: t(BOOK.errTaken) });
        setStart(null);
        go(3);
      } else {
        setErr({ form: t(BOOK.errGeneric) });
      }
    } catch {
      setErr({ form: t(BOOK.errGeneric) });
    }
    setSending(false);
  };

  const reset = () => {
    setDone(null);
    setStep(0);
    setService("");
    setDoctor("");
    setDay("");
    setStart(null);
    setName("");
    setPhone("");
    setNote("");
    setErr({});
  };

  const svc = SERVICES.find((s) => s.slug === service);
  const doc = TEAM.find((m) => m.slug === doctor);
  const finalDoctor = TEAM.find(
    (m) => m.slug === (done?.doctor ?? (start !== null ? doctorFor[String(start)] : undefined))
  );

  /* ---------------------------------------------------------------- */
  if (done) {
    return (
      <div className={css.doneBox}>
        <span className={css.tick}>
          <Check size={26} />
        </span>
        <h2 className={`display ${css.doneTitle}`}>{t(BOOK.okTitle)}</h2>
        <p className={css.doneText}>{t(BOOK.okText)}</p>

        <div className={css.ticket}>
          <div>
            <span>{t(BOOK.steps[0])}</span>
            <b>{svc && t(svc.title)}</b>
          </div>
          <div>
            <span>{t(BOOK.steps[1])}</span>
            <b>{finalDoctor?.name}</b>
          </div>
          <div>
            <span>{t(BOOK.steps[2])}</span>
            <b>{formatDate(day, lang)}</b>
          </div>
          <div>
            <span>{t(BOOK.steps[3])}</span>
            <b>{start !== null && fromMin(start)}</b>
          </div>
          <div className={css.ticketCode}>
            <span>{t(BOOK.okCode)}</span>
            <b>{done.code}</b>
          </div>
        </div>

        <div className={css.doneWhere}>
          <Pin size={15} />
          {t(CLINIC.address)}
          <a href={CLINIC.phoneHref}>
            <Phone size={14} />
            {CLINIC.phone}
          </a>
        </div>

        <div className={css.doneActs}>
          <Link href="/" className="btn btn-accent">
            {t(BOOK.okHome)}
            <span className="ic">
              <Arrow size={12} />
            </span>
          </Link>
          <button className="btn btn-ghost" onClick={reset}>
            {t(BOOK.okAgain)}
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  return (
    <div className={css.wizard} id="wizard">
      {/* ---- rail ---- */}
      <ol className={css.rail}>
        {BOOK.steps.map((s, i) => {
          const reached = i <= step;
          const value =
            i === 0
              ? svc && t(svc.title)
              : i === 1
              ? doctor === "any"
                ? t(BOOK.anyDoctor)
                : doc?.name
              : i === 2
              ? day && formatDate(day, lang)
              : i === 3
              ? start !== null
                ? fromMin(start)
                : ""
              : "";
          return (
            <li key={i} className={css.railItem} data-on={reached} data-cur={i === step}>
              <button
                onClick={() => reached && go(i as Step)}
                disabled={!reached}
                className={css.railBtn}
              >
                <i>{i + 1}</i>
                <span>
                  <b>{t(s)}</b>
                  {value ? <em>{value}</em> : null}
                </span>
              </button>
            </li>
          );
        })}
        <span className={css.railFill} style={{ "--p": `${(step / 4) * 100}%` } as React.CSSProperties} />
      </ol>

      <div className={css.panel} key={step}>
        {/* ---- 1. service ---- */}
        {step === 0 && (
          <section className={css.pane}>
            <h2 className={css.paneTitle}>{t(BOOK.pickService)}</h2>
            <div className={css.svcGrid}>
              {SERVICES.map((s, i) => (
                <button
                  key={s.slug}
                  className={css.svcCard}
                  data-on={service === s.slug}
                  style={{ "--d": `${i * 40}ms` } as React.CSSProperties}
                  onClick={() => {
                    setService(s.slug);
                    setDoctor("");
                    setDay("");
                    setStart(null);
                    go(1);
                  }}
                >
                  <span className={css.svcImg}>
                    <Image src={s.img} alt="" width={300} height={300} sizes="90px" />
                  </span>
                  <span className={css.svcBody}>
                    <b>{t(s.title)}</b>
                    <em>
                      {t(s.price)} · {SERVICE_PAGES[s.slug].minutes} min
                    </em>
                  </span>
                  <ArrowRight size={16} />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* ---- 2. doctor ---- */}
        {step === 1 && (
          <section className={css.pane}>
            <h2 className={css.paneTitle}>{t(BOOK.pickDoctor)}</h2>
            <div className={css.docGrid}>
              <button
                className={`${css.docCard} ${css.anyCard}`}
                data-on={doctor === "any"}
                onClick={() => {
                  setDoctor("any");
                  setDay("");
                  setStart(null);
                  go(2);
                }}
              >
                <span className={css.anyIcon}>
                  <Clock size={20} />
                </span>
                <b>{t(BOOK.anyDoctor)}</b>
                <em>{t(BOOK.anyDoctorNote)}</em>
              </button>

              {eligible.map((m, i) => (
                <button
                  key={m.slug}
                  className={css.docCard}
                  data-on={doctor === m.slug}
                  style={{ "--d": `${(i + 1) * 50}ms` } as React.CSSProperties}
                  onClick={() => {
                    setDoctor(m.slug);
                    setDay("");
                    setStart(null);
                    go(2);
                  }}
                >
                  <span className={css.docImg}>
                    <Image src={m.img} alt="" width={300} height={380} sizes="120px" />
                  </span>
                  <b>{m.name}</b>
                  <em>{t(m.role)}</em>
                  <span className={css.docDays}>{t(DOCTOR_PAGES[m.slug].daysLabel)}</span>
                </button>
              ))}
            </div>
            <button className={css.back} onClick={() => go(0)}>
              ← {t(BOOK.back)}
            </button>
          </section>
        )}

        {/* ---- 3. day ---- */}
        {step === 2 && (
          <section className={css.pane}>
            <h2 className={css.paneTitle}>{t(BOOK.pickDay)}</h2>
            <Calendar
              days={days}
              counts={dayCounts}
              value={day}
              onPick={(d) => {
                setDay(d);
                setStart(null);
                go(3);
              }}
            />
            <button className={css.back} onClick={() => go(1)}>
              ← {t(BOOK.back)}
            </button>
          </section>
        )}

        {/* ---- 4. time ---- */}
        {step === 3 && (
          <section className={css.pane}>
            <h2 className={css.paneTitle}>{t(BOOK.pickTime)}</h2>
            <p className={css.paneSub}>{day && formatDate(day, lang)}</p>
            {err.form && <p className={css.formErr}>{err.form}</p>}

            {free === null && <p className={css.loading}>{t(BOOK.loadingSlots)}</p>}
            {free !== null && free.length === 0 && <p className={css.loading}>{t(BOOK.noSlots)}</p>}

            {free !== null && free.length > 0 && (
              <div className={css.timeGroups}>
                {(
                  [
                    [{ ro: "Dimineața", ru: "Утро" }, 0, 12 * 60],
                    [{ ro: "După-amiaza", ru: "День" }, 12 * 60, 17 * 60],
                    [{ ro: "Seara", ru: "Вечер" }, 17 * 60, 24 * 60],
                  ] as const
                ).map(([label, from, to], gi) => {
                  const list = free.filter((s) => s >= from && s < to);
                  if (!list.length) return null;
                  return (
                    <div className={css.timeGroup} key={gi}>
                      <span className={css.timeLabel}>{t(label)}</span>
                      <div className={css.times}>
                        {list.map((s, i) => (
                          <button
                            key={s}
                            className={css.time}
                            data-on={start === s}
                            style={{ "--d": `${i * 22}ms` } as React.CSSProperties}
                            onClick={() => {
                              setStart(s);
                              setErr({});
                              go(4);
                            }}
                          >
                            {fromMin(s)}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <button className={css.back} onClick={() => go(2)}>
              ← {t(BOOK.back)}
            </button>
          </section>
        )}

        {/* ---- 5. details ---- */}
        {step === 4 && (
          <section className={css.pane}>
            <h2 className={css.paneTitle}>{t(BOOK.yourData)}</h2>

            <div className={css.summary}>
              <span className={css.summaryLabel}>{t(BOOK.summary)}</span>
              <div className={css.summaryRows}>
                <div>
                  <span>{t(BOOK.steps[0])}</span>
                  <b>{svc && t(svc.title)}</b>
                  <button onClick={() => go(0)}>{t(BOOK.change)}</button>
                </div>
                <div>
                  <span>{t(BOOK.steps[1])}</span>
                  <b>{finalDoctor?.name ?? (doctor === "any" ? t(BOOK.anyDoctor) : doc?.name)}</b>
                  <button onClick={() => go(1)}>{t(BOOK.change)}</button>
                </div>
                <div>
                  <span>{t(BOOK.steps[2])}</span>
                  <b>{day && formatDate(day, lang)}</b>
                  <button onClick={() => go(2)}>{t(BOOK.change)}</button>
                </div>
                <div>
                  <span>{t(BOOK.steps[3])}</span>
                  <b>
                    {start !== null && fromMin(start)}
                    {svc && ` · ${SERVICE_PAGES[svc.slug].minutes} min`}
                  </b>
                  <button onClick={() => go(3)}>{t(BOOK.change)}</button>
                </div>
              </div>
            </div>

            <form onSubmit={submit} noValidate className={css.form}>
              <div className={css.field}>
                <input
                  id="bk-n"
                  value={name}
                  placeholder=" "
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="bk-n">{t(BOOK.name)}</label>
                {err.name && <span className={css.err}>{err.name}</span>}
              </div>

              <div className={css.field}>
                <input
                  id="bk-p"
                  value={phone}
                  placeholder=" "
                  inputMode="tel"
                  autoComplete="tel"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="bk-p">{t(BOOK.phone)}</label>
                {err.phone && <span className={css.err}>{err.phone}</span>}
              </div>

              <div className={css.field}>
                <textarea
                  id="bk-t"
                  value={note}
                  rows={3}
                  placeholder={t(BOOK.notePlaceholder)}
                  onChange={(e) => setNote(e.target.value)}
                />
                <span className={css.noteLabel}>{t(BOOK.note)}</span>
              </div>

              {err.form && <p className={css.formErr}>{err.form}</p>}

              <button type="submit" className={`btn btn-accent ${css.submit}`} disabled={sending}>
                {sending ? t(BOOK.sending) : t(BOOK.confirm)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </button>
              <p className={css.privacy}>{t(BOOK.privacy)}</p>
            </form>

            <button className={css.back} onClick={() => go(3)}>
              ← {t(BOOK.back)}
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function Calendar({
  days,
  counts,
  value,
  onPick,
}: {
  days: string[];
  counts: Record<string, number> | null;
  value: string;
  onPick: (d: string) => void;
}) {
  const { lang, t } = useLang();

  /** the four weeks, split by month so the header can name them */
  const months = useMemo(() => {
    const out: { key: string; label: string; cells: (string | null)[] }[] = [];
    for (const d of days) {
      const date = parseISO(d);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      let m = out.find((x) => x.key === key);
      if (!m) {
        m = {
          key,
          label: `${MONTHS[lang][date.getMonth()]} ${date.getFullYear()}`,
          cells: [],
        };
        // Monday-first grid: Sunday (0) sits at the end
        const lead = (date.getDay() + 6) % 7;
        for (let i = 0; i < lead; i++) m.cells.push(null);
        out.push(m);
      }
      m.cells.push(d);
    }
    return out;
  }, [days, lang]);

  const todayISO = days[0];
  const tomorrowISO = days[1];

  return (
    <div className={css.cal}>
      {months.map((m) => (
        <div className={css.month} key={m.key}>
          <span className={css.monthName}>{m.label}</span>
          <div className={css.weekHead}>
            {[1, 2, 3, 4, 5, 6, 0].map((i) => (
              <span key={i}>{WEEKDAYS_SHORT[lang][i]}</span>
            ))}
          </div>
          <div className={css.grid}>
            {m.cells.map((d, i) =>
              d === null ? (
                <span key={`e${i}`} />
              ) : (
                <button
                  key={d}
                  className={css.day}
                  data-on={value === d}
                  data-none={counts ? counts[d] === 0 : false}
                  disabled={counts ? counts[d] === 0 : false}
                  onClick={() => onPick(d)}
                  style={{ "--d": `${i * 14}ms` } as React.CSSProperties}
                >
                  <b>{parseISO(d).getDate()}</b>
                  <em>
                    {!counts
                      ? "·"
                      : counts[d] === 0
                      ? clinicHours(parseISO(d).getDay())
                        ? "—"
                        : t(BOOK.closedDay)
                      : counts[d]}
                  </em>
                  {d === todayISO && <i>{t(BOOK.today)}</i>}
                  {d === tomorrowISO && <i>{t(BOOK.tomorrow)}</i>}
                </button>
              )
            )}
          </div>
        </div>
      ))}
      <p className={css.calNote}>
        {t({
          ro: "Cifra de sub zi arată câte ore mai sunt libere.",
          ru: "Число под днём показывает, сколько часов ещё свободно.",
        })}
      </p>
    </div>
  );
}

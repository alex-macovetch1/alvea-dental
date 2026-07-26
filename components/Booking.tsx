"use client";

import { useState } from "react";
import { BOOKING, CLINIC, HOURS, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Clock, Mail, Phone, Pin } from "./Icons";
import css from "./Booking.module.css";

type State = "idle" | "sending" | "done";

export default function Booking() {
  const { lang, t } = useLang();
  const [state, setState] = useState<State>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].slug);
  const [when, setWhen] = useState("0");
  const [err, setErr] = useState<{ name?: string; phone?: string }>({});

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof err = {};
    if (name.trim().length < 2) next.name = t(BOOKING.errName);
    if (phone.replace(/\D/g, "").length < 8) next.phone = t(BOOKING.errPhone);
    setErr(next);
    if (Object.keys(next).length) return;

    setState("sending");
    try {
      await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, service, when: Number(when), lang }),
      });
    } catch {
      /* a failed request must not trap the visitor on a spinner */
    }
    setState("done");
  };

  return (
    <section className={`sec ${css.sec}`} id="contact">
      <div className="wrap">
        <div className={css.grid}>
          <div>
            <span className="eyebrow rv">{t(BOOKING.eyebrow)}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t(BOOKING.title)} <span className="serif">{t(BOOKING.titleEm)}</span>
            </h2>
            <p className="lede rv" style={{ "--d": "120ms" } as React.CSSProperties}>
              {t(BOOKING.text)}
            </p>

            <div className={css.facts}>
              <div className={`${css.fact} rv`}>
                <i>
                  <Pin size={17} />
                </i>
                <div>
                  <b>{t({ ro: "Adresa", ru: "Адрес" })}</b>
                  <span>
                    <a href={CLINIC.maps} target="_blank" rel="noopener">
                      {t(CLINIC.address)}
                    </a>
                  </span>
                </div>
              </div>

              <div className={`${css.fact} rv`} style={{ "--d": "60ms" } as React.CSSProperties}>
                <i>
                  <Phone size={17} />
                </i>
                <div>
                  <b>{t({ ro: "Telefon", ru: "Телефон" })}</b>
                  <span>
                    <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
                    {" · "}
                    <a href={CLINIC.whatsapp} target="_blank" rel="noopener">
                      {CLINIC.mobile}
                    </a>
                  </span>
                </div>
              </div>

              <div className={`${css.fact} rv`} style={{ "--d": "120ms" } as React.CSSProperties}>
                <i>
                  <Mail size={17} />
                </i>
                <div>
                  <b>Email</b>
                  <span>
                    <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                  </span>
                </div>
              </div>

              <div className={`${css.fact} rv`} style={{ "--d": "180ms" } as React.CSSProperties}>
                <i>
                  <Clock size={17} />
                </i>
                <div style={{ width: "100%" }}>
                  <b>{t({ ro: "Program", ru: "График" })}</b>
                  {HOURS.map((h, i) => (
                    <div className={css.hours} key={i}>
                      <span>{t(h.day)}</span>
                      <span>{t(h.time)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${css.map} rvimg`}>
              <iframe
                src="https://www.google.com/maps?q=strada+Alexandru+cel+Bun+87,+Chisinau&z=15&output=embed"
                title={t({ ro: "Harta — ALVEA", ru: "Карта — ALVEA" })}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={`${css.card} rv`} style={{ "--d": "100ms" } as React.CSSProperties}>
            {state === "done" ? (
              <div className={css.done}>
                <span className={css.tick}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 13 4.5 4.5L19 7" />
                  </svg>
                </span>
                <h3>{t(BOOKING.okTitle)}</h3>
                <p>{t(BOOKING.okText)}</p>
                <a href={CLINIC.phoneHref} className="btn btn-ghost" style={{ marginTop: 14 }}>
                  <Phone size={16} />
                  {CLINIC.phone}
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className={css.cardTop}>
                  <i />
                  {t({ ro: "Răspundem în ~10 minute", ru: "Отвечаем примерно за 10 минут" })}
                </div>

                <div className={css.field}>
                  <input
                    id="bk-name"
                    value={name}
                    placeholder=" "
                    autoComplete="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="bk-name">{t(BOOKING.name)}</label>
                  {err.name && <span className={css.err}>{err.name}</span>}
                </div>

                <div className={css.field}>
                  <input
                    id="bk-phone"
                    value={phone}
                    placeholder=" "
                    inputMode="tel"
                    autoComplete="tel"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label htmlFor="bk-phone">{t(BOOKING.phone)}</label>
                  {err.phone && <span className={css.err}>{err.phone}</span>}
                </div>

                <div className={css.row2} style={{ marginTop: 22 }}>
                  <div>
                    <span className={css.selLabel}>{t(BOOKING.service)}</span>
                    <div className={css.field} style={{ paddingTop: 0 }}>
                      <select value={service} onChange={(e) => setService(e.target.value)}>
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {t(s.title)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <span className={css.selLabel}>{t(BOOKING.when)}</span>
                    <div className={css.field} style={{ paddingTop: 0 }}>
                      <select value={when} onChange={(e) => setWhen(e.target.value)}>
                        {BOOKING.whenOpts.map((o, i) => (
                          <option key={i} value={i}>
                            {t(o)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" className={`btn btn-accent ${css.submit}`} disabled={state === "sending"}>
                  {state === "sending" ? t(BOOKING.sending) : t(BOOKING.submit)}
                  <span className="ic">
                    <Arrow size={12} />
                  </span>
                </button>
                <p className={css.privacy}>{t(BOOKING.privacy)}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

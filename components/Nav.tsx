"use client";

import { useEffect, useState } from "react";
import { CLINIC, NAV, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Clock, Phone, Pin, Tooth } from "./Icons";
import css from "./Nav.module.css";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Hide on the way down, come back on the way up — the bar stops competing
  // with the page while someone is reading.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 30);
      setHidden(y > 420 && y > last && !open);
      last = y;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={css.shell} data-stuck={stuck} data-hidden={hidden}>
        <div className={css.strip}>
          <div className={`wrap ${css.stripIn}`}>
            <div className={css.stripL}>
              <span className={css.live}>
                <i />
                {t({ ro: "Deschis azi până la 20:00", ru: "Сегодня открыто до 20:00" })}
              </span>
              <span className={css.stripItem} style={{ opacity: 0.75 }}>
                <Clock size={14} />
                {t({ ro: "Sâmbătă 9–16", ru: "Суббота 9–16" })}
              </span>
            </div>
            <div className={css.stripR}>
              <a href={CLINIC.maps} target="_blank" rel="noopener" className={css.stripItem}>
                <Pin size={14} />
                {t(CLINIC.address)}
              </a>
              <span style={{ opacity: 0.75 }}>
                {t({ ro: "Urgențe 24/7:", ru: "Неотложно 24/7:" })} {CLINIC.mobile}
              </span>
            </div>
          </div>
        </div>

        <div className={css.bar}>
          <div className={`wrap ${css.barIn}`}>
            <a href="#top" className={css.brand} aria-label={CLINIC.name}>
              <span className={css.mark}>
                <Tooth size={21} />
              </span>
              <span>
                <span className={css.word}>{CLINIC.name}</span>
                <span className={css.sub}>{t({ ro: "clinică dentară", ru: "стоматология" })}</span>
              </span>
            </a>

            <nav className={css.links}>
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={css.link}>
                  {t(n.label)}
                </a>
              ))}
            </nav>

            <div className={css.right}>
              <a href={CLINIC.phoneHref} className={css.tel}>
                <Phone size={16} />
                {CLINIC.phone}
              </a>

              <div className={css.lang} role="group" aria-label="limba">
                {(["ro", "ru"] as const).map((l) => (
                  <button key={l} data-on={lang === l} onClick={() => setLang(l)}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>

              <a href="#contact" className={`btn btn-accent ${css.cta}`}>
                {t(UI.book)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </a>

              <button
                className={css.burger}
                data-open={open}
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? t(UI.close) : t(UI.menu)}
                aria-expanded={open}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={css.sheet} data-open={open}>
        {NAV.map((n, i) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={css.sheetLink}
            style={{ "--d": `${120 + i * 55}ms` } as React.CSSProperties}
            onClick={() => setOpen(false)}
          >
            <span className={css.sheetNum}>0{i + 1}</span>
            {t(n.label)}
          </a>
        ))}
        <div className={css.sheetFoot}>
          <a href={CLINIC.phoneHref} className="btn btn-ghost">
            <Phone size={16} />
            {CLINIC.phone}
          </a>
          <a href="#contact" className="btn btn-accent" onClick={() => setOpen(false)}>
            {t(UI.book)}
          </a>
        </div>
      </div>
    </>
  );
}

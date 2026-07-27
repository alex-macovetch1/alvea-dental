"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { CLINIC, NAV, SERVICES, TEAM, UI } from "@/lib/content";
import type { T } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Clock, Phone, Pin, Tooth } from "./Icons";
import css from "./Nav.module.css";

/** Kept apart from the bar so scroll state never rebuilds the thumbnails. */
const MegaPanels = memo(function MegaPanels({
  t,
  mega,
  onEnter,
  onLeave,
}: {
  t: (v: T) => string;
  mega: string | null;
  onEnter: (id: string | null) => void;
  onLeave: () => void;
}) {
  return (
    <>
      <div
        className={css.panel}
        data-open={mega === "services"}
        onMouseEnter={() => onEnter("services")}
        onMouseLeave={onLeave}
      >
        <div className={`wrap ${css.panelIn}`}>
          <div className={css.panelGrid}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/servicii/${s.slug}`} className={css.pItem}>
                <span className={css.pThumb}>
                  <Image src={s.img} alt="" width={160} height={160} sizes="80px" />
                </span>
                <span>
                  <span className={css.pName}>{t(s.title)}</span>
                  <span className={css.pMeta}>
                    {t(s.price)} · {t(s.time)}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className={css.panelFoot}>
            <Link href="/servicii" className={css.panelAll}>
              {t({ ro: "Toate serviciile", ru: "Все услуги" })} <Arrow size={12} />
            </Link>
            <Link href="/preturi" className={css.panelAll}>
              {t({ ro: "Lista de prețuri", ru: "Прайс-лист" })} <Arrow size={12} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={css.panel}
        data-open={mega === "team"}
        onMouseEnter={() => onEnter("team")}
        onMouseLeave={onLeave}
      >
        <div className={`wrap ${css.panelIn}`}>
          <div className={css.teamGrid}>
            {TEAM.map((m) => (
              <Link key={m.slug} href={`/echipa/${m.slug}`} className={css.tItem}>
                <span className={css.tImg}>
                  <Image src={m.img} alt="" width={220} height={280} sizes="120px" />
                </span>
                <span className={css.pName}>{m.name}</span>
                <span className={css.pMeta}>{t(m.role)}</span>
              </Link>
            ))}
          </div>
          <div className={css.panelFoot}>
            <Link href="/echipa" className={css.panelAll}>
              {t({ ro: "Toată echipa", ru: "Вся команда" })} <Arrow size={12} />
            </Link>
            <Link href="/despre" className={css.panelAll}>
              {t({ ro: "Despre clinică", ru: "О клинике" })} <Arrow size={12} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const path = usePathname();
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  /** a small delay on leave keeps the panel from closing while the pointer
   *  crosses the gap between the link and the panel itself */
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // Hide on the way down, come back on the way up — the bar stops competing
  // with the page while someone is reading.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 30);
      setHidden(y > 420 && y > last && !openRef.current);
      if (y > last + 8) setMega(null);
      last = y;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Any navigation closes whatever was open.
  useEffect(() => {
    setOpen(false);
    setMega(null);
  }, [path]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMega(null);
      setOpen(false);
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const enter = useCallback((id: string | null) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setMega(id);
  }, []);
  const leave = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setMega(null), 170);
  }, []);

  const isOn = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <>
      <header
        className={css.shell}
        data-stuck={stuck}
        data-hidden={hidden}
        data-mega={!!mega}
      >
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
            <Link href="/" className={css.brand} aria-label={CLINIC.name}>
              <span className={css.mark}>
                <Tooth size={21} />
              </span>
              <span>
                <span className={css.word}>{CLINIC.name}</span>
                <span className={css.sub}>{t({ ro: "clinică dentară", ru: "стоматология" })}</span>
              </span>
            </Link>

            <nav className={css.links} onMouseLeave={leave}>
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={css.link}
                  data-on={isOn(n.href)}
                  onMouseEnter={() => enter(n.mega ?? null)}
                  onFocus={() => enter(n.mega ?? null)}
                >
                  {t(n.label)}
                  {n.mega && <i className={css.caret} data-open={mega === n.mega} />}
                </Link>
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

              <Link href="/programare" className={`btn btn-accent ${css.cta}`}>
                {t(UI.book)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </Link>

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

        {/* ---- the two drop panels, desktop only ---- */}
        <MegaPanels t={t} mega={mega} onEnter={enter} onLeave={leave} />
      </header>

      <div className={css.sheet} data-open={open}>
        {NAV.map((n, i) => (
          <Link
            key={n.href}
            href={n.href}
            className={css.sheetLink}
            data-on={isOn(n.href)}
            style={{ "--d": `${120 + i * 46}ms` } as React.CSSProperties}
            onClick={() => setOpen(false)}
          >
            <span className={css.sheetNum}>0{i + 1}</span>
            {t(n.label)}
          </Link>
        ))}
        <div className={css.sheetFoot}>
          <a href={CLINIC.phoneHref} className="btn btn-ghost">
            <Phone size={16} />
            {CLINIC.phone}
          </a>
          <Link href="/programare" className="btn btn-accent" onClick={() => setOpen(false)}>
            {t(UI.book)}
          </Link>
        </div>
      </div>
    </>
  );
}

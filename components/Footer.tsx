"use client";

import { CLINIC, FOOTER, HOURS, NAV, SERVICES } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow } from "./Icons";
import css from "./Footer.module.css";

export default function Footer() {
  const { t } = useLang();
  const year = 2026;

  return (
    <footer className={css.foot} id="subsol">
      <div className="wrap">
        <div className={css.top}>
          <h2 className={`display ${css.claim} rv`}>
            {t(FOOTER.claim)} <span className={`serif ${css.claimEm}`}>{t(FOOTER.claimEm)}</span>
          </h2>
          <div className={`${css.side} rv`} style={{ "--d": "90ms" } as React.CSSProperties}>
            <p>{t(FOOTER.cta)}</p>
            <a href="#contact" className="btn">
              {t({ ro: "Programează-te", ru: "Записаться" })}
              <span className="ic">
                <Arrow size={12} />
              </span>
            </a>
          </div>
        </div>

        <div className={css.cols}>
          <div className={css.col}>
            <h4>{t({ ro: "Clinica", ru: "Клиника" })}</h4>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {t(n.label)}
              </a>
            ))}
          </div>

          <div className={css.col}>
            <h4>{t({ ro: "Servicii", ru: "Услуги" })}</h4>
            {SERVICES.slice(0, 5).map((s) => (
              <a key={s.slug} href="#servicii">
                {t(s.title)}
              </a>
            ))}
          </div>

          <div className={css.col}>
            <h4>{t({ ro: "Program", ru: "График" })}</h4>
            {HOURS.map((h, i) => (
              <span key={i}>
                {t(h.day)} — {t(h.time)}
              </span>
            ))}
          </div>

          <div className={css.col}>
            <h4>{t({ ro: "Contact", ru: "Контакты" })}</h4>
            <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
            <a href={CLINIC.whatsapp} target="_blank" rel="noopener">
              {CLINIC.mobile}
            </a>
            <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
            <a href={CLINIC.maps} target="_blank" rel="noopener">
              {t(CLINIC.address)}
            </a>
            <div className={css.social}>
              <a href={CLINIC.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={CLINIC.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3 0-1.3-.13-2.45-.13-2.42 0-4.08 1.48-4.08 4.2v2.34H7.5V13h2.67v8h3.33Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={css.mark} aria-hidden="true">
        <span>{CLINIC.name}</span>
      </div>

      <div className="wrap">
        <div className={css.bar}>
          <span>
            © {year} {CLINIC.legal}. {t(FOOTER.rights)}
          </span>
          <span className={css.note}>{t(FOOTER.note)}</span>
          <span>
            {t(FOOTER.by)}{" "}
            <a href="https://alex-macovetch1.github.io/portofoliu/" target="_blank" rel="noopener">
              Alexandru Macovetchi
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

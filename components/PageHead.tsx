"use client";

import Link from "next/link";
import type { T } from "@/lib/content";
import { UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import css from "./PageHead.module.css";

export type Crumb = { href?: string; label: T };

/**
 * The opening of every inner page: breadcrumb, kicker, a title split into a
 * bold half and an italic half, and an optional lede. Keeping it in one place
 * is what makes twelve pages feel like one site.
 */
export default function PageHead({
  crumbs,
  kicker,
  title,
  titleEm,
  lead,
  aside,
  tone = "paper",
}: {
  crumbs?: Crumb[];
  kicker: T;
  title: T;
  titleEm?: T;
  lead?: T;
  aside?: React.ReactNode;
  tone?: "paper" | "soft" | "sand";
}) {
  const { t } = useLang();

  return (
    <header className={css.head} data-tone={tone}>
      <div className="wrap">
        <nav className={css.crumbs} aria-label="breadcrumb">
          <Link href="/">{t(UI.home)}</Link>
          {crumbs?.map((c, i) => (
            <span key={i}>
              <i className={css.sep} aria-hidden="true">
                /
              </i>
              {c.href ? <Link href={c.href}>{t(c.label)}</Link> : <b>{t(c.label)}</b>}
            </span>
          ))}
        </nav>

        <div className={css.grid}>
          <div>
            <span className="eyebrow rv">{t(kicker)}</span>
            <h1 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t(title)}
              {titleEm && (
                <>
                  {" "}
                  <span className="serif">{t(titleEm)}</span>
                </>
              )}
            </h1>
          </div>
          {(lead || aside) && (
            <div className={`${css.side} rv`} style={{ "--d": "150ms" } as React.CSSProperties}>
              {lead && <p className={css.lead}>{t(lead)}</p>}
              {aside}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SERVICES, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SERVICE_PAGES } from "@/lib/services-content";
import { PRICES_PAGE } from "@/lib/site-content";
import CtaBand from "../CtaBand";
import { ArrowRight, Check } from "../Icons";
import PageHead from "../PageHead";
import css from "./PricesView.module.css";

export default function PricesView() {
  const { lang, t } = useLang();
  const [q, setQ] = useState("");

  /** One group per service, built from the same numbers the service pages
   *  show — a price can never drift between the two screens. */
  const groups = useMemo(
    () =>
      SERVICES.map((s) => ({
        slug: s.slug,
        title: s.title,
        rows: SERVICE_PAGES[s.slug].prices,
      })),
    []
  );

  const needle = q.trim().toLowerCase();
  const filtered = needle
    ? groups
        .map((g) => ({
          ...g,
          rows: g.rows.filter(
            (r) =>
              r.name[lang].toLowerCase().includes(needle) ||
              g.title[lang].toLowerCase().includes(needle)
          ),
        }))
        .filter((g) => g.rows.length)
    : groups;

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Prețuri", ru: "Цены" } }]}
        kicker={PRICES_PAGE.kicker}
        title={PRICES_PAGE.title}
        titleEm={PRICES_PAGE.titleEm}
        lead={PRICES_PAGE.lead}
        aside={
          <div className={css.searchWrap}>
            <input
              className={css.search}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t(PRICES_PAGE.search)}
              aria-label={t(PRICES_PAGE.search)}
            />
            {q && (
              <button className={css.clear} onClick={() => setQ("")} aria-label={t(UI.close)}>
                ×
              </button>
            )}
          </div>
        }
      />

      <section className={css.list}>
        <div className="wrap">
          {filtered.length === 0 && <p className={css.empty}>{t(PRICES_PAGE.empty)}</p>}

          {filtered.map((g) => (
            <div className={`${css.group} rv`} key={g.slug}>
              <div className={css.groupHead}>
                <h2>{t(g.title)}</h2>
                <Link href={`/servicii/${g.slug}`} className={css.groupLink}>
                  {t({ ro: "Detalii", ru: "Подробнее" })}
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className={css.rows}>
                {g.rows.map((r, i) => (
                  <div className={css.row} key={i}>
                    <span>
                      {t(r.name)}
                      {r.note && <i>{t(r.note)}</i>}
                    </span>
                    <b>{t(r.price)}</b>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={css.pay}>
        <div className={`wrap ${css.payIn}`}>
          <h2 className={`display ${css.payTitle} rv`}>{t(PRICES_PAGE.payTitle)}</h2>
          <ul className={css.payList}>
            {PRICES_PAGE.pay.map((p, i) => (
              <li className="rv" key={i} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <i>
                  <Check size={12} />
                </i>
                {t(p)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Vrei suma exactă", ru: "Хотите точную сумму" }}
        titleEm={{ ro: "pentru cazul tău?", ru: "для вашего случая?" }}
        text={{
          ro: "Consultația gratuită se termină cu un plan scris, în care suma finală e deja calculată. Nu se schimbă pe parcurs.",
          ru: "Бесплатная консультация заканчивается письменным планом, где итоговая сумма уже посчитана. По ходу она не меняется.",
        }}
      />
    </>
  );
}

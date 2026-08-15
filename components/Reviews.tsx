"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { REVIEWS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Fake } from "./DemoBar";
import { Star } from "./Icons";
import css from "./Reviews.module.css";

const HOLD = 7000;

export default function Reviews() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setTimeout(() => setI((v) => (v + 1) % REVIEWS.length), HOLD);
    return () => clearTimeout(id);
  }, [i, auto]);

  const go = (d: number) => {
    setAuto(false);
    setI((v) => (v + d + REVIEWS.length) % REVIEWS.length);
  };

  const r = REVIEWS[i];

  return (
    <section className={`sec ${css.sec}`} id="recenzii">
      <div className="wrap">
        <div className={css.top}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Ce spun pacienții", ru: "Что говорят пациенты" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "487 de recenzii.", ru: "487 отзывов." })}{" "}
              <span className="serif">{t({ ro: "Niciuna cumpărată.", ru: "Ни одного купленного." })}</span>
            </h2>
            <Fake block />
          </div>
          <div className={`${css.google} rv`} style={{ "--d": "140ms" } as React.CSSProperties}>
            <div>
              <span className={css.stars}>
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} size={13} />
                ))}
              </span>
              <b>4.9 / 5</b>
              <span className={css.gcap}>
                {t({ ro: "Google Maps · Chișinău", ru: "Google Maps · Кишинёв" })}
              </span>
              <Fake block />
            </div>
          </div>
        </div>

        <div className={css.stage}>
          <div className={css.quote}>
            <div key={`${i}-${t(r.meta)}`} className={css.anim}>
              <span className={css.mark}>“</span>
              <p className={css.text}>{t(r.text)}</p>
              <div className={css.who}>
                <b>{r.name}</b>
                <span className={css.dot} />
                <span>{t(r.meta)}</span>
              </div>
              <Fake block />
            </div>
          </div>

          <div className={css.shot}>
            <Image
              key={r.img}
              className={css.anim}
              src={r.img}
              alt={r.name}
              width={800}
              height={800}
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </div>
        </div>

        <div className={css.nav}>
          <button className={css.arrow} onClick={() => go(-1)} aria-label={t({ ro: "Anterior", ru: "Назад" })}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button className={css.arrow} onClick={() => go(1)} aria-label={t({ ro: "Următor", ru: "Вперёд" })}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>
          <span className={css.count}>
            {String(i + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
          </span>

          <div className={css.bars}>
            {REVIEWS.map((_, n) => (
              <button
                key={n}
                className={css.bar}
                data-on={auto && n === i}
                onClick={() => {
                  setAuto(false);
                  setI(n);
                }}
                aria-label={`${n + 1}`}
              >
                <i style={n < i ? { inset: 0 } : undefined} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

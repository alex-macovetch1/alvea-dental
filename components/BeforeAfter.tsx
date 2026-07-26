"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { BEFORE_AFTER as BA } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import css from "./BeforeAfter.module.css";

export default function BeforeAfter() {
  const { t } = useLang();
  const box = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);
  const [touched, setTouched] = useState(false);
  const dragging = useRef(false);

  const setFrom = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setX(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  const down = (e: React.PointerEvent) => {
    dragging.current = true;
    setTouched(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFrom(e.clientX);
  };
  const move = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFrom(e.clientX);
  };
  const up = () => {
    dragging.current = false;
  };

  // Arrow keys work too — a slider nobody can reach with a keyboard is a toy.
  const key = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setX((v) => Math.max(0, v - 4));
    if (e.key === "ArrowRight") setX((v) => Math.min(100, v + 4));
  };

  return (
    <section className="sec" id="rezultate">
      <div className="wrap">
        <div className={css.grid}>
          <div>
            <span className="eyebrow rv">{t(BA.eyebrow)}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t(BA.title)} <span className="serif">{t(BA.titleEm)}</span>
            </h2>
            <p className="lede rv" style={{ "--d": "120ms" } as React.CSSProperties}>
              {t(BA.text)}
            </p>
            <div className={`${css.figures} rv`} style={{ "--d": "180ms" } as React.CSSProperties}>
              <div className={css.fig}>
                <b>60 min</b>
                <span>{t({ ro: "o singură ședință", ru: "один приём" })}</span>
              </div>
              <div className={css.fig}>
                <b>2 400 lei</b>
                <span>{t({ ro: "preț final, cu tot", ru: "итоговая цена, всё включено" })}</span>
              </div>
              <div className={css.fig}>
                <b>12–18</b>
                <span>{t({ ro: "luni ține rezultatul", ru: "месяцев держится результат" })}</span>
              </div>
            </div>
          </div>

          <div
            className={`${css.box} rv`}
            ref={box}
            data-touched={touched}
            style={{ "--x": `${x}%`, "--d": "100ms" } as React.CSSProperties}
            onPointerDown={down}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
            role="slider"
            tabIndex={0}
            aria-label={t({ ro: "Compară înainte și după", ru: "Сравнить до и после" })}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(x)}
            onKeyDown={key}
          >
            <div className={css.layer}>
              <Image
                src="/img/smile-hero.jpg"
                alt={t({ ro: "După albire", ru: "После отбеливания" })}
                width={1400}
                height={1050}
                sizes="(max-width: 900px) 100vw, 55vw"
              />
            </div>
            <div className={`${css.layer} ${css.before}`}>
              <Image
                src="/img/smile-hero.jpg"
                alt={t({ ro: "Înainte de albire", ru: "До отбеливания" })}
                width={1400}
                height={1050}
                sizes="(max-width: 900px) 100vw, 55vw"
                aria-hidden="true"
              />
            </div>

            <span className={`${css.pill} ${css.pillL}`}>{t(BA.before)}</span>
            <span className={`${css.pill} ${css.pillR}`}>{t(BA.after)}</span>

            <div className={css.handle}>
              <span className={css.knob}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 6 8 12l6 6" />
                </svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10 6 6 6-6 6" />
                </svg>
              </span>
            </div>

            <span className={css.hint}>← {t(BA.drag)} →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { STEPS, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Phone } from "./Icons";
import { CLINIC } from "@/lib/content";
import css from "./Steps.module.css";

export default function Steps() {
  const { t } = useLang();
  const rail = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  // The rail fills as the section crosses the viewport, so the five steps read
  // as one continuous path rather than five disconnected boxes.
  useEffect(() => {
    const el = rail.current?.parentElement;
    if (!el) return;
    let raf = 0;
    const frame = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height + innerHeight * 0.5;
      const done = innerHeight * 0.85 - r.top;
      setP(Math.max(0, Math.min(100, (done / total) * 100)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    addEventListener("scroll", onScroll, { passive: true });
    frame();
    return () => {
      removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={`sec ${css.sec}`} id="cum">
      <div className="wrap">
        <div className={css.head}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Cum decurge", ru: "Как проходит" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "De la telefon", ru: "От звонка" })}{" "}
              <span className="serif">{t({ ro: "până la control", ru: "до контроля" })}</span>
            </h2>
          </div>
          <p className={`lede ${css.headText} rv`} style={{ "--d": "140ms" } as React.CSSProperties}>
            {t({
              ro: "Cinci pași. Îi știi pe toți dinainte, ca să nu existe momentul acela în care nu înțelegi ce se întâmplă cu tine.",
              ru: "Пять шагов. Вы знаете их все заранее — чтобы не было момента, когда непонятно, что с вами происходит.",
            })}
          </p>
        </div>

        <div className={css.rail} ref={rail}>
          <span className={css.fill} style={{ "--p": `${p}%` } as React.CSSProperties} />
        </div>

        <div className={css.grid}>
          {STEPS.map((s, i) => (
            <div
              className={`${css.step} rv`}
              key={i}
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className={css.dot} />
              <span className={css.no}>0{i + 1}</span>
              <h3>{t(s.title)}</h3>
              <p>{t(s.text)}</p>
            </div>
          ))}
        </div>

        <div className={css.after}>
          <div className={`${css.clip} rvimg`}>
            <video src="/video/care.mp4" poster="/img/care-poster.jpg" autoPlay muted loop playsInline preload="none" />
          </div>
          <div className={`${css.afterText} rv`}>
            <h3>
              {t({
                ro: "Prima ședință durează 40 de minute și nu costă nimic.",
                ru: "Первый приём длится 40 минут и ничего не стоит.",
              })}
            </h3>
            <p>
              {t({
                ro: "Chiar dacă pleci și te tratezi în altă parte, rămâi cu scanarea, cu fotografiile și cu planul scris. Sunt ale tale.",
                ru: "Даже если вы уйдёте лечиться в другое место, скан, фотографии и письменный план останутся у вас. Они ваши.",
              })}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#contact" className="btn">
                {t(UI.book)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </a>
              <a href={CLINIC.phoneHref} className="btn btn-ghost">
                <Phone size={16} />
                {CLINIC.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

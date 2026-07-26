"use client";

import Image from "next/image";
import { useState } from "react";
import { SERVICES, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Clock } from "./Icons";
import css from "./Services.module.css";

export default function Services() {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  return (
    <section className="sec" id="servicii">
      <div className="wrap">
        <div className={css.head}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Ce facem", ru: "Что мы делаем" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "Opt lucruri, făcute", ru: "Восемь вещей, сделанных" })}{" "}
              <span className="serif">{t({ ro: "cum trebuie", ru: "как надо" })}</span>
            </h2>
          </div>
          <p className="lede rv" style={{ "--d": "140ms" } as React.CSSProperties}>
            {t({
              ro: "Nu facem tot ce se poate face în stomatologie. Facem lucrurile pe care le facem des, deci le facem bine. Restul te trimitem unde trebuie.",
              ru: "Мы не делаем всё, что бывает в стоматологии. Мы делаем то, что делаем часто — а значит, хорошо. С остальным направим туда, где нужно.",
            })}
          </p>
        </div>

        <div className={css.split}>
          <div className={css.list}>
            {SERVICES.map((s, i) => (
              <a
                href="#contact"
                className={`${css.row} rv`}
                key={s.slug}
                data-on={active === i}
                style={{ "--d": `${i * 50}ms` } as React.CSSProperties}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className={css.idx}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={css.name}>{t(s.title)}</h3>
                  <p className={css.text}>{t(s.text)}</p>
                </div>
                <div className={css.meta}>
                  <span className={css.price}>{t(s.price)}</span>
                  <span className={css.time}>
                    <Clock size={12} />
                    {t(s.time)}
                  </span>
                </div>
                <span className={css.thumb}>
                  <Image src={s.img} alt="" width={640} height={400} sizes="100vw" />
                </span>
              </a>
            ))}
          </div>

          {/* All eight are stacked and only the opacity changes, so switching
              never flashes an empty box while a photo loads. */}
          <div className={css.panel} aria-hidden="true">
            {SERVICES.map((s, i) => (
              <div className={css.frame} key={s.slug} data-on={active === i}>
                <Image
                  src={s.img}
                  alt=""
                  width={900}
                  height={1125}
                  sizes="(max-width: 1000px) 0px, 40vw"
                  priority={i === 0}
                />
              </div>
            ))}
            <span className={css.panelShade} />
            <div className={css.panelCard}>
              <span className={css.panelName}>{t(SERVICES[active].title)}</span>
              <span className={css.panelPrice}>{t(SERVICES[active].price)}</span>
            </div>
          </div>
        </div>

        <div className={css.foot}>
          <a href="#contact" className="btn">
            {t(UI.book)}
            <span className="ic">
              <Arrow size={12} />
            </span>
          </a>
          <p className={css.footNote}>
            {t({
              ro: "Nu ești sigur de ce ai nevoie? Vino la consultația gratuită — îți spunem și dacă răspunsul e „nu ai nevoie de nimic”.",
              ru: "Не уверены, что вам нужно? Приходите на бесплатную консультацию — скажем честно, даже если ответ «вам ничего не нужно».",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

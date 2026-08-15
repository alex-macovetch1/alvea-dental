"use client";

import Image from "next/image";
import { ABOUT, PROMISES, STATS } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import Counter from "./Counter";
import { Fake } from "./DemoBar";
import { Tooth } from "./Icons";
import css from "./About.module.css";

export default function About() {
  const { t } = useLang();

  return (
    <section className={`sec ${css.sec}`} id="despre">
      <div className="wrap">
        <span className="eyebrow rv">{t(ABOUT.eyebrow)}</span>
        <p className={`${css.lead} rv`} style={{ "--d": "80ms" } as React.CSSProperties}>
          {t(ABOUT.lead)} <span className={css.leadEm}>{t(ABOUT.leadEm)}</span>
        </p>

        <div className={css.grid}>
          <div className={`${css.shot} rvimg`}>
            <Image
              src="/img/clinic-wide.jpg"
              alt={t({ ro: "Cabinet ALVEA", ru: "Кабинет ALVEA" })}
              width={1200}
              height={1500}
              sizes="(max-width: 900px) 100vw, 38vw"
            />
            <span className={css.tag}>
              <i>
                <Tooth size={15} />
              </i>
              {t({
                ro: "5 cabinete, scaner intraoral, tomograf 3D",
                ru: "5 кабинетов, интраоральный сканер, 3D-томограф",
              })}
            </span>
          </div>

          <div className={css.body}>
            <p className="lede rv">{t(ABOUT.body)}</p>

            <div className={css.promises}>
              {PROMISES.map((p, i) => (
                <div
                  className={`${css.promise} rv`}
                  key={i}
                  style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
                >
                  <span className={css.num}>0{i + 1}</span>
                  <div>
                    <h3>{t(p.title)}</h3>
                    <p>{t(p.text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={css.stats}>
          {STATS.map((s, i) => (
            <div
              className={`${css.stat} rv`}
              key={i}
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className={css.big}>
                <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </span>
              <span className={css.cap}>{t(s.label)}</span>
              <Fake block />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

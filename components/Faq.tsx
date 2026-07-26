"use client";

import { useState } from "react";
import { CLINIC, FAQ } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Plus, Wa } from "./Icons";
import css from "./Faq.module.css";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="sec" id="intrebari">
      <div className="wrap">
        <div className={css.grid}>
          <div className={css.side}>
            <span className="eyebrow rv">{t({ ro: "Întrebări", ru: "Вопросы" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "Ce ne întreabă", ru: "О чём спрашивают" })}{" "}
              <span className="serif">{t({ ro: "toată lumea", ru: "почти все" })}</span>
            </h2>
            <div className={`${css.ask} rv`} style={{ "--d": "140ms" } as React.CSSProperties}>
              <p>
                {t({
                  ro: "Nu e aici întrebarea ta? Scrie-ne pe WhatsApp — răspunde un om, nu un robot.",
                  ru: "Вашего вопроса тут нет? Напишите в WhatsApp — отвечает человек, а не бот.",
                })}
              </p>
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener" className="btn btn-accent">
                <Wa size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            {FAQ.map((f, i) => {
              const on = open === i;
              return (
                <div
                  className={`${css.item} rv`}
                  key={i}
                  data-open={on}
                  style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                >
                  <button
                    className={css.q}
                    onClick={() => setOpen(on ? null : i)}
                    aria-expanded={on}
                  >
                    {t(f.q)}
                    <span className={css.sign}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <div className={css.wrapA}>
                    <div className={css.inner}>
                      <p className={css.a}>{t(f.a)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

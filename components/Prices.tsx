"use client";

import Link from "next/link";
import { PRICES, PRICE_NOTE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Tooth } from "./Icons";
import css from "./Prices.module.css";

export default function Prices() {
  const { t } = useLang();

  return (
    <section className="sec" id="preturi">
      <div className="wrap">
        <div className={css.head}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Prețuri", ru: "Цены" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "Scrise aici,", ru: "Написаны здесь," })}{" "}
              <span className="serif">{t({ ro: "nu la telefon", ru: "а не по телефону" })}</span>
            </h2>
          </div>
          <p className="lede rv" style={{ "--d": "130ms" } as React.CSSProperties}>
            {t({
              ro: "Am pus lista pe site pentru că e singurul lucru pe care oricine îl caută primul și aproape nimeni nu-l publică.",
              ru: "Мы выложили список на сайт, потому что это первое, что все ищут — и почти никто не публикует.",
            })}
          </p>
        </div>

        <div className={css.groups}>
          {PRICES.map((g, gi) => (
            <div
              className={`${css.group} rv`}
              key={gi}
              style={{ "--d": `${gi * 100}ms` } as React.CSSProperties}
            >
              <h3>{t(g.group)}</h3>
              {g.items.map((it, ii) => {
                const price = t(it.price);
                const free = price.startsWith("0");
                return (
                  <div className={css.item} key={ii}>
                    <span>{t(it.name)}</span>
                    <span className={css.rule} />
                    <span className={`${css.val} ${free ? css.free : ""}`}>{price}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className={`${css.note} rv`}>
          <span className={css.noteIc}>
            <Tooth size={20} />
          </span>
          <p className={css.noteText}>{t(PRICE_NOTE)}</p>
          <Link href="/preturi" className="btn btn-ghost" style={{ marginLeft: "auto" }}>
            {t({ ro: "Lista completă de prețuri", ru: "Полный прайс-лист" })}
          </Link>
        </div>
      </div>
    </section>
  );
}

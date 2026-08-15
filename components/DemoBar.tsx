"use client";

import { useLang } from "@/lib/i18n";
import css from "./DemoBar.module.css";

/** ALVEA is a portfolio piece for a clinic that does not exist. The footer
 *  disclaimer sits twelve screens down, where nobody reads it, so the notice
 *  lives at the very top of every page instead — fixed, unclosable, both
 *  languages. Think "staging environment" strip, not advertising banner. */
export default function DemoBar() {
  const { t } = useLang();

  return (
    <div className={css.bar} role="note">
      <p className={css.text}>
        <b>{t({ ro: "CONCEPT / DEMO NARON WEB", ru: "КОНЦЕПТ / ДЕМО NARON WEB" })}</b>
        <span className={css.dash}>—</span>
        {t({
          ro: "toate datele, cifrele, recenziile și informațiile din această interfață sunt fictive și au scop demonstrativ.",
          ru: "все данные, цифры, отзывы и сведения в этом интерфейсе вымышлены и носят демонстрационный характер.",
        })}
      </p>
    </div>
  );
}

/** The small tag that sits next to a number nobody should believe. */
export function Fake({ block }: { block?: boolean }) {
  const { t } = useLang();
  return (
    <span className={`${css.fake} ${css.fake}`} data-block={block || undefined}>
      {t({ ro: "date fictive", ru: "вымышленные данные" })}
    </span>
  );
}

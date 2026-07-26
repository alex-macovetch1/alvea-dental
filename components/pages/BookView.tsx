"use client";

import { Suspense } from "react";
import { CLINIC } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { BOOK } from "@/lib/site-content";
import Booker from "../Booker";
import { Phone } from "../Icons";
import PageHead from "../PageHead";
import css from "./BookView.module.css";

export default function BookView() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Programare", ru: "Запись" } }]}
        kicker={BOOK.kicker}
        title={BOOK.title}
        titleEm={BOOK.titleEm}
        lead={BOOK.lead}
        aside={
          <div className={css.aside}>
            <a href={CLINIC.phoneHref} className={css.tel}>
              <Phone size={16} />
              {CLINIC.phone}
            </a>
            <p className={css.demo}>{t(BOOK.demoNote)}</p>
          </div>
        }
      />

      <section className={css.body}>
        <div className="wrap">
          <Suspense fallback={<p className={css.wait}>{t(BOOK.loadingSlots)}</p>}>
            <Booker />
          </Suspense>
        </div>
      </section>
    </>
  );
}

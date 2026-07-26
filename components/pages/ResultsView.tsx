"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES, TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { CASES, RESULTS_PAGE } from "@/lib/site-content";
import Compare from "../Compare";
import CtaBand from "../CtaBand";
import { ArrowRight } from "../Icons";
import PageHead from "../PageHead";
import css from "./ResultsView.module.css";

export default function ResultsView() {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("all");

  const used = SERVICES.filter((s) => CASES.some((c) => c.service === s.slug));
  const shown = filter === "all" ? CASES : CASES.filter((c) => c.service === filter);

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Rezultate", ru: "Результаты" } }]}
        kicker={RESULTS_PAGE.kicker}
        title={RESULTS_PAGE.title}
        titleEm={RESULTS_PAGE.titleEm}
        lead={RESULTS_PAGE.lead}
        aside={
          <div className={css.filters}>
            <button data-on={filter === "all"} onClick={() => setFilter("all")}>
              {t({ ro: "Toate", ru: "Все" })}
            </button>
            {used.map((s) => (
              <button key={s.slug} data-on={filter === s.slug} onClick={() => setFilter(s.slug)}>
                {t(s.title)}
              </button>
            ))}
          </div>
        }
      />

      <section className={css.list}>
        <div className="wrap">
          {shown.map((c, i) => {
            const doc = TEAM.find((m) => m.slug === c.doctor);
            const svc = SERVICES.find((s) => s.slug === c.service);
            return (
              <article className={`${css.case} rv`} key={c.slug}>
                <div className={css.left}>
                  <Compare src={c.img} alt={t(c.title)} priority={i === 0} />
                  <p className={css.hint}>
                    {t({ ro: "Trage de linie ca să vezi diferența", ru: "Потяните за линию, чтобы увидеть разницу" })}
                  </p>
                </div>

                <div className={css.right}>
                  {svc && (
                    <Link href={`/servicii/${c.service}`} className={css.svc}>
                      {t(svc.title)}
                    </Link>
                  )}
                  <h2 className={css.title}>{t(c.title)}</h2>

                  <div className={css.block}>
                    <h3>{t(RESULTS_PAGE.problem)}</h3>
                    <p>{t(c.problem)}</p>
                  </div>
                  <div className={css.block}>
                    <h3>{t(RESULTS_PAGE.solution)}</h3>
                    <p>{t(c.solution)}</p>
                  </div>

                  <dl className={css.meta}>
                    <div>
                      <dt>{t(RESULTS_PAGE.duration)}</dt>
                      <dd>{t(c.duration)}</dd>
                    </div>
                    <div>
                      <dt>{t(RESULTS_PAGE.price)}</dt>
                      <dd>{t(c.price)}</dd>
                    </div>
                    {doc && (
                      <div>
                        <dt>{t(RESULTS_PAGE.by)}</dt>
                        <dd>
                          <Link href={`/echipa/${doc.slug}`} className={css.docLink}>
                            {doc.name}
                            <ArrowRight size={13} />
                          </Link>
                        </dd>
                      </div>
                    )}
                  </dl>

                  <Link href={`/programare?serviciu=${c.service}`} className={`btn btn-ghost ${css.book}`}>
                    {t(UI.book)}
                  </Link>
                </div>
              </article>
            );
          })}

          <p className={css.note}>{t(RESULTS_PAGE.note)}</p>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Vrei să vezi", ru: "Хотите увидеть" }}
        titleEm={{ ro: "cum ai arăta tu?", ru: "как это будет у вас?" }}
        text={{
          ro: "La consultația gratuită facem simularea digitală și îți arătăm rezultatul pe ecran, înainte să atingem un dinte.",
          ru: "На бесплатной консультации делаем цифровую симуляцию и показываем результат на экране, до того как коснёмся зуба.",
        }}
      />
    </>
  );
}

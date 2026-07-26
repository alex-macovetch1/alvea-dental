"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRICE_NOTE, SERVICES, TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SERVICE_PAGES } from "@/lib/services-content";
import CtaBand from "../CtaBand";
import { Arrow, ArrowRight, Check, Clock, Plus } from "../Icons";
import PageHead from "../PageHead";
import css from "./ServiceView.module.css";

export default function ServiceView({ slug }: { slug: string }) {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  const s = SERVICES.find((x) => x.slug === slug)!;
  const p = SERVICE_PAGES[slug];
  const docs = TEAM.filter((m) => p.doctors.includes(m.slug));
  const related = SERVICES.filter((x) => p.related.includes(x.slug));

  return (
    <>
      <PageHead
        crumbs={[
          { href: "/servicii", label: { ro: "Servicii", ru: "Услуги" } },
          { label: s.title },
        ]}
        kicker={p.kicker}
        title={s.title}
        lead={p.lead}
        aside={
          <div className={css.headActs}>
            <Link href={`/programare?serviciu=${slug}`} className="btn btn-accent">
              {t(UI.book)}
              <span className="ic">
                <Arrow size={12} />
              </span>
            </Link>
            <Link href="/preturi" className="btn btn-ghost">
              {t({ ro: "Toate prețurile", ru: "Все цены" })}
            </Link>
          </div>
        }
      />

      {/* ---- cover + facts ---- */}
      <section className={css.cover}>
        <div className="wrap">
          <div className={`${css.coverImg} rvimg`}>
            <Image
              src={p.cover}
              alt={t(s.title)}
              width={1800}
              height={900}
              priority
              sizes="100vw"
            />
          </div>
          <div className={css.facts}>
            {p.facts.map((f, i) => (
              <div className={`${css.fact} rv`} key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <span className={css.factLabel}>{t(f.label)}</span>
                <span className={css.factValue}>{t(f.value)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- reading column + sticky card ---- */}
      <section className={css.main}>
        <div className={`wrap ${css.split}`}>
          <article className={css.article}>
            {p.sections.map((sec, i) => (
              <div className={`${css.block} rv`} key={i}>
                <h2 className={css.h2}>{t(sec.title)}</h2>
                {sec.body.map((b, k) => (
                  <p key={k}>{t(b)}</p>
                ))}
                {i === 0 && (
                  <div className={`${css.shot} rvimg`}>
                    <Image src={p.shots[0]} alt="" width={1200} height={760} sizes="(max-width: 1000px) 100vw, 58vw" />
                  </div>
                )}
                {i === 1 && (
                  <div className={`${css.shot} rvimg`}>
                    <Image src={p.shots[1]} alt="" width={1200} height={760} sizes="(max-width: 1000px) 100vw, 58vw" />
                  </div>
                )}
              </div>
            ))}

            <div className={`${css.includes} rv`}>
              <h2 className={css.h2}>{t({ ro: "Ce e inclus în preț", ru: "Что входит в цену" })}</h2>
              <ul className={css.checks}>
                {p.includes.map((inc, i) => (
                  <li key={i}>
                    <i>
                      <Check size={12} />
                    </i>
                    {t(inc)}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className={css.aside}>
            <div className={css.card}>
              <span className={css.cardLabel}>{t({ ro: "Preț", ru: "Цена" })}</span>
              <span className={css.cardPrice}>{t(s.price)}</span>
              <span className={css.cardTime}>
                <Clock size={13} />
                {t(s.time)}
              </span>
              <Link href={`/programare?serviciu=${slug}`} className={`btn btn-accent ${css.cardBtn}`}>
                {t(UI.book)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </Link>
              <p className={css.cardNote}>{t(PRICE_NOTE)}</p>
            </div>

            <div className={css.card}>
              <span className={css.cardLabel}>
                {t({ ro: "Cine face", ru: "Кто выполняет" })}
              </span>
              <div className={css.docList}>
                {docs.map((d) => (
                  <Link href={`/echipa/${d.slug}`} className={css.docRow} key={d.slug}>
                    <span className={css.docImg}>
                      <Image src={d.img} alt="" width={110} height={140} sizes="46px" />
                    </span>
                    <span>
                      <b>{d.name}</b>
                      <i>{t(d.role)}</i>
                    </span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ---- how it goes ---- */}
      <section className={css.flow}>
        <div className="wrap">
          <h2 className={`display ${css.flowTitle} rv`}>
            {t({ ro: "Cum decurge", ru: "Как проходит" })}{" "}
            <span className="serif">{t({ ro: "o ședință", ru: "приём" })}</span>
          </h2>
          <ol className={css.flowList}>
            {p.flow.map((f, i) => (
              <li className={`${css.flowItem} rv`} key={i} style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className={css.flowNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(f.title)}</h3>
                <p>{t(f.text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- prices ---- */}
      <section className={css.prices}>
        <div className={`wrap ${css.pricesIn}`}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Prețuri", ru: "Цены" })}</span>
            <h2 className={`display ${css.priceTitle} rv`}>
              {t({ ro: "Cât costă,", ru: "Сколько стоит," })}{" "}
              <span className="serif">{t({ ro: "pe rând", ru: "по пунктам" })}</span>
            </h2>
          </div>
          <div className={css.priceTable}>
            {p.prices.map((row, i) => (
              <div className={`${css.priceRow} rv`} key={i} style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                <span>
                  {t(row.name)}
                  {row.note && <i className={css.priceNote}>{t(row.note)}</i>}
                </span>
                <b>{t(row.price)}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- faq ---- */}
      <section className={css.faq}>
        <div className={`wrap ${css.faqIn}`}>
          <h2 className={`display ${css.faqTitle} rv`}>
            {t({ ro: "Întrebări", ru: "Вопросы" })}{" "}
            <span className="serif">{t({ ro: "care se repetă", ru: "которые повторяются" })}</span>
          </h2>
          <div className={css.faqList}>
            {p.faq.map((f, i) => (
              <div className={css.q} key={i} data-open={open === i}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span>{t(f.q)}</span>
                  <i>
                    <Plus size={16} />
                  </i>
                </button>
                <div className={css.a}>
                  <p>{t(f.a)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- related ---- */}
      <section className={css.related}>
        <div className="wrap">
          <h2 className={`display ${css.relTitle} rv`}>
            {t({ ro: "Se leagă de", ru: "Связано с" })}
          </h2>
          <div className={css.relGrid}>
            {related.map((r) => (
              <Link href={`/servicii/${r.slug}`} className={`${css.rel} rv`} key={r.slug}>
                <span className={css.relImg}>
                  <Image src={r.img} alt="" width={700} height={500} sizes="(max-width: 800px) 100vw, 30vw" />
                </span>
                <b>{t(r.title)}</b>
                <i>{t(r.price)}</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Prima consultație", ru: "Первая консультация" }}
        titleEm={{ ro: "e gratuită.", ru: "бесплатна." }}
        text={{
          ro: "Ne uităm, scanăm și îți dăm planul scris cu prețul final. Fără obligația de a începe tratamentul la noi.",
          ru: "Посмотрим, отсканируем и дадим письменный план с итоговой ценой. Без обязательства начинать лечение у нас.",
        }}
        href={`/programare?serviciu=${slug}`}
      />
    </>
  );
}

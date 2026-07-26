"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES, TEAM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { SERVICE_PAGES } from "@/lib/services-content";
import CtaBand from "../CtaBand";
import { ArrowRight, Check, Clock } from "../Icons";
import PageHead from "../PageHead";
import css from "./ServicesIndex.module.css";

export default function ServicesIndex() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Servicii", ru: "Услуги" } }]}
        kicker={{ ro: "Ce facem", ru: "Что мы делаем" }}
        title={{ ro: "Opt lucruri, făcute", ru: "Восемь вещей, сделанных" }}
        titleEm={{ ro: "cum trebuie", ru: "как надо" }}
        lead={{
          ro: "Fiecare serviciu are pagina lui, cu prețul, durata, cine îl face și ce se întâmplă efectiv în cabinet. Ce nu facem, spunem sincer și te trimitem unde trebuie.",
          ru: "У каждой услуги своя страница: цена, длительность, кто её делает и что реально происходит в кабинете. Чего мы не делаем — говорим честно и направляем туда, где нужно.",
        }}
      />

      <section className={css.list}>
        <div className="wrap">
          {SERVICES.map((s, i) => {
            const p = SERVICE_PAGES[s.slug];
            const docs = TEAM.filter((m) => p.doctors.includes(m.slug));
            return (
              <Link
                href={`/servicii/${s.slug}`}
                key={s.slug}
                className={`${css.row} rv`}
                style={{ "--d": `${(i % 3) * 70}ms` } as React.CSSProperties}
              >
                <span className={css.num}>{String(i + 1).padStart(2, "0")}</span>

                <span className={css.frame}>
                  <Image
                    src={s.img}
                    alt=""
                    width={900}
                    height={620}
                    sizes="(max-width: 900px) 100vw, 30vw"
                  />
                </span>

                <span className={css.body}>
                  <span className={css.kicker}>{t(p.kicker)}</span>
                  <h2 className={css.name}>{t(s.title)}</h2>
                  <p className={css.text}>{t(s.text)}</p>

                  <span className={css.chips}>
                    {p.includes.slice(0, 3).map((inc, k) => (
                      <span className={css.chip} key={k}>
                        <Check size={11} />
                        {t(inc)}
                      </span>
                    ))}
                  </span>

                  <span className={css.docs}>
                    {docs.slice(0, 3).map((d) => (
                      <span className={css.doc} key={d.slug}>
                        <Image src={d.img} alt="" width={80} height={80} sizes="30px" />
                      </span>
                    ))}
                    <span className={css.docText}>
                      {docs.length}{" "}
                      {t(
                        docs.length === 1
                          ? { ro: "medic", ru: "врач" }
                          : { ro: "medici", ru: "врача" }
                      )}
                    </span>
                  </span>
                </span>

                <span className={css.meta}>
                  <span className={css.price}>{t(s.price)}</span>
                  <span className={css.time}>
                    <Clock size={12} />
                    {t(s.time)}
                  </span>
                  <span className={css.go}>
                    <ArrowRight size={16} />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBand
        title={{ ro: "Nu știi de care ai nevoie?", ru: "Не знаете, что вам нужно?" }}
        titleEm={{ ro: "Nici nu trebuie.", ru: "И не нужно." }}
        text={{
          ro: "Vino la consultația gratuită. Ne uităm, îți arătăm pe ecran și îți dăm planul scris. Dacă răspunsul e că nu ai nevoie de nimic, ăsta e răspunsul pe care îl primești.",
          ru: "Приходите на бесплатную консультацию. Посмотрим, покажем на экране и дадим письменный план. Если ответ — что вам ничего не нужно, именно его вы и получите.",
        }}
      />
    </>
  );
}

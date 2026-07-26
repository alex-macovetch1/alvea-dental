"use client";

import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { DOCTOR_PAGES } from "@/lib/team-content";
import CtaBand from "../CtaBand";
import { ArrowRight } from "../Icons";
import PageHead from "../PageHead";
import css from "./TeamIndex.module.css";

export default function TeamIndex() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Echipa", ru: "Команда" } }]}
        kicker={{ ro: "Cine lucrează aici", ru: "Кто здесь работает" }}
        title={{ ro: "Patru medici,", ru: "Четыре врача," }}
        titleEm={{ ro: "unsprezece oameni", ru: "одиннадцать человек" }}
        lead={{
          ro: "Nu rotim pacienții de la un medic la altul. Cine te vede prima dată te duce până la capăt — și îți poți alege singur medicul când te programezi.",
          ru: "Мы не передаём пациентов от врача к врачу. Кто принял вас впервые, доводит лечение до конца — и врача вы можете выбрать сами при записи.",
        }}
      />

      <section className={css.list}>
        <div className="wrap">
          {TEAM.map((m, i) => {
            const d = DOCTOR_PAGES[m.slug];
            return (
              <article className={`${css.row} rv`} key={m.slug}>
                <Link href={`/echipa/${m.slug}`} className={css.frame}>
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={900}
                    height={1150}
                    sizes="(max-width: 900px) 100vw, 32vw"
                    priority={i === 0}
                  />
                </Link>

                <div className={css.body}>
                  <span className={css.role}>{t(d.title)}</span>
                  <h2 className={css.name}>
                    <Link href={`/echipa/${m.slug}`}>{m.name}</Link>
                  </h2>
                  <p className={css.quote}>„{t(d.quote)}”</p>
                  <p className={css.bio}>{t(d.bio[0])}</p>

                  <div className={css.nums}>
                    {d.numbers.map((n, k) => (
                      <div key={k}>
                        <b>{n.value}</b>
                        <i>{t(n.label)}</i>
                      </div>
                    ))}
                  </div>

                  <div className={css.foot}>
                    <span className={css.days}>{t(d.daysLabel)}</span>
                    <Link href={`/echipa/${m.slug}`} className={css.more}>
                      {t({ ro: "Pagina medicului", ru: "Страница врача" })}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={css.rest}>
        <div className={`wrap ${css.restIn}`}>
          <h2 className={`display ${css.restTitle} rv`}>
            {t({ ro: "Și încă șase oameni", ru: "И ещё шесть человек" })}{" "}
            <span className="serif">{t({ ro: "pe care nu îi vezi", ru: "которых вы не видите" })}</span>
          </h2>
          <p className={`${css.restText} rv`}>
            {t({
              ro: "Patru asistente cu certificare în sterilizare clasa B, o recepționeră care ține agenda tuturor și un tehnician dentar la etajul de sus. Tehnicianul e motivul pentru care o corecție de culoare la o coroană se face în aceeași zi, nu în trei.",
              ru: "Четыре ассистента с сертификацией по стерилизации класса B, администратор, которая ведёт график всех, и зубной техник этажом выше. Именно благодаря технику коррекция цвета коронки делается в тот же день, а не за три.",
            })}
          </p>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Alege-ți medicul", ru: "Выберите врача" }}
        titleEm={{ ro: "și ora.", ru: "и время." }}
        text={{
          ro: "În programarea online vezi orele libere reale ale fiecărui medic. Alegi, confirmi, gata.",
          ru: "В онлайн-записи вы видите реальные свободные часы каждого врача. Выбрали, подтвердили — готово.",
        }}
      />
    </>
  );
}

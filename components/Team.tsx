"use client";

import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow } from "./Icons";
import css from "./Team.module.css";

export default function Team() {
  const { t } = useLang();

  return (
    <section className="sec" id="echipa">
      <div className="wrap">
        <div className={css.head}>
          <div>
            <span className="eyebrow rv">{t({ ro: "Echipa", ru: "Команда" })}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t({ ro: "Patru medici,", ru: "Четыре врача," })}{" "}
              <span className="serif">{t({ ro: "unsprezece oameni", ru: "одиннадцать человек" })}</span>
            </h2>
          </div>
          <p className="lede rv" style={{ "--d": "130ms" } as React.CSSProperties}>
            {t({
              ro: "Nu rotim pacienții de la un medic la altul. Cine te vede prima dată te duce până la capăt.",
              ru: "Мы не передаём пациентов от врача к врачу. Кто принял вас в первый раз, тот доводит лечение до конца.",
            })}
          </p>
        </div>

        {/* the four doctors here; the hygienist has her own card on /echipa */}
        <div className={css.grid}>
          {TEAM.slice(0, 4).map((m, i) => (
            <Link
              href={`/echipa/${m.slug}`}
              className={`${css.card} rv`}
              key={m.slug}
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <div className={css.frame}>
                <Image
                  src={m.img}
                  alt={m.name}
                  width={900}
                  height={1200}
                  sizes="(max-width: 860px) 50vw, 24vw"
                />
                <span className={css.wash} />
                <span className={css.badge}>{t(m.years)}</span>
              </div>
              <h3 className={css.name}>{m.name}</h3>
              <span className={css.role}>{t(m.role)}</span>
            </Link>
          ))}
        </div>

        <div className={css.strip}>
          <p className={css.stripText}>
            {t({
              ro: "Toți medicii au formare continuă anuală în România sau Polonia. Asistentele au certificare în sterilizare clasa B — instrumentarul se procesează după fiecare pacient, fără excepție.",
              ru: "Все врачи ежегодно проходят обучение в Румынии или Польше. Ассистенты сертифицированы по стерилизации класса B — инструменты обрабатываются после каждого пациента, без исключений.",
            })}
          </p>
          <Link href="/echipa" className="btn btn-ghost">
            {t({ ro: "Cunoaște echipa", ru: "Познакомиться с командой" })}
            <span className="ic">
              <Arrow size={12} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

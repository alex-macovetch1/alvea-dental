"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES, TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { DOCTOR_PAGES } from "@/lib/team-content";
import CtaBand from "../CtaBand";
import { Arrow, ArrowRight, Check, Clock } from "../Icons";
import PageHead from "../PageHead";
import css from "./DoctorView.module.css";

export default function DoctorView({ slug }: { slug: string }) {
  const { t } = useLang();
  const m = TEAM.find((x) => x.slug === slug)!;
  const d = DOCTOR_PAGES[slug];
  const does = SERVICES.filter((s) => m.services.includes(s.slug));
  const others = TEAM.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHead
        crumbs={[{ href: "/echipa", label: { ro: "Echipa", ru: "Команда" } }, { label: { ro: m.name, ru: m.name } }]}
        kicker={d.title}
        title={{ ro: m.name, ru: m.name }}
        lead={d.bio[0]}
        aside={
          <div className={css.headActs}>
            <Link href={`/programare?medic=${slug}`} className="btn btn-accent">
              {t(UI.askDoctor)}
              <span className="ic">
                <Arrow size={12} />
              </span>
            </Link>
          </div>
        }
      />

      <section className={css.top}>
        <div className={`wrap ${css.topIn}`}>
          <div className={`${css.portrait} rvimg`}>
            <Image src={m.img} alt={m.name} width={1100} height={1400} priority sizes="(max-width: 900px) 100vw, 44vw" />
          </div>

          <div className={css.side}>
            <blockquote className={`${css.quote} rv`}>„{t(d.quote)}”</blockquote>

            <div className={css.nums}>
              {d.numbers.map((n, i) => (
                <div className={`${css.num} rv`} key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                  <b>{n.value}</b>
                  <i>{t(n.label)}</i>
                </div>
              ))}
            </div>

            <dl className={`${css.facts} rv`}>
              <div>
                <dt>{t({ ro: "În clinică", ru: "В клинике" })}</dt>
                <dd>
                  <Clock size={13} />
                  {t(d.daysLabel)}
                </dd>
              </div>
              <div>
                <dt>{t({ ro: "Vorbește", ru: "Говорит" })}</dt>
                <dd>{t(d.languages)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={css.main}>
        <div className={`wrap ${css.split}`}>
          <article className={css.article}>
            <h2 className={`${css.h2} rv`}>{t({ ro: "Despre", ru: "О враче" })}</h2>
            {d.bio.map((b, i) => (
              <p className="rv" key={i}>
                {t(b)}
              </p>
            ))}

            <h2 className={`${css.h2} ${css.h2b} rv`}>{t({ ro: "Se ocupă de", ru: "Занимается" })}</h2>
            <ul className={`${css.focus} rv`}>
              {d.focus.map((f, i) => (
                <li key={i}>
                  <i>
                    <Check size={12} />
                  </i>
                  {t(f)}
                </li>
              ))}
            </ul>
          </article>

          <aside className={css.edu}>
            <h2 className={css.eduTitle}>{t({ ro: "Studii și formare", ru: "Образование и подготовка" })}</h2>
            <ol className={css.eduList}>
              {d.education.map((e, i) => (
                <li className="rv" key={i} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                  <b>{e.year}</b>
                  <span>{t(e.text)}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className={css.does}>
        <div className="wrap">
          <h2 className={`display ${css.doesTitle} rv`}>
            {t({ ro: "Serviciile pe care", ru: "Услуги, которые" })}{" "}
            <span className="serif">{t({ ro: "le face", ru: "он выполняет" })}</span>
          </h2>
          <div className={css.doesGrid}>
            {does.map((s) => (
              <Link href={`/servicii/${s.slug}`} className={`${css.doesCard} rv`} key={s.slug}>
                <span className={css.doesImg}>
                  <Image src={s.img} alt="" width={600} height={420} sizes="(max-width: 800px) 50vw, 22vw" />
                </span>
                <b>{t(s.title)}</b>
                <i>{t(s.price)}</i>
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={css.others}>
        <div className="wrap">
          <h2 className={`display ${css.othersTitle} rv`}>{t({ ro: "Restul echipei", ru: "Остальная команда" })}</h2>
          <div className={css.othersGrid}>
            {others.map((o) => (
              <Link href={`/echipa/${o.slug}`} className={`${css.other} rv`} key={o.slug}>
                <span className={css.otherImg}>
                  <Image src={o.img} alt="" width={500} height={640} sizes="(max-width: 800px) 45vw, 22vw" />
                </span>
                <b>{o.name}</b>
                <i>{t(o.role)}</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Vezi orele libere", ru: "Посмотрите свободные часы" }}
        titleEm={{ ro: "și alege-ți ziua.", ru: "и выберите день." }}
        text={{
          ro: `Agenda lui ${m.name} e deschisă în programarea online. Alegi ziua și ora, se confirmă pe loc, fără să aștepți un telefon.`,
          ru: `График врача ${m.name} открыт в онлайн-записи. Выбираете день и время, подтверждается сразу, без ожидания звонка.`,
        }}
        href={`/programare?medic=${slug}`}
        label={UI.askDoctor}
      />
    </>
  );
}

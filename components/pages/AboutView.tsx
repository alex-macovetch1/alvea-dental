"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC, STATS, TEAM } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { ABOUT_PAGE } from "@/lib/site-content";
import Counter from "../Counter";
import CtaBand from "../CtaBand";
import { ArrowRight, Mail } from "../Icons";
import PageHead from "../PageHead";
import css from "./AboutView.module.css";

export default function AboutView() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Despre noi", ru: "О нас" } }]}
        kicker={ABOUT_PAGE.kicker}
        title={ABOUT_PAGE.title}
        titleEm={ABOUT_PAGE.titleEm}
        lead={ABOUT_PAGE.lead}
      />

      <section className={css.cover}>
        <div className="wrap">
          <div className={`${css.coverImg} rvimg`}>
            <Image src="/img/clinic-wide.jpg" alt="" width={1900} height={950} priority sizes="100vw" />
          </div>
          <div className={css.stats}>
            {STATS.map((s, i) => (
              <div className={`${css.stat} rv`} key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <b>
                  <Counter to={s.value} decimals={s.decimals} suffix={s.suffix} />
                </b>
                <i>{t(s.label)}</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- story ---- */}
      <section className={css.story}>
        <div className={`wrap ${css.storyIn}`}>
          <div className={css.storyText}>
            <h2 className={`display ${css.h2} rv`}>{t(ABOUT_PAGE.storyTitle)}</h2>
            {ABOUT_PAGE.story.map((p, i) => (
              <p className="rv" key={i}>
                {t(p)}
              </p>
            ))}
          </div>
          <ol className={css.timeline}>
            {ABOUT_PAGE.timeline.map((e, i) => (
              <li className={`${css.tlItem} rv`} key={i} style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <b>{e.year}</b>
                <span>{t(e.text)}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- values ---- */}
      <section className={css.values}>
        <div className="wrap">
          <h2 className={`display ${css.valTitle} rv`}>
            {t(ABOUT_PAGE.valuesTitle).split(" ").slice(0, 2).join(" ")}{" "}
            <span className="serif">{t(ABOUT_PAGE.valuesTitle).split(" ").slice(2).join(" ")}</span>
          </h2>
          <div className={css.valGrid}>
            {ABOUT_PAGE.values.map((v, i) => (
              <article className={`${css.val} rv`} key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <span className={css.valNum}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(v.title)}</h3>
                <p>{t(v.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- tech ---- */}
      <section className={css.tech}>
        <div className={`wrap ${css.techIn}`}>
          <div className={css.techHead}>
            <span className="eyebrow rv">{t({ ro: "Dotare", ru: "Оснащение" })}</span>
            <h2 className={`display ${css.h2} rv`}>{t(ABOUT_PAGE.techTitle)}</h2>
            <p className={`lede rv`}>{t(ABOUT_PAGE.techLead)}</p>
            <div className={`${css.techShot} rvimg`}>
              <Image src="/img/lab.jpg" alt="" width={1200} height={860} sizes="(max-width: 1000px) 100vw, 40vw" />
            </div>
          </div>
          <div className={css.techList}>
            {ABOUT_PAGE.tech.map((x, i) => (
              <div className={`${css.techRow} rv`} key={i} style={{ "--d": `${i * 55}ms` } as React.CSSProperties}>
                <b>{t(x.name)}</b>
                <span>{t(x.why)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- team teaser ---- */}
      <section className={css.people}>
        <div className="wrap">
          <div className={css.peopleHead}>
            <h2 className={`display ${css.h2} rv`}>
              {t({ ro: "Oamenii", ru: "Люди" })} <span className="serif">{t({ ro: "din spate", ru: "за этим" })}</span>
            </h2>
            <Link href="/echipa" className={`${css.more} rv`}>
              {t({ ro: "Toată echipa", ru: "Вся команда" })}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className={css.peopleGrid}>
            {TEAM.map((m) => (
              <Link href={`/echipa/${m.slug}`} className={`${css.person} rv`} key={m.slug}>
                <span className={css.personImg}>
                  <Image src={m.img} alt="" width={500} height={640} sizes="(max-width: 800px) 45vw, 19vw" />
                </span>
                <b>{m.name}</b>
                <i>{t(m.role)}</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- jobs ---- */}
      <section className={css.join}>
        <div className={`wrap ${css.joinIn}`}>
          <div>
            <h2 className={`display ${css.joinTitle} rv`}>{t(ABOUT_PAGE.joinTitle)}</h2>
            <p className={`${css.joinText} rv`}>{t(ABOUT_PAGE.joinText)}</p>
          </div>
          <a href={`mailto:${CLINIC.email}`} className="btn btn-ghost rv">
            <Mail size={16} />
            {CLINIC.email}
          </a>
        </div>
      </section>

      <CtaBand
        title={{ ro: "Vino să vezi", ru: "Приходите посмотреть" }}
        titleEm={{ ro: "cu ochii tăi.", ru: "своими глазами." }}
        text={{
          ro: "Consultația e gratuită și nu te obligă la nimic. În 40 de minute afli exact ce ai și cât costă.",
          ru: "Консультация бесплатна и ни к чему не обязывает. За 40 минут вы точно узнаете, что у вас и сколько это стоит.",
        }}
      />
    </>
  );
}

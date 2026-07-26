"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { CONTACT_PAGE } from "@/lib/site-content";
import Booking from "../Booking";
import CtaBand from "../CtaBand";
import { Arrow, Mail, Phone } from "../Icons";
import PageHead from "../PageHead";
import css from "./ContactView.module.css";

export default function ContactView() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Contact", ru: "Контакты" } }]}
        kicker={CONTACT_PAGE.kicker}
        title={CONTACT_PAGE.title}
        titleEm={CONTACT_PAGE.titleEm}
        lead={CONTACT_PAGE.lead}
        aside={
          <div className={css.headActs}>
            <Link href="/programare" className="btn btn-accent">
              {t(UI.book)}
              <span className="ic">
                <Arrow size={12} />
              </span>
            </Link>
            <a href={CLINIC.phoneHref} className="btn btn-ghost">
              <Phone size={16} />
              {CLINIC.phone}
            </a>
          </div>
        }
      />

      <section className={css.shot}>
        <div className="wrap">
          <div className={`${css.img} rvimg`}>
            <Image src="/img/waiting.jpg" alt="" width={1900} height={950} priority sizes="100vw" />
          </div>
        </div>
      </section>

      <section className={css.how}>
        <div className="wrap">
          <h2 className={`display ${css.howTitle} rv`}>{t(CONTACT_PAGE.howTitle)}</h2>
          <div className={css.howGrid}>
            {CONTACT_PAGE.how.map((h, i) => (
              <article className={`${css.card} rv`} key={i} style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <span className={css.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{t(h.title)}</h3>
                <p>{t(h.text)}</p>
              </article>
            ))}
          </div>

          <div className={css.two}>
            <div className={`${css.box} rv`}>
              <h3>{t(CONTACT_PAGE.urgentTitle)}</h3>
              <p>{t(CONTACT_PAGE.urgentText)}</p>
              <a href={`tel:${CLINIC.mobile.replace(/\s/g, "")}`} className={css.big}>
                {CLINIC.mobile}
              </a>
            </div>
            <div className={`${css.box} rv`} style={{ "--d": "80ms" } as React.CSSProperties}>
              <h3>{t(CONTACT_PAGE.writeTitle)}</h3>
              <p>{t(CONTACT_PAGE.writeText)}</p>
              <a href={`mailto:${CLINIC.email}`} className={css.big}>
                <Mail size={18} />
                {CLINIC.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* the same form the home page uses — one place to keep working */}
      <Booking />

      <CtaBand
        title={{ ro: "Sau alege-ți ora", ru: "Или выберите время" }}
        titleEm={{ ro: "chiar acum.", ru: "прямо сейчас." }}
        text={{
          ro: "Programarea online arată orele libere reale ale fiecărui medic și se confirmă pe loc.",
          ru: "Онлайн-запись показывает реальные свободные часы каждого врача и подтверждается сразу.",
        }}
      />
    </>
  );
}

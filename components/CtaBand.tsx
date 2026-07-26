"use client";

import Link from "next/link";
import { CLINIC, UI, type T } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Phone } from "./Icons";
import css from "./CtaBand.module.css";

/** The dark band that closes an inner page. Every page ends on the same
 *  offer, worded for the page it sits under. */
export default function CtaBand({
  title,
  titleEm,
  text,
  href = "/programare",
  label,
}: {
  title: T;
  titleEm?: T;
  text: T;
  href?: string;
  label?: T;
}) {
  const { t } = useLang();

  return (
    <section className={css.band}>
      <div className={`wrap ${css.in}`}>
        <div>
          <h2 className={`display ${css.title} rv`}>
            {t(title)}
            {titleEm && (
              <>
                {" "}
                <span className="serif">{t(titleEm)}</span>
              </>
            )}
          </h2>
          <p className={`${css.text} rv`} style={{ "--d": "90ms" } as React.CSSProperties}>
            {t(text)}
          </p>
        </div>
        <div className={`${css.acts} rv`} style={{ "--d": "160ms" } as React.CSSProperties}>
          <Link href={href} className="btn btn-accent">
            {t(label ?? UI.book)}
            <span className="ic">
              <Arrow size={12} />
            </span>
          </Link>
          <a href={CLINIC.phoneHref} className={css.tel}>
            <Phone size={16} />
            {CLINIC.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

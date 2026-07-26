"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BLOG_UI, POSTS } from "@/lib/blog";
import { TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { formatDateShort } from "@/lib/site-content";
import CtaBand from "../CtaBand";
import { ArrowRight } from "../Icons";
import PageHead from "../PageHead";
import css from "./BlogIndex.module.css";

export default function BlogIndex() {
  const { lang, t } = useLang();
  const [tag, setTag] = useState("all");

  const tags = Array.from(new Set(POSTS.map((p) => p.tag.ro))).map(
    (ro) => POSTS.find((p) => p.tag.ro === ro)!.tag
  );
  const shown = tag === "all" ? POSTS : POSTS.filter((p) => p.tag.ro === tag);
  const [lead, ...rest] = shown;

  return (
    <>
      <PageHead
        crumbs={[{ label: { ro: "Blog", ru: "Блог" } }]}
        kicker={BLOG_UI.eyebrow}
        title={BLOG_UI.title}
        titleEm={BLOG_UI.titleEm}
        lead={BLOG_UI.lede}
        aside={
          <div className={css.tags}>
            <button data-on={tag === "all"} onClick={() => setTag("all")}>
              {t({ ro: "Toate", ru: "Все" })}
            </button>
            {tags.map((x) => (
              <button key={x.ro} data-on={tag === x.ro} onClick={() => setTag(x.ro)}>
                {t(x)}
              </button>
            ))}
          </div>
        }
      />

      <section className={css.list}>
        <div className="wrap">
          {lead && (
            <Link href={`/blog/${lead.slug}`} className={`${css.lead} rv`}>
              <span className={css.leadImg}>
                <Image src={lead.cover} alt="" width={1400} height={900} priority sizes="(max-width: 900px) 100vw, 52vw" />
                <span className={css.tag}>{t(lead.tag)}</span>
              </span>
              <span className={css.leadBody}>
                <span className={css.meta}>
                  {formatDateShort(lead.date, lang)} · {lead.minutes} {t(UI.minRead)}
                </span>
                <h2>{t(lead.title)}</h2>
                <p>{t(lead.excerpt)}</p>
                <span className={css.by}>
                  {t(BLOG_UI.by)} {TEAM.find((m) => m.slug === lead.author)?.name}
                </span>
                <span className={css.more}>
                  {t(UI.readMore)}
                  <ArrowRight size={15} />
                </span>
              </span>
            </Link>
          )}

          <div className={css.grid}>
            {rest.map((p, i) => (
              <Link
                href={`/blog/${p.slug}`}
                key={p.slug}
                className={`${css.card} rv`}
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              >
                <span className={css.cardImg}>
                  <Image src={p.cover} alt="" width={800} height={560} sizes="(max-width: 900px) 100vw, 25vw" />
                  <span className={css.tag}>{t(p.tag)}</span>
                </span>
                <span className={css.meta}>
                  {formatDateShort(p.date, lang)} · {p.minutes} {t(UI.minRead)}
                </span>
                <h3>{t(p.title)}</h3>
                <p>{t(p.excerpt)}</p>
                <span className={css.by}>{TEAM.find((m) => m.slug === p.author)?.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={BLOG_UI.cta}
        text={BLOG_UI.ctaText}
      />
    </>
  );
}

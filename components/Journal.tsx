"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_UI, POSTS } from "@/lib/blog";
import { TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { formatDateShort } from "@/lib/site-content";
import { Arrow } from "./Icons";
import css from "./Journal.module.css";

/** Three most recent articles, on the home page. */
export default function Journal() {
  const { lang, t } = useLang();
  const posts = POSTS.slice(0, 3);

  return (
    <section className="sec" id="blog">
      <div className="wrap">
        <div className={css.head}>
          <div>
            <span className="eyebrow rv">{t(BLOG_UI.eyebrow)}</span>
            <h2 className={`display ${css.title} rv`} style={{ "--d": "70ms" } as React.CSSProperties}>
              {t(BLOG_UI.title)} <span className="serif">{t(BLOG_UI.titleEm)}</span>
            </h2>
          </div>
          <Link href="/blog" className={`btn btn-ghost rv ${css.all}`} style={{ "--d": "140ms" } as React.CSSProperties}>
            {t(UI.all)}
            <span className="ic">
              <Arrow size={12} />
            </span>
          </Link>
        </div>

        <div className={css.grid}>
          {posts.map((p, i) => {
            const author = TEAM.find((m) => m.slug === p.author);
            return (
              <Link
                href={`/blog/${p.slug}`}
                key={p.slug}
                className={`${css.card} rv`}
                style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className={css.frame}>
                  <Image src={p.cover} alt="" width={900} height={620} sizes="(max-width: 900px) 100vw, 32vw" />
                  <span className={css.tag}>{t(p.tag)}</span>
                </span>
                <span className={css.meta}>
                  {formatDateShort(p.date, lang)} · {p.minutes} {t(UI.minRead)}
                </span>
                <h3 className={css.cardTitle}>{t(p.title)}</h3>
                <p className={css.excerpt}>{t(p.excerpt)}</p>
                {author && <span className={css.author}>{author.name}</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

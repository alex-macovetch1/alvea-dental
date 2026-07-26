"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BLOG_UI, POSTS } from "@/lib/blog";
import { SERVICES, TEAM, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { DOCTOR_PAGES } from "@/lib/team-content";
import { formatDate } from "@/lib/site-content";
import CtaBand from "../CtaBand";
import { ArrowRight } from "../Icons";
import PageHead from "../PageHead";
import css from "./PostView.module.css";

export default function PostView({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const [progress, setProgress] = useState(0);

  const p = POSTS.find((x) => x.slug === slug)!;
  const author = TEAM.find((m) => m.slug === p.author);
  const authorPage = DOCTOR_PAGES[p.author];
  const service = SERVICES.find((s) => s.slug === p.service);
  const more = POSTS.filter((x) => x.slug !== slug).slice(0, 3);
  const headings = p.body.filter((b) => b.kind === "h");

  // a thin bar across the top of the article, so a long read has a horizon
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={css.progress} style={{ "--p": `${progress}%` } as React.CSSProperties} aria-hidden="true" />

      <PageHead
        crumbs={[{ href: "/blog", label: { ro: "Blog", ru: "Блог" } }, { label: p.tag }]}
        kicker={p.tag}
        title={p.title}
        lead={p.excerpt}
        aside={
          author && (
            <div className={css.byline}>
              <span className={css.avatar}>
                <Image src={author.img} alt="" width={120} height={150} sizes="52px" />
              </span>
              <span>
                <b>{author.name}</b>
                <i>{authorPage && t(authorPage.title)}</i>
              </span>
              <span className={css.dot} />
              <span className={css.when}>
                {formatDate(p.date, lang)}
                <br />
                {p.minutes} {t(UI.minRead)}
              </span>
            </div>
          )
        }
      />

      <section className={css.cover}>
        <div className="wrap">
          <div className={`${css.coverImg} rvimg`}>
            <Image src={p.cover} alt="" width={1800} height={900} priority sizes="100vw" />
          </div>
        </div>
      </section>

      <section className={css.main}>
        <div className={`wrap ${css.split}`}>
          <aside className={css.toc}>
            <span className={css.tocTitle}>{t(BLOG_UI.toc)}</span>
            <ol>
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#h-${i}`}>{t(h.text)}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className={css.article}>
            {p.body.map((b, i) => {
              if (b.kind === "h") {
                const idx = headings.indexOf(b);
                return (
                  <h2 id={`h-${idx}`} className={`${css.h2} rv`} key={i}>
                    {t(b.text)}
                  </h2>
                );
              }
              if (b.kind === "quote") {
                return (
                  <blockquote className={`${css.quote} rv`} key={i}>
                    {t(b.text)}
                  </blockquote>
                );
              }
              if (b.kind === "ul") {
                return (
                  <ul className={`${css.ul} rv`} key={i}>
                    {b.items.map((it, k) => (
                      <li key={k}>{t(it)}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p className="rv" key={i}>
                  {t(b.text)}
                </p>
              );
            })}

            {service && (
              <div className={css.inline}>
                <span>{t({ ro: "Serviciul din articol", ru: "Услуга из статьи" })}</span>
                <Link href={`/servicii/${service.slug}`}>
                  {t(service.title)} — {t(service.price)}
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}

            {author && authorPage && (
              <div className={css.authorBox}>
                <span className={css.authorImg}>
                  <Image src={author.img} alt="" width={220} height={280} sizes="96px" />
                </span>
                <div>
                  <span className={css.authorLabel}>{t(BLOG_UI.by)}</span>
                  <b>{author.name}</b>
                  <i>{t(authorPage.title)}</i>
                  <p>{t(authorPage.bio[0])}</p>
                  <Link href={`/echipa/${author.slug}`} className={css.authorLink}>
                    {t({ ro: "Pagina medicului", ru: "Страница врача" })}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className={css.more}>
        <div className="wrap">
          <div className={css.moreHead}>
            <h2 className={`display ${css.moreTitle} rv`}>{t(BLOG_UI.more)}</h2>
            <Link href="/blog" className={css.allLink}>
              {t(UI.all)}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className={css.moreGrid}>
            {more.map((m) => (
              <Link href={`/blog/${m.slug}`} className={`${css.card} rv`} key={m.slug}>
                <span className={css.cardImg}>
                  <Image src={m.cover} alt="" width={800} height={560} sizes="(max-width: 800px) 100vw, 30vw" />
                </span>
                <span className={css.cardTag}>{t(m.tag)}</span>
                <b>{t(m.title)}</b>
                <i>
                  {m.minutes} {t(UI.minRead)}
                </i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={BLOG_UI.cta} text={BLOG_UI.ctaText} />
    </>
  );
}

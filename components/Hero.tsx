"use client";

import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";
import { useEffect, useRef } from "react";
import { HERO, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Arrow, Check, Star, Tooth } from "./Icons";
import css from "./Hero.module.css";

/** Splits a phrase into masked words so the headline rises line by line. */
function Words({ text, from = 0, em }: { text: string; from?: number; em?: boolean }) {
  const words = text.trim().split(/\s+/);
  return (
    <>
      {words.map((w, i) => (
        // the space lives outside the mask, or `overflow: hidden` eats it
        <span key={`${w}-${i}`}>
          <span className={css.w}>
            <i style={{ animationDelay: `${90 + (from + i) * 46}ms` }}>
              {em ? <em>{w}</em> : w}
            </i>
          </span>{" "}
        </span>
      ))}
    </>
  );
}

const FACES = ["/img/p-1.jpg", "/img/p-3.jpg", "/img/p-4.jpg"];

export default function Hero() {
  const { lang, t } = useLang();
  const hero = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLVideoElement>(null);

  // The poster is the LCP element on desktop; asking for it here beats waiting
  // for the <video> tag to be parsed.
  ReactDOM.preload("/img/clinic-poster.jpg", { as: "image", fetchPriority: "high" });

  // Gentle parallax: the footage drifts slower than the page it sits in.
  useEffect(() => {
    const el = stage.current;
    const vid = media.current;
    if (!el || !vid) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const frame = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const p = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      vid.style.transform = `scale(1.12) translate3d(0, ${(-p * 26).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    addEventListener("scroll", onScroll, { passive: true });
    frame();
    return () => {
      removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Three loops run forever here; CSS pauses them while the section is off
  // screen. `paused` freezes the current frame, so nothing jumps on return.
  useEffect(() => {
    const el = hero.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      el.setAttribute("data-live", e.isIntersecting ? "true" : "false");
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const a = t(HERO.titleA);
  const em = t(HERO.titleEm);
  const b = t(HERO.titleB);
  const nA = a.split(/\s+/).length;
  const nEm = em.split(/\s+/).length;

  return (
    <section className={css.hero} id="top" ref={hero} data-live="true">
      <div className="wrap">
        <div className={css.top}>
          <div>
            <span className={css.badge}>
              <b>
                <Tooth size={13} />
              </b>
              {t(HERO.badge)}
            </span>
            {/* remounting on language change replays the reveal */}
            <h1 className={`display ${css.h1}`} key={lang}>
              <Words text={a} />
              <span className="serif">
                <Words text={em} from={nA} em />
              </span>{" "}
              <Words text={b} from={nA + nEm} />
            </h1>
          </div>

          <div className={css.aside}>
            <p className="lede">{t(HERO.sub)}</p>
            <div className={css.acts}>
              <Link href="/programare" className="btn">
                {t(HERO.ctaMain)}
                <span className="ic">
                  <Arrow size={12} />
                </span>
              </Link>
              <Link href="/preturi" className="btn btn-ghost">
                {t(HERO.ctaAlt)}
              </Link>
            </div>
            <span className={css.free}>
              <i>
                <Check size={11} />
              </i>
              {t(HERO.free)}
            </span>
          </div>
        </div>

        <div className={css.stage} ref={stage}>
          <video
            ref={media}
            src="/video/clinic.mp4"
            poster="/img/clinic-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <span className={css.shade} />

          <div className={`${css.chip} ${css.chipRating}`}>
            <div>
              <span className={css.stars}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={12} />
                ))}
              </span>
              <span className={css.chipBig}>4.9</span>
              <span className={css.chipSmall}>{t(HERO.cardRating)}</span>
            </div>
          </div>

          <div className={`${css.chip} ${css.chipPatients}`}>
            <span className={css.faces}>
              {FACES.map((f) => (
                <span key={f}>
                  <Image src={f} alt="" width={68} height={68} sizes="34px" />
                </span>
              ))}
            </span>
            <div>
              <span className={css.chipBig}>12 400+</span>
              <span className={css.chipSmall}>{t(HERO.cardPatients)}</span>
            </div>
          </div>

          <span className={css.scroll}>
            <i />
            {t(UI.scroll)}
          </span>
        </div>
      </div>
    </section>
  );
}

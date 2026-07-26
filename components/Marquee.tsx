"use client";

import { useEffect, useRef } from "react";
import { MARQUEE } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Tooth } from "./Icons";
import css from "./Marquee.module.css";

export default function Marquee() {
  const { t } = useLang();
  const track = useRef<HTMLDivElement>(null);

  // Driven by rAF rather than a CSS keyframe so scrolling can push it along.
  // It never pauses — a stopped ticker looks like a broken page.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = 0;
    let boost = 0;
    let lastY = window.scrollY;
    let raf = 0;

    const onScroll = () => {
      boost += (window.scrollY - lastY) * 0.34;
      lastY = window.scrollY;
    };
    addEventListener("scroll", onScroll, { passive: true });

    const frame = () => {
      const half = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
      boost *= 0.93;
      if (half) {
        pos -= 0.55 + boost * 0.05;
        if (pos <= -half) pos += half;
        if (pos > 0) pos -= half;
        el.style.transform = `translate3d(${pos.toFixed(2)}px,0,0)`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  const row = (
    <div className={css.half}>
      {MARQUEE.map((m, i) => (
        <span className={css.item} key={i}>
          {t(m)}
          <i>
            <Tooth size={16} />
          </i>
        </span>
      ))}
    </div>
  );

  return (
    <div className={css.band} aria-hidden="true">
      <div className={css.track} ref={track}>
        {row}
        {row}
      </div>
    </div>
  );
}

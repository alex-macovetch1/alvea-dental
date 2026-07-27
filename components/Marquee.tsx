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
  // It only ever stops while the band is off screen, and resumes from the same
  // offset — on screen it must keep moving, a frozen ticker reads as broken.
  useEffect(() => {
    const el = track.current;
    const band = el?.parentElement;
    if (!el || !band) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos = 0;
    let boost = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let live = false;
    // measured on mount and on resize instead of every frame — reading
    // offsetWidth inside the loop forces a synchronous layout
    let half = 0;

    const first = el.firstElementChild as HTMLElement | null;
    const ro = new ResizeObserver(() => {
      half = first?.offsetWidth ?? 0;
    });
    if (first) ro.observe(first);

    const onScroll = () => {
      const y = window.scrollY;
      if (live) boost += (y - lastY) * 0.34;
      lastY = y;
    };
    addEventListener("scroll", onScroll, { passive: true });

    const frame = () => {
      boost *= 0.93;
      if (half) {
        pos -= 0.55 + boost * 0.05;
        if (pos <= -half) pos += half;
        if (pos > 0) pos -= half;
        el.style.transform = `translate3d(${pos.toFixed(2)}px,0,0)`;
      }
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting === live) return;
      live = e.isIntersecting;
      if (live) {
        lastY = window.scrollY;
        raf = requestAnimationFrame(frame);
      } else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(band);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
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

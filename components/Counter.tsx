"use client";

import { useEffect, useRef } from "react";

const NF = new Intl.NumberFormat("ro-MD");

/** Counts up once, the first time it is scrolled into view. */
export default function Counter({
  to,
  decimals = 0,
  suffix = "",
  duration = 1500,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  // Written straight to the node: a number ticking 90 times would otherwise
  // drag the whole subtree through reconciliation for nothing.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const write = (v: number) => {
      el.textContent = format(v) + suffix;
    };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      write(to);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          // ease-out-quart: fast at the start, lands softly
          write(to * (1 - Math.pow(1 - p, 4)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration, decimals, suffix]);

  const format = (v: number) =>
    decimals > 0
      ? v.toFixed(decimals)
      : NF.format(Math.round(v)).replace(/ /g, " ");

  return (
    <span ref={ref}>
      {format(0)}
      {suffix}
    </span>
  );
}

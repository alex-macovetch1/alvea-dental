"use client";

import { useEffect, useRef, useState } from "react";

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
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
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
          setN(to * (1 - Math.pow(1 - p, 4)));
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
  }, [to, duration]);

  const text =
    decimals > 0
      ? n.toFixed(decimals)
      : Math.round(n).toLocaleString("ro-MD").replace(/ /g, " ");

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}

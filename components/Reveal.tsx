"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page instead of a ref in every component.
 * Elements opt in with `.rv` (slide up) or `.rvimg` (un-blur and settle),
 * and stagger themselves with `style={{ "--d": "120ms" }}`.
 */
export default function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".rv, .rvimg");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

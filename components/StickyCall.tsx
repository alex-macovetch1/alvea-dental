"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CLINIC, UI } from "@/lib/content";
import { useLang } from "@/lib/i18n";
import { Phone, Wa } from "./Icons";
import css from "./StickyCall.module.css";

/**
 * On a phone the two things anyone wants are "call" and "write". They slide in
 * once the hero is out of the way, and hide again over the booking form so they
 * do not cover the very field the visitor is filling in.
 */
export default function StickyCall() {
  const { t } = useLang();
  const path = usePathname();
  const [on, setOn] = useState(false);
  const form = useRef<HTMLElement | null>(null);

  // Resolved per route instead of on every scroll event — most pages have no
  // booking form at all, and then there is nothing to measure.
  useEffect(() => {
    form.current = document.getElementById("contact");
    let raf = 0;
    const frame = () => {
      raf = 0;
      const el = form.current;
      const nearForm = el ? el.getBoundingClientRect().top < innerHeight * 0.8 : false;
      setOn(window.scrollY > 700 && !nearForm);
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
  }, [path]);

  return (
    <div className={css.bar} data-on={on}>
      <a href={CLINIC.phoneHref} className="btn btn-accent">
        <Phone size={16} />
        {t(UI.call)}
      </a>
      <Link href="/programare" className="btn">
        {t(UI.bookShort)}
      </Link>
      <a href={CLINIC.whatsapp} target="_blank" rel="noopener" className={`btn ${css.wa}`} aria-label="WhatsApp">
        <Wa size={19} />
      </a>
    </div>
  );
}

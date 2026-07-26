"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById("contact");
      const nearForm = form ? form.getBoundingClientRect().top < innerHeight * 0.8 : false;
      setOn(window.scrollY > 700 && !nearForm);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

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

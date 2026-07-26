"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import css from "./Compare.module.css";

/**
 * A small before/after slider. There is only one photo: the "before" layer is
 * the same image pushed through a filter that reads as un-whitened teeth, so
 * a case needs one file instead of two that never quite match.
 */
export default function Compare({
  src,
  alt = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  priority?: boolean;
}) {
  const { t } = useLang();
  const box = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(50);
  const [dragging, setDragging] = useState(false);

  const move = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setX(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={box}
      className={css.box}
      data-dragging={dragging}
      style={{ "--x": `${x}%` } as React.CSSProperties}
      onPointerDown={(e) => {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setDragging(true);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging && move(e.clientX)}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      <Image src={src} alt={alt} width={1400} height={1000} priority={priority} sizes="(max-width: 900px) 100vw, 46vw" />

      <div className={css.before} aria-hidden="true">
        <Image src={src} alt="" width={1400} height={1000} sizes="(max-width: 900px) 100vw, 46vw" />
      </div>

      <span className={`${css.tag} ${css.tagL}`}>{t({ ro: "Înainte", ru: "До" })}</span>
      <span className={`${css.tag} ${css.tagR}`}>{t({ ro: "După", ru: "После" })}</span>

      <div
        className={css.handle}
        role="slider"
        tabIndex={0}
        aria-label={t({ ro: "Compară înainte și după", ru: "Сравнить до и после" })}
        aria-valuenow={Math.round(x)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setX((v) => Math.max(2, v - 4));
          if (e.key === "ArrowRight") setX((v) => Math.min(98, v + 4));
        }}
      >
        <i />
      </div>
    </div>
  );
}

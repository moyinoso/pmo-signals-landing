"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/site";

const GAP = 24;

export default function ProjectCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(324); // card width + gap (mobile default)
  const [dragOffset, setDragOffset] = useState(0);
  const dragState = useRef<{ startX: number; startOffset: number; active: boolean }>({
    startX: 0,
    startOffset: 0,
    active: false,
  });

  const maxIndex = projects.length - 1;

  const measure = useCallback(() => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    if (card) setStep(card.offsetWidth + GAP);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(maxIndex, i))),
    [maxIndex]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* ---- pointer drag (covers mouse + touch) ---- */
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragState.current = { startX: e.clientX, startOffset: 0, active: true };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragOffset(0);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    setDragOffset(dx);
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const dx = e.clientX - dragState.current.startX;
    dragState.current.active = false;
    setDragOffset(0);
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  /* ---- trackpad horizontal scroll ---- */
  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : 0;
    if (!delta) return;
    if (delta > 30 && index < maxIndex) next();
    else if (delta < -30 && index > 0) prev();
  };

  /* ---- keyboard ---- */
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const translate = -(index * step) + dragOffset;
  const clampedTranslate = Math.min(translate, 0);

  return (
    <div>
      <div
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label="Selected work carousel. Use arrow keys to navigate."
        className="no-scrollbar overflow-hidden outline-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onWheel={onWheel}
        style={{ touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          className={`carousel-track flex gap-6 ${dragState.current.active ? "dragging" : ""}`}
          style={{ transform: `translateX(${clampedTranslate}px)` }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.signal} project={p} />
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="mt-10 flex items-center justify-between">
        <div className="font-mono text-xs tracking-label text-muted">
          <span className="text-brass">{String(index + 1).padStart(2, "0")}</span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </div>

        <div className="flex items-center gap-4 font-mono text-[10px] tracking-label text-muted/60">
          {projects.map((p, i) => (
            <button
              key={p.signal}
              onClick={() => goTo(i)}
              aria-label={`Go to signal ${p.signal}`}
              className={`h-px transition-all duration-300 ${
                i === index ? "w-10 bg-brass" : "w-5 bg-line hover:bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous signal"
            className="border border-line px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-brass/50 hover:text-brass disabled:cursor-not-allowed disabled:opacity-30"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={index === maxIndex}
            aria-label="Next signal"
            className="border border-line px-3 py-2 font-mono text-xs text-muted transition-colors hover:border-brass/50 hover:text-brass disabled:cursor-not-allowed disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Slow, purposeful signal field:
 * faint drifting data points joined by thin connection lines,
 * with occasional "signal pulses" travelling along an edge.
 */
export default function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let t = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.floor((w * h) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() < 0.15 ? 2 : 1.2,
      }));
    }

    function drawStatic() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      connect();
    }

    function connect() {
      if (!ctx) return;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.16;
            ctx.strokeStyle = `rgba(237, 232, 223, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();

            // a slow brass pulse travelling one edge at a time
            if ((i * 7 + j * 13) % 23 === Math.floor(t) % 23) {
              const p = (t % 60) / 60;
              const px = a.x + (b.x - a.x) * p;
              const py = a.y + (b.y - a.y) * p;
              ctx.fillStyle = "rgba(200, 162, 75, 0.7)";
              ctx.beginPath();
              ctx.arc(px, py, 1.4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = "rgba(237, 232, 223, 0.45)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -5) n.x = w + 5;
        if (n.x > w + 5) n.x = -5;
        if (n.y < -5) n.y = h + 5;
        if (n.y > h + 5) n.y = -5;
      }
      connect();
      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

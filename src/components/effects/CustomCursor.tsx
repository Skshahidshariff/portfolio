"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafId   = useRef(0);

  const [hover,   setHover]   = useState(false);
  const [hidden,  setHidden]  = useState(false);
  const [click,   setClick]   = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }

      // Check for interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        el?.tagName === "A" ||
        el?.tagName === "BUTTON" ||
        el?.tagName === "INPUT" ||
        el?.tagName === "TEXTAREA" ||
        !!el?.closest("a") ||
        !!el?.closest("button");
      setHover(isInteractive ?? false);
    };

    const animate = () => {
      // Ring follows with smooth lag
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;

      if (ringRef.current) {
        const size = hover ? 44 : 28;
        ringRef.current.style.transform =
          `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.width  = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const onDown  = () => setClick(true);
    const onUp    = () => setClick(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove",   onMove,  { passive: true });
    window.addEventListener("mousedown",   onDown);
    window.addEventListener("mouseup",     onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mousedown",   onDown);
      window.removeEventListener("mouseup",     onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [hover]);

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width:  28,
          height: 28,
          borderRadius: "50%",
          border: hover
            ? "1.5px solid rgba(139,92,246,0.75)"
            : "1.5px solid rgba(59,130,246,0.6)",
          background: hover
            ? "rgba(139,92,246,0.06)"
            : "rgba(59,130,246,0.04)",
          opacity: hidden ? 0 : 1,
          transform: click ? "scale(0.8)" : "scale(1)",
          transition:
            "width 0.22s ease, height 0.22s ease, " +
            "border-color 0.22s, background 0.22s, " +
            "opacity 0.25s, transform 0.12s",
        }}
      />

      {/* Sharp dot — snaps to cursor */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width:  6,
          height: 6,
          borderRadius: "50%",
          background: hover ? "#a78bfa" : "#60a5fa",
          opacity: hidden ? 0 : 1,
          transform: click ? "scale(1.6)" : "scale(1)",
          transition:
            "background 0.22s, opacity 0.25s, transform 0.12s",
        }}
      />
    </>
  );
}

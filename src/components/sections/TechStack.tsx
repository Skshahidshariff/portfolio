"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACK_ICONS } from "@/lib/constants";

export default function TechStack() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="techstack" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 55%, rgba(139,92,246,0.038) 0%, transparent 60%)",
      }} />

      <div
        style={{
          width: "100%", maxWidth: 900, margin: "0 auto",
          paddingLeft: "1.75rem", paddingRight: "1.75rem",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="section-eyebrow">07 / Stack</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: "0.7rem" }}>
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.92rem" }}>
            Tools and technologies in my toolbox
          </p>
        </motion.div>

        {/* Pills */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "center",
          gap: "0.65rem",
        }}>
          {TECH_STACK_ICONS.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.32, delay: i * 0.035, type: "spring", stiffness: 260, damping: 22 }}
              whileHover={{ scale: 1.1, y: -4, boxShadow: `0 0 18px ${tech.color}40` }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.55rem 1rem",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                animation: `float ${4.5 + (i % 4)}s ease-in-out infinite ${(i * 0.38) % 2}s`,
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
                background: tech.color,
                boxShadow: `0 0 6px ${tech.color}80`,
              }} />
              <span style={{
                fontSize: "0.82rem", fontWeight: 500,
                color: "rgba(255,255,255,0.62)",
                whiteSpace: "nowrap",
              }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

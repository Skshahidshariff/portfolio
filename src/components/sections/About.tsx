"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Smartphone, Database, Brain, Wrench, Star } from "lucide-react";
import { PERSONAL, STATS } from "@/lib/constants";

const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } as never },
};

const stagger: Variants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } as never },
};

function Stat({ label, value, suffix }: { label: string; value: string; suffix: string }) {
  return (
    <motion.div
      variants={child}
      className="glass-card"
      style={{ padding: "1.4rem 1rem", textAlign: "center" }}
    >
      <div className="gradient-text" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>
        {value}{suffix}
      </div>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: "0.45rem" }}>
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      {/* BG tint */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 25% 55%, rgba(139,92,246,0.045) 0%, transparent 65%)",
      }} />

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-eyebrow">01 / About</span>
          <h2 style={{
            fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)",
            fontWeight: 700, color: "#fff", lineHeight: 1.18,
          }}>
            Crafting Elegant
            <span className="gradient-text"> Mobile Experiences</span>
          </h2>
        </motion.div>

        {/* Two-column */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
            <motion.div variants={child}>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.72, marginBottom: "1rem" }}>
                {PERSONAL.bio}
              </p>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.92rem", lineHeight: 1.72 }}>
                Pursuing B.Tech in Computer Science at{" "}
                <span style={{ color: "rgba(255,255,255,0.65)" }}>Aditya Engineering College</span>{" "}
                (2022–2026), blending academic rigour with real-world engineering — from real-time
                vehicle tracking to ML-powered cardiac diagnostics.
              </p>
            </motion.div>

            {/* Cert badges */}
            <motion.div variants={child} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["ServiceNow CSA", "ServiceNow CAD", "Java Certified", "C Certified"].map((c) => (
                <span
                  key={c}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.72rem", fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <Star size={9} color="#60a5fa" />
                  {c}
                </span>
              ))}
            </motion.div>

            {/* Trait pills */}
            <motion.div variants={child} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem",
            }}>
              {[
                { icon: Smartphone, label: "Cross-Platform Dev" },
                { icon: Database,   label: "Firebase Expert"   },
                { icon: Brain,      label: "ML Practitioner"   },
                { icon: Wrench,     label: "Clean Architecture"},
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.65rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "0.75rem",
                  }}
                >
                  <div style={{
                    width: 28, height: 28, flexShrink: 0,
                    borderRadius: "0.4rem",
                    background: "rgba(59,130,246,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={14} color="#60a5fa" />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.78rem", fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Avatar card */}
            <motion.div
              variants={child}
              className="glass-card"
              style={{ padding: "2.2rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse at 30% 30%, rgba(59,130,246,0.12), transparent 55%)",
              }} />

              {/* Avatar ring */}
              <div style={{
                position: "relative", display: "inline-flex",
                alignItems: "center", justifyContent: "center",
                marginBottom: "1.2rem",
              }}>
                <div style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "50%",
                  border: "2px solid transparent",
                  borderTopColor: "#3b82f6",
                  borderRightColor: "#8b5cf6",
                  borderBottomColor: "#06b6d4",
                  animation: "spin-slow 20s linear infinite",
                }} />
                <div style={{
                  width: 108, height: 108, borderRadius: "50%",
                  background: "linear-gradient(135deg, #1e3a5f, #2d1b69)",
                  boxShadow: "0 0 40px rgba(59,130,246,0.28)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem", fontWeight: 700, color: "#fff",
                  userSelect: "none",
                }}>
                  SS
                </div>
              </div>

              <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", marginBottom: "0.25rem" }}>
                {PERSONAL.name}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.8rem", marginBottom: "0.2rem" }}>
                Flutter Developer · Software Engineer
              </p>
              <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.75rem" }}>
                📍 {PERSONAL.location}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem", marginTop: "1.2rem" }}>
                {["Flutter", "Firebase", "Dart", "ML", "REST APIs"].map((t, i) => (
                  <motion.span
                    key={t}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5 + i * 0.5, ease: "easeInOut", delay: i * 0.35 }}
                    style={{
                      padding: "0.28rem 0.7rem",
                      borderRadius: "999px",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.52)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={stagger}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}
            >
              {STATS.map((s) => <Stat key={s.label} {...s} />)}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 28% 55%, rgba(139,92,246,0.038) 0%, transparent 60%)",
      }} />

      {/* Narrow container for timeline feel */}
      <div
        style={{
          width: "100%",
          maxWidth: 860,
          margin: "0 auto",
          paddingLeft: "1.75rem",
          paddingRight: "1.75rem",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-eyebrow">03 / Experience</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18 }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute", top: 0, bottom: 0, left: 24, width: 1,
              background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)",
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              style={{ position: "relative", paddingLeft: 0, marginBottom: "1.5rem" }}
              className="md:pl-20"
            >
              {/* Dot */}
              <div
                className="hidden md:flex"
                style={{
                  position: "absolute", left: 14, top: 30,
                  width: 22, height: 22, borderRadius: "50%",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 14px rgba(59,130,246,0.5)",
                  alignItems: "center", justifyContent: "center",
                }}
              >
                <Briefcase size={10} color="#fff" />
              </div>

              {/* Card */}
              <div
                className="glass-card glass-card-hover"
                style={{ padding: "1.8rem 2rem" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(59,130,246,0.25)";
                  el.style.boxShadow = "0 0 32px rgba(59,130,246,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top row */}
                <div style={{
                  display: "flex", flexWrap: "wrap",
                  alignItems: "flex-start", justifyContent: "space-between",
                  gap: "1rem", marginBottom: "1.1rem",
                }}>
                  <div>
                    <span style={{
                      display: "inline-block",
                      padding: "0.22rem 0.7rem",
                      borderRadius: "999px",
                      fontSize: "0.68rem", fontWeight: 500,
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      color: "#93c5fd",
                      marginBottom: "0.55rem",
                    }}>
                      {exp.type}
                    </span>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.25 }}>
                      {exp.title}
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginTop: "0.2rem" }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    color: "rgba(255,255,255,0.32)", fontSize: "0.82rem", whiteSpace: "nowrap",
                  }}>
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.68, marginBottom: "1.1rem" }}>
                  {exp.description}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.2rem" }}>
                  {exp.highlights.map((hl) => (
                    <div key={hl} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <CheckCircle2 size={13} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.28rem 0.7rem",
                        borderRadius: "0.45rem",
                        fontSize: "0.72rem", fontWeight: 500,
                        color: "rgba(255,255,255,0.45)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

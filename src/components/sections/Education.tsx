"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div
        style={{
          width: "100%", maxWidth: 860, margin: "0 auto",
          paddingLeft: "1.75rem", paddingRight: "1.75rem",
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
          <span className="section-eyebrow">06 / Education</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18 }}>
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card"
            style={{ padding: "2.2rem 2rem", position: "relative", overflow: "hidden" }}
          >
            {/* Ambient glow */}
            <div style={{
              position: "absolute", top: -60, right: -60,
              width: 240, height: 240, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Top row */}
            <div style={{
              display: "flex", flexWrap: "wrap",
              justifyContent: "space-between", alignItems: "flex-start",
              gap: "1.5rem", marginBottom: "1.6rem",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.1rem" }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "1rem", flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15))",
                  border: "1px solid rgba(59,130,246,0.2)",
                  boxShadow: "0 0 22px rgba(59,130,246,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <GraduationCap size={22} color="#60a5fa" />
                </div>
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "0.22rem 0.65rem",
                    borderRadius: "999px", fontSize: "0.68rem", fontWeight: 500,
                    background: "rgba(16,185,129,0.09)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    color: "#6ee7b7",
                    marginBottom: "0.55rem",
                  }}>
                    {edu.status}
                  </span>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.12rem", lineHeight: 1.25, marginBottom: "0.3rem" }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: "rgba(96,165,250,0.8)", fontSize: "0.88rem", fontWeight: 500 }}>
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* CGPA */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div className="gradient-text" style={{ fontSize: "2.4rem", fontWeight: 700, lineHeight: 1 }}>
                  {edu.cgpa}
                </div>
                <div style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.72rem", marginTop: "0.3rem" }}>
                  CGPA
                </div>
              </div>
            </div>

            {/* Meta */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginBottom: "1.5rem" }}>
              {[
                { icon: Calendar, text: edu.period },
                { icon: MapPin,   text: edu.location },
                { icon: BookOpen, text: "CS & Engineering" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  color: "rgba(255,255,255,0.38)", fontSize: "0.82rem",
                }}>
                  <Icon size={12} />
                  {text}
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0.55rem",
            }}>
              {edu.highlights.map((h) => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <Award size={12} color="#60a5fa" style={{ flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.84rem" }}>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

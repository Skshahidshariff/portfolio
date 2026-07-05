"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Code2, Coffee, Terminal, CheckCircle2 } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Code2, Coffee, Terminal };

export default function Certifications() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 62% 55%, rgba(139,92,246,0.04) 0%, transparent 60%)",
      }} />

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-eyebrow">05 / Certifications</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18 }}>
            Certified <span className="gradient-text">Excellence</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}>
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Shield;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass-card"
                style={{
                  padding: "1.8rem 1.6rem",
                  position: "relative", overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(59,130,246,0.25)";
                  el.style.boxShadow   = "0 0 30px rgba(59,130,246,0.09)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.07)";
                  el.style.boxShadow   = "none";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 44, height: 44,
                  borderRadius: "0.65rem",
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.1rem",
                }}>
                  <Icon size={18} color="#60a5fa" />
                </div>

                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "0.92rem", lineHeight: 1.35, marginBottom: "0.35rem" }}>
                  {cert.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", marginBottom: "0.6rem" }}>
                  {cert.issuer} · {cert.year}
                </p>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", lineHeight: 1.6, marginBottom: "1.1rem" }}>
                  {cert.description}
                </p>

                <span style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  padding: "0.28rem 0.7rem",
                  borderRadius: "999px",
                  fontSize: "0.7rem", fontWeight: 500,
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.15)",
                  color: "#6ee7b7",
                }}>
                  <CheckCircle2 size={10} />
                  Verified
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

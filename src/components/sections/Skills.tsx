"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Code2, Database, Brain, Wrench } from "lucide-react";
import { SKILLS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Smartphone, Code2, Database, Brain, Wrench };

const GRAD: Record<string, { a: string; b: string; glow: string }> = {
  "Mobile & Frameworks":   { a: "#3b82f6", b: "#06b6d4", glow: "rgba(59,130,246,0.15)"  },
  "Languages":             { a: "#8b5cf6", b: "#ec4899", glow: "rgba(139,92,246,0.15)"  },
  "Backend & Database":    { a: "#10b981", b: "#06b6d4", glow: "rgba(16,185,129,0.15)"  },
  "AI & Machine Learning": { a: "#f59e0b", b: "#ef4444", glow: "rgba(245,158,11,0.15)"  },
  "Tools & Workflow":      { a: "#ef4444", b: "#f59e0b", glow: "rgba(239,68,68,0.15)"   },
};

function Bar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.82rem" }}>{name}</span>
        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.72rem", fontFamily: "var(--font-code)" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : {}}
          transition={{ duration: 0.9, delay: delay * 0.06 + 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 72% 50%, rgba(59,130,246,0.038) 0%, transparent 60%)",
      }} />

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-eyebrow">02 / Skills</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18 }}>
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
            A curated set of tools I use to build exceptional digital products.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
          {SKILLS.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code2;
            const g    = GRAD[group.category] ?? GRAD["Mobile & Frameworks"];
            const isHov = hov === group.category;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: gi * 0.06 }}
                onMouseEnter={() => setHov(group.category)}
                onMouseLeave={() => setHov(null)}
                style={{
                  padding: "1.6rem",
                  borderRadius: "1rem",
                  background: isHov ? "rgba(255,255,255,0.042)" : "rgba(255,255,255,0.024)",
                  border: isHov ? `1px solid ${g.a}44` : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isHov ? `0 0 32px ${g.glow}` : "none",
                  transition: "all 0.28s ease",
                  transform: isHov ? "translateY(-3px)" : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Card header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.4rem" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "0.6rem", flexShrink: 0,
                    background: `${g.a}18`,
                    border: `1px solid ${g.a}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={16} color={g.a} />
                  </div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.85rem", fontWeight: 600 }}>
                      {group.category}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.7rem" }}>
                      {group.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {group.skills.map((s, si) => (
                    <Bar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={g.a}
                      delay={gi * group.skills.length + si}
                    />
                  ))}
                </div>

                {/* Bottom accent */}
                <div style={{
                  position: "absolute", bottom: 0, left: "1.6rem", right: "1.6rem",
                  height: 1, borderRadius: 1,
                  background: `linear-gradient(90deg, transparent, ${g.a}, transparent)`,
                  opacity: isHov ? 0.4 : 0,
                  transition: "opacity 0.3s",
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, ExternalLink, Dumbbell, MapPin, Globe, Heart, Star } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Dumbbell, MapPin, Globe, Heart };

const CATS = ["All", "Mobile App", "Community Platform", "AI / ML"];

const TINTS: Record<string, { bg: string; glow: string }> = {
  "fitness-club": { bg: "rgba(59,130,246,0.14)",  glow: "rgba(59,130,246,0.22)"  },
  "car-tracking": { bg: "rgba(16,185,129,0.14)",  glow: "rgba(16,185,129,0.22)"  },
  "flutterverse": { bg: "rgba(139,92,246,0.14)",  glow: "rgba(139,92,246,0.22)"  },
  "ecg-analyzer": { bg: "rgba(239,68,68,0.14)",   glow: "rgba(239,68,68,0.22)"   },
};

function Card({ project }: { project: (typeof PROJECTS)[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov,  setHov]  = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = iconMap[project.icon] || Globe;
  const t    = TINTS[project.id] ?? TINTS["fitness-club"];

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r  = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 9;
    const y = -((e.clientY - r.top)  / r.height - 0.5) * 9;
    setTilt({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }); }}
      style={{
        perspective: "1000px",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: "1rem",
          background: "rgba(255,255,255,0.025)",
          border: hov ? `1px solid ${t.glow.replace("0.22", "0.35")}` : "1px solid rgba(255,255,255,0.06)",
          boxShadow: hov ? `0 24px 60px rgba(0,0,0,0.4), 0 0 36px ${t.glow}` : "none",
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: hov ? "transform 0.08s, border-color 0.3s, box-shadow 0.3s"
                          : "transform 0.4s,  border-color 0.3s, box-shadow 0.3s",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Visual header */}
        <div style={{
          position: "relative", height: 152, flexShrink: 0,
          background: "#0a0c18",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(135deg, ${t.bg}, transparent)`,
          }} />
          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.15,
          }} />

          <motion.div
            animate={hov ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            style={{
              position: "relative",
              width: 56, height: 56, borderRadius: "1rem",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <Icon size={24} color="rgba(255,255,255,0.8)" />
          </motion.div>

          <span style={{
            position: "absolute", top: 10, right: 10,
            padding: "0.22rem 0.6rem",
            borderRadius: "999px", fontSize: "0.65rem",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            {project.category}
          </span>
          <span style={{
            position: "absolute", top: 10, left: 10,
            fontSize: "0.65rem", color: "rgba(255,255,255,0.28)",
            fontFamily: "var(--font-code)",
          }}>
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div style={{
          display: "flex", flexDirection: "column", flex: 1,
          padding: "1.4rem 1.4rem 1.4rem",
        }}>
          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: "0.55rem", lineHeight: 1.3 }}>
            {project.title}
          </h3>
          <p style={{
            color: "rgba(255,255,255,0.42)", fontSize: "0.84rem",
            lineHeight: 1.65, marginBottom: "1rem",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.9rem" }}>
            {project.highlights.map((h) => (
              <span key={h} style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                padding: "0.22rem 0.6rem",
                borderRadius: "0.4rem", fontSize: "0.68rem", fontWeight: 500,
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.15)",
                color: "#93c5fd",
              }}>
                <Star size={8} />
                {h}
              </span>
            ))}
          </div>

          {/* Tech */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.2rem" }}>
            {project.tech.map((tch) => (
              <span key={tch} style={{
                padding: "0.18rem 0.55rem",
                borderRadius: "0.35rem", fontSize: "0.68rem",
                color: "rgba(255,255,255,0.38)",
                background: "rgba(255,255,255,0.032)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                {tch}
              </span>
            ))}
          </div>

          {/* Action buttons — pushed to bottom */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginTop: "auto" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-subtle"
              style={{ padding: "0.5rem 1rem", fontSize: "0.78rem" }}
            >
              <GitBranch size={13} />
              Code
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "0.5rem 1rem", fontSize: "0.78rem" }}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            ) : (
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>
                Private Repo
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 28%, rgba(59,130,246,0.038) 0%, transparent 60%)",
      }} />

      <div className="page-container" style={{ position: "relative" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span className="section-eyebrow">04 / Projects</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: "0.8rem" }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.95rem", maxWidth: 440, margin: "0 auto" }}>
            Real-world applications crafted with performance and elegance.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
          style={{
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "center",
            gap: "0.5rem", marginBottom: "2.5rem",
          }}
        >
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                padding: "0.45rem 1.1rem",
                fontSize: "0.82rem",
                background: filter === cat
                  ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                  : "rgba(255,255,255,0.04)",
                border: filter === cat ? "none" : "1px solid rgba(255,255,255,0.08)",
                color: filter === cat ? "#fff" : "rgba(255,255,255,0.45)",
                fontWeight: filter === cat ? 600 : 400,
                borderRadius: "999px",
                minWidth: "auto",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.2rem",
          alignItems: "start",
        }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{ height: "100%" }}
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

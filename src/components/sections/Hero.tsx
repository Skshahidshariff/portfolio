"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link, Mail, Download, ArrowDown, MapPin, Sparkles } from "lucide-react";
import ParticleField from "@/components/effects/ParticleField";
import { PERSONAL } from "@/lib/constants";

const ROLES = [
  "Flutter Developer",
  "Mobile App Engineer",
  "Software Engineer",
  "CS Undergraduate",
];

function useTypewriter(words: string[], typeMs = 80, deleteMs = 42, pauseMs = 2200) {
  const [text,      setText]      = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words, typeMs, deleteMs, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <ParticleField />

      {/* Aurora blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute",
          width: 640, height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, #3b82f6 0%, #8b5cf6 60%, transparent 100%)",
          filter: "blur(120px)",
          opacity: 0.07,
          top: "-15%", left: "-10%",
          animation: "aurora 28s linear infinite",
        }} />
        <div style={{
          position: "absolute",
          width: 520, height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, #06b6d4 0%, #8b5cf6 60%, transparent 100%)",
          filter: "blur(100px)",
          opacity: 0.06,
          bottom: "-10%", right: "-8%",
          animation: "aurora 22s linear infinite reverse",
        }} />
      </div>

      {/* Dot-grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      }} />

      {/* ── Content ── */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "0 1.75rem",
      }}>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.55 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            fontSize: "0.72rem",
            fontWeight: 500,
            color: "rgba(147,197,253,0.9)",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.22)",
            marginBottom: "2rem",
          }}
        >
          <span style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "#4ade80",
            animation: "pulse-dot 2s ease-in-out infinite",
            flexShrink: 0,
          }} />
          Available for opportunities
          <Sparkles size={11} />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.7 }}
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          <span style={{ display: "block" }}>Shaik</span>
          <span className="gradient-text" style={{ display: "block" }}>Shahid Shariff</span>
        </motion.h1>

        {/* Typing line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.85, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "2.4rem",
            marginBottom: "1.1rem",
            gap: "2px",
          }}
        >
          <span style={{
            fontSize: "clamp(1rem, 2.4vw, 1.4rem)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.65)",
          }}>
            {typed}
          </span>
          <span style={{
            fontSize: "clamp(1rem, 2.4vw, 1.4rem)",
            color: "#60a5fa",
            animation: "blink 1s step-end infinite",
          }}>|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 0.5 }}
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "rgba(255,255,255,0.38)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "0.6rem",
          }}
        >
          {PERSONAL.tagline}
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.05, duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "rgba(255,255,255,0.28)",
            fontSize: "0.82rem",
            marginBottom: "2.5rem",
          }}
        >
          <MapPin size={12} />
          {PERSONAL.location}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.15, duration: 0.5 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-primary"
          >
            View Projects
            <ArrowDown size={14} />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn btn-ghost"
          >
            Hire Me
          </a>

          <a
            href={PERSONAL.resumeUrl}
            download
            className="btn btn-subtle"
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.28, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          {[
            { icon: GitBranch, href: PERSONAL.github,              label: "GitHub" },
            { icon: Link,      href: PERSONAL.linkedin,            label: "LinkedIn" },
            { icon: Mail,      href: `mailto:${PERSONAL.email}`,   label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="btn btn-icon btn-subtle"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span style={{
          fontSize: "0.6rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.18)",
          fontFamily: "var(--font-code)",
        }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 32,
            borderRadius: 1,
            background: "linear-gradient(to bottom, rgba(59,130,246,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

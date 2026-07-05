"use client";

import { motion } from "framer-motion";
import { GitBranch, Link, Mail, Heart, Command } from "lucide-react";
import { PERSONAL, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      position: "relative",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      paddingTop: "3rem",
      paddingBottom: "2.5rem",
    }}>
      {/* BG glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.04) 0%, transparent 65%)",
      }} />

      <div
        style={{
          position: "relative",
          width: "100%", maxWidth: 1160,
          margin: "0 auto",
          paddingLeft: "1.75rem", paddingRight: "1.75rem",
        }}
      >
        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "0.75rem" }}>
              <div style={{
                width: 32, height: 32, borderRadius: "0.5rem",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.7rem", fontWeight: 700, color: "#fff",
              }}>
                SS
              </div>
              <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.78)", fontSize: "0.9rem" }}>
                Shahid<span style={{ color: "#60a5fa" }}>.</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", lineHeight: 1.65, maxWidth: 220 }}>
              Flutter Developer & Software Engineer crafting elegant mobile experiences.
              Based in Rajahmundry, India.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h4 style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: "0.65rem", fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Navigation
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 1rem" }}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "none", border: "none", padding: 0,
                    textAlign: "left",
                    color: "rgba(255,255,255,0.32)",
                    fontSize: "0.8rem",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.32)")}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: "0.65rem", fontWeight: 600,
              letterSpacing: "0.16em", textTransform: "uppercase",
              marginBottom: "1rem",
            }}>
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[
                { icon: GitBranch, label: "GitHub",   href: PERSONAL.github },
                { icon: Link,      label: "LinkedIn", href: PERSONAL.linkedin },
                { icon: Mail,      label: "Email",    href: `mailto:${PERSONAL.email}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.55rem",
                    color: "rgba(255,255,255,0.32)",
                    fontSize: "0.8rem", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "0.75rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          <p style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            color: "rgba(255,255,255,0.22)", fontSize: "0.78rem",
          }}>
            Built with{" "}
            <Heart size={11} color="#f87171" fill="#f87171" />
            {" "}by {PERSONAL.name} · {year}
          </p>

          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            color: "rgba(255,255,255,0.18)", fontSize: "0.72rem",
            fontFamily: "var(--font-code)",
          }}>
            <Command size={10} />
            K — Command palette
          </span>

          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.72rem" }}>
            Next.js · Framer Motion · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

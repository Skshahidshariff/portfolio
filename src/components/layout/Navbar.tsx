"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_ITEMS, PERSONAL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [active,      setActive]      = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.35, rootMargin: "-72px 0px 0px 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(5,5,10,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        <div style={{
          width: "100%",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 1.75rem",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <div style={{
              width: 32, height: 32,
              borderRadius: "0.5rem",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.7rem", fontWeight: 700, color: "#fff",
              flexShrink: 0,
            }}>
              SS
            </div>
            <span style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              whiteSpace: "nowrap",
            }}>
              Shahid<span style={{ color: "#60a5fa" }}>.</span>
            </span>
          </button>

          {/* Desktop nav links */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            // hide on mobile
          }} className="hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                style={{
                  position: "relative",
                  padding: "0.45rem 0.85rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: active === item.href ? 500 : 400,
                  color: active === item.href ? "#fff" : "rgba(255,255,255,0.48)",
                  background: "none",
                  border: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                }}
              >
                {active === item.href && (
                  <motion.div
                    layoutId="nav-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "0.5rem",
                      background: "rgba(59,130,246,0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span style={{ position: "relative" }}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Resume button */}
          <div className="hidden md:flex" style={{ alignItems: "center" }}>
            <a
              href={PERSONAL.resumeUrl}
              download
              className="btn btn-primary"
              style={{ padding: "0.5rem 1.1rem", fontSize: "0.82rem" }}
            >
              <Download size={13} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.6)",
              padding: "0.35rem",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              top: 64, left: 0, right: 0,
              zIndex: 99,
              background: "rgba(5,5,10,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "1rem",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.85rem 1.75rem",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.58)",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.58)";
                  (e.currentTarget as HTMLButtonElement).style.background = "none";
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ padding: "0.75rem 1.75rem 0" }}>
              <a
                href={PERSONAL.resumeUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

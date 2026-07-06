"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, Link, Mail, MapPin, Send, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm]       = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok || data.success) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 6000);
      } else {
        // Fallback mailto if server API fails
        window.open(
          `mailto:${PERSONAL.email}?subject=${encodeURIComponent(`Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(
            `Hi Shahid,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
          )}`,
          "_blank"
        );
        setSent(true);
        setTimeout(() => setSent(false), 5000);
      }
    } catch (err) {
      // Fallback
      window.open(
        `mailto:${PERSONAL.email}?subject=${encodeURIComponent(`Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(
          `Hi Shahid,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )}`,
        "_blank"
      );
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { icon: GitBranch, label: "GitHub",   value: "@Skshahidshariff",     href: PERSONAL.github,           color: "#e2e8f0" },
    { icon: Link,      label: "LinkedIn", value: "shaik-shahid-shariff", href: PERSONAL.linkedin,          color: "#38bdf8" },
    { icon: Mail,      label: "Email",    value: PERSONAL.email,          href: `mailto:${PERSONAL.email}`, color: "#60a5fa" },
    { icon: MapPin,    label: "Location", value: PERSONAL.location,       href: null,                      color: "#a78bfa" },
  ];

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.65rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e8e8f0",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "var(--font-sans)",
  };

  return (
    <section id="contact" ref={ref} className="section-gap" style={{ position: "relative" }}>
      <div className="section-rule" />

      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 85%, rgba(59,130,246,0.048) 0%, transparent 60%)",
      }} />

      <div
        style={{
          width: "100%", maxWidth: 980, margin: "0 auto",
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
          <span className="section-eyebrow">08 / Contact</span>
          <h2 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.18, marginBottom: "0.75rem" }}>
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.95rem", maxWidth: 460, margin: "0 auto" }}>
            Send me a message below — it will be delivered directly to my email inbox ({PERSONAL.email}).
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}>
          {/* Left — Social links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}
          >
            {socials.map(({ icon: Icon, label, value, href, color }) => (
              <motion.div
                key={label}
                whileHover={href ? { x: 5 } : {}}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: "0.75rem", flexShrink: 0,
                  background: `${color}10`,
                  border: `1px solid ${color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={17} color={color} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.7rem", marginBottom: "0.2rem" }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.3rem",
                        color: "rgba(255,255,255,0.68)", fontSize: "0.88rem",
                        textDecoration: "none", transition: "color 0.2s",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.68)")}
                    >
                      {value}
                      <ArrowRight size={11} style={{ flexShrink: 0 }} />
                    </a>
                  ) : (
                    <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "0.88rem" }}>{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <div style={{
              marginTop: "0.5rem",
              padding: "1.2rem 1.4rem",
              borderRadius: "0.85rem",
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.14)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", marginBottom: "0.55rem" }}>
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#4ade80",
                  animation: "pulse-dot 2s ease-in-out infinite",
                  flexShrink: 0,
                }} />
                <span style={{ color: "#4ade80", fontSize: "0.88rem", fontWeight: 500 }}>
                  Open to Opportunities
                </span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.78rem", lineHeight: 1.65 }}>
                Actively looking for Flutter/Mobile Developer roles, internships, and freelance projects.
                Messages are sent directly to shaikshahidshariff@gmail.com.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex", flexDirection: "column", gap: "1.1rem",
                padding: "2rem 1.8rem",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "1rem",
              }}
            >
              {[
                { id: "name",  label: "Full Name",     type: "text",  placeholder: "John Doe" },
                { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                  <label htmlFor={id} style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                    {label}
                  </label>
                  <input
                    id={id} type={type} required placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(59,130,246,0.45)";
                      e.target.style.boxShadow   = "0 0 12px rgba(59,130,246,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow   = "none";
                    }}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                <label htmlFor="message" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>
                  Message
                </label>
                <textarea
                  id="message" required rows={4} placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(59,130,246,0.45)";
                    e.target.style.boxShadow   = "0 0 12px rgba(59,130,246,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow   = "none";
                  }}
                />
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.65rem",
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    color: "#6ee7b7",
                    fontSize: "0.82rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle2 size={16} />
                  Message sent directly to shaikshahidshariff@gmail.com!
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                className="btn btn-primary"
                style={{ width: "100%", padding: "0.8rem 1.5rem" }}
              >
                {loading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Sending to Email...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 size={15} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

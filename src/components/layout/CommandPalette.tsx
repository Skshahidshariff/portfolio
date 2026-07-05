"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, User, Code2, Briefcase, FolderOpen, Award,
  GraduationCap, Mail, Download, GitBranch, Link, Send, Command, X
} from "lucide-react";
import { COMMAND_ITEMS, PERSONAL } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  User, Code2, Briefcase, FolderOpen, Award, GraduationCap,
  Mail, Download, Github: GitBranch, Linkedin: Link, Send,
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = COMMAND_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("mailto:") || href.startsWith("http")) {
      window.open(href, "_blank");
    } else {
      window.open(href, "_blank");
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Trigger hint */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/40 transition-all hover:text-white/70"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
        aria-label="Open command palette"
      >
        <Command size={12} />
        <span>K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9991] w-full max-w-lg rounded-2xl overflow-hidden"
              style={{
                background: "rgba(10,10,20,0.95)",
                border: "1px solid rgba(59,130,246,0.25)",
                boxShadow: "0 0 0 1px rgba(59,130,246,0.1), 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.1)",
              }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                <Search size={16} className="text-white/40 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search commands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white/90 text-sm outline-none placeholder:text-white/25"
                />
                <button
                  onClick={() => { setOpen(false); setQuery(""); }}
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Results */}
              <div className="py-2 max-h-72 overflow-y-auto">
                {filtered.length === 0 ? (
                  <p className="text-center text-white/30 text-sm py-6">No results found</p>
                ) : (
                  filtered.map((item, i) => {
                    const Icon = iconMap[item.icon] || Command;
                    return (
                      <button
                        key={item.label}
                        onClick={() => handleSelect(item.href)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all group hover:bg-white/[0.04]"
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.15)" }}
                        >
                          <Icon size={14} className="text-blue-400" />
                        </div>
                        <span className="text-white/70 text-sm group-hover:text-white/95 transition-colors">
                          {item.label}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white/[0.06] px-4 py-2 flex items-center gap-4 text-white/25 text-xs">
                <span className="flex items-center gap-1"><kbd className="font-mono">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="font-mono">↵</kbd> open</span>
                <span className="flex items-center gap-1"><kbd className="font-mono">esc</kbd> close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

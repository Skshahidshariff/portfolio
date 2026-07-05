"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, Star, GitFork, Activity, Code2, Users, BookOpen } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
}

export default function GitHubStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [ghData, setGhData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSONAL.githubUsername}`)
      .then((r) => r.json())
      .then((d) => setGhData(d))
      .catch(() => {});
  }, []);

  const stats = [
    {
      icon: BookOpen,
      label: "Public Repos",
      value: ghData?.public_repos ?? "—",
      color: "#3b82f6",
    },
    {
      icon: Users,
      label: "Followers",
      value: ghData?.followers ?? "—",
      color: "#8b5cf6",
    },
    {
      icon: Activity,
      label: "Following",
      value: ghData?.following ?? "—",
      color: "#06b6d4",
    },
    {
      icon: Code2,
      label: "Languages",
      value: "5+",
      color: "#10b981",
    },
  ];

  return (
    <section id="github" ref={ref} className="relative py-28 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-blue-400/70 tracking-widest uppercase mb-3 block">
            07 / GitHub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            GitHub
            <span className="gradient-text"> Statistics</span>
          </h2>
          <p className="text-white/40 mt-4 text-base">Open source contributions & activity</p>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-5 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: `${stat.color}15`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <Icon size={16} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/35 text-xs">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub cards via shields.io / github-readme-stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
        >
          {/* Stats card */}
          <div
            className="p-4 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${PERSONAL.githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=818cf8&text_color=94a3b8&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </div>

          {/* Streak */}
          <div
            className="p-4 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${PERSONAL.githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=60a5fa&text_color=94a3b8&bg_color=00000000&langs_count=6`}
              alt="Top Languages"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <GitBranch size={15} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

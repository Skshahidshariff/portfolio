"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#050508" }}
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
              style={{
                background: "radial-gradient(circle, #3b82f6, transparent)",
                top: "20%",
                left: "30%",
                animation: "aurora 8s linear infinite",
              }}
            />
            <div
              className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
              style={{
                background: "radial-gradient(circle, #8b5cf6, transparent)",
                bottom: "20%",
                right: "30%",
                animation: "aurora 10s linear infinite reverse",
              }}
            />
          </div>

          {/* Logo / initials */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative mb-10"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 60px rgba(59,130,246,0.4)",
              }}
            >
              SS
            </div>
            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-2xl"
              style={{
                border: "2px solid transparent",
                borderTopColor: "#3b82f6",
                borderRightColor: "#8b5cf6",
              }}
            />
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm font-mono mb-8 tracking-widest uppercase"
          >
            Shaik Shahid Shariff
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 8px rgba(59,130,246,0.8)",
                transition: "width 0.1s ease",
              }}
            />
          </div>
          <p className="text-white/30 text-xs font-mono mt-3">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

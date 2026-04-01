"use client";

import { motion } from "framer-motion";

interface GlowOrbsProps {
  variant?: "hero" | "section";
}

export default function GlowOrbs({ variant = "hero" }: GlowOrbsProps) {
  if (variant === "hero") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large blue orb - top right */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent-primary/[0.07] blur-[120px]"
        />
        {/* Purple orb - bottom left */}
        <motion.div
          animate={{
            x: [0, -30, 40, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[120px]"
        />
        {/* Small warm accent - center */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-accent-warm/[0.03] blur-[100px]"
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 right-0 h-[300px] w-[300px] rounded-full bg-accent-primary/[0.04] blur-[100px]"
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Hexagon border - blockchain themed */}
      <motion.path
        d="M50 2 L93 27 L93 73 L50 98 L7 73 L7 27 Z"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* Inner glow fill */}
      <path
        d="M50 2 L93 27 L93 73 L50 98 L7 73 L7 27 Z"
        fill="url(#logoFill)"
        opacity="0.08"
      />
      {/* Letter P - first */}
      <text
        x="28"
        y="68"
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="42"
        fontWeight="700"
        fill="url(#textGradient)"
      >
        P
      </text>
      {/* Letter P - second, slightly overlapping */}
      <text
        x="52"
        y="68"
        fontFamily="var(--font-jetbrains), monospace"
        fontSize="42"
        fontWeight="700"
        fill="#E8E8ED"
        opacity="0.7"
      >
        P
      </text>
      {/* Dot accent */}
      <circle cx="82" cy="72" r="4" fill="#3B82F6" />

      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="logoFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8ED" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

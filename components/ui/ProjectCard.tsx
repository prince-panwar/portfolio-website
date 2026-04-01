"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useTilt } from "@/hooks/useTilt";
import type { Project } from "@/lib/data";

export default function ProjectCard({ title, description, tags, github, live }: Project) {
  const tiltRef = useTilt(8);

  return (
    <div
      ref={tiltRef}
      style={{ willChange: "transform", transition: "transform 0.4s ease-out" }}
      className="group relative flex h-full flex-col rounded-xl border border-border-subtle bg-bg-secondary p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent-primary/40 shimmer-border glow-hover"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent-primary/0 to-transparent transition-all duration-500 group-hover:via-accent-primary/50" />

      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex gap-3">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-text-tertiary hover:text-accent-primary transition-colors"
            aria-label={`${title} GitHub repository`}
          >
            <FiGithub size={18} />
          </motion.a>
          {live && (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-text-tertiary hover:text-accent-primary transition-colors"
              aria-label={`${title} live demo`}
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bg-tertiary px-2.5 py-1 text-xs font-mono text-text-tertiary transition-colors duration-300 group-hover:text-accent-secondary/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

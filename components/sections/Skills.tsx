"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 section-glow-top overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading title="Skills" subtitle="Technologies I work with." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl border bg-bg-secondary p-6 transition-all duration-300 glow-hover ${
                i === 0
                  ? "border-accent-primary/30"
                  : "border-border-subtle hover:border-border-visible"
              }`}
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent-primary">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.03, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="cursor-default rounded-full border border-border-visible bg-bg-tertiary px-3 py-1.5 text-sm text-text-secondary transition-all duration-300 hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

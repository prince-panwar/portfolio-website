"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 section-glow-top overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent-primary/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

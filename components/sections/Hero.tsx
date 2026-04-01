"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from "react-icons/fi";
import { socialLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";
import GlowOrbs from "@/components/ui/GlowOrbs";
import TextScramble from "@/components/ui/TextScramble";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Animated glow orbs */}
      <GlowOrbs variant="hero" />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08)_0%,transparent_50%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm text-accent-primary"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
        >
          <span className="gradient-text">Prince Panwar</span>
          <span className="text-accent-primary">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 text-2xl font-bold text-text-secondary sm:text-3xl md:text-4xl"
        >
          <TextScramble text="Blockchain Developer" delay={1200} />
        </motion.h2>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-text-secondary leading-relaxed"
        >
          I build decentralized applications and smart contracts. Currently at{" "}
          <span className="text-accent-primary font-medium">
            Webmob Software Solutions
          </span>
          , integrating DeFi protocols and engineering full-stack Web3 solutions.
          Based in Germany.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex justify-center gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-5"
        >
          {[
            { href: socialLinks.github, icon: FiGithub, label: "GitHub" },
            { href: socialLinks.linkedin, icon: FiLinkedin, label: "LinkedIn" },
            { href: socialLinks.twitter, icon: FiTwitter, label: "Twitter" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-text-tertiary transition-colors hover:text-accent-primary"
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-tertiary transition-colors hover:text-accent-primary"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}

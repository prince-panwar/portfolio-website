"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowOrbs from "@/components/ui/GlowOrbs";

export default function About() {
  return (
    <section id="about" className="relative py-24 section-glow-top overflow-hidden">
      <GlowOrbs variant="section" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading title="About Me" />

        <div className="grid gap-12 md:grid-cols-5">
          <AnimatedSection delay={0.1} className="md:col-span-3 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              I&apos;m a Blockchain Developer with a strong focus on building
              decentralized applications and integrating DeFi protocols. I
              specialize in{" "}
              <span className="text-text-primary font-medium">Solidity</span>,{" "}
              <span className="text-text-primary font-medium">NestJS</span>,
              and{" "}
              <span className="text-text-primary font-medium">
                full-stack Web3 development
              </span>
              .
            </p>
            <p className="text-text-secondary leading-relaxed">
              Currently at{" "}
              <span className="text-accent-primary font-medium">
                Webmob Software Solutions
              </span>{" "}
              in Germany, I architect APIs that bridge frontend interfaces with
              complex DeFi smart contracts, integrating protocols like Uniswap,
              Aave, and Compound. Previously at Plena Finance, I led the
              integration of their crypto wallet into 40+ partner platforms.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I hold a B.E. in Computer Science from Chandigarh University
              (2025). Beyond blockchain, I enjoy exploring AI integrations and
              building automation tools — from healthcare chatbots to automated
              content pipelines.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative mx-auto w-64 md:w-full"
            >
              <div className="overflow-hidden rounded-xl border-2 border-border-visible transition-all duration-500 hover:border-accent-primary/50 glow-hover">
                <Image
                  src="/Prince.jpg"
                  alt="Prince Panwar"
                  width={400}
                  height={500}
                  className="h-auto w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  priority
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border-2 border-accent-primary/20" />
              {/* Glow behind image */}
              <div className="absolute inset-0 -z-20 rounded-xl bg-accent-primary/10 blur-2xl" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

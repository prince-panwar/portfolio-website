"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { socialLinks } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 section-glow-top overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent-primary/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <SectionHeading title="Get in Touch" />

        <AnimatedSection delay={0.1} className="mx-auto max-w-lg">
          <p className="mb-8 text-text-secondary leading-relaxed">
            I&apos;m currently open to blockchain developer opportunities in
            Germany. Whether you have a question or just want to say hello, feel
            free to reach out.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mb-8 inline-block"
          >
            <Button href={socialLinks.email} variant="primary" external>
              <FiMail size={16} />
              Say Hello
            </Button>
          </motion.div>

          <div className="flex justify-center gap-6">
            {[
              { href: socialLinks.github, icon: FiGithub, label: "GitHub" },
              { href: socialLinks.linkedin, icon: FiLinkedin, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-accent-primary"
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

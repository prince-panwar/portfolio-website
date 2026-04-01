import type { Experience } from "@/lib/data";
import AnimatedSection from "./AnimatedSection";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const { company, role, period, location, bullets, type } = experience;

  return (
    <AnimatedSection delay={index * 0.15} className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border-visible last:bg-transparent" />
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 ${
          type === "work"
            ? "border-accent-primary bg-accent-primary"
            : "border-accent-warm bg-accent-warm"
        }`}
      />

      <div className="rounded-lg border border-border-subtle bg-bg-secondary p-5 transition-all duration-300 hover:border-border-visible">
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-text-primary">{company}</h3>
          {location && (
            <span className="text-xs text-text-tertiary font-mono">{location}</span>
          )}
        </div>
        <p className="text-accent-primary font-medium text-sm">{role}</p>
        <p className="mt-1 text-xs font-mono text-text-tertiary">{period}</p>
        {bullets.length > 0 && (
          <ul className="mt-3 space-y-2">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm text-text-secondary leading-relaxed"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary/50" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedSection>
  );
}

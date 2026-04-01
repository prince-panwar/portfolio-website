import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 section-glow-top overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-accent-warm/[0.02] blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in blockchain and software development."
        />
        <div className="ml-3 max-w-2xl">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import CountUp from "@/components/ui/CountUp";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative py-16 section-glow-top overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-text-tertiary">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

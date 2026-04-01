import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-12">
      <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
        {title}
        <span className="text-accent-primary">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-accent-primary" />
    </AnimatedSection>
  );
}

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="rounded-full border border-border-visible bg-bg-tertiary px-3 py-1.5 text-sm text-text-secondary transition-all duration-300 hover:border-accent-primary hover:text-accent-primary">
      {name}
    </span>
  );
}

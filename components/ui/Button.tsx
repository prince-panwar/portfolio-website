import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external,
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-accent-primary text-white hover:bg-accent-secondary hover:shadow-lg hover:shadow-accent-primary/20",
    secondary:
      "border border-border-visible text-text-primary hover:border-accent-primary hover:text-accent-primary",
  };

  const props = {
    className: `${base} ${variants[variant]}`,
    ...(external && { target: "_blank", rel: "noopener noreferrer" }),
    ...(download && { download: true }),
  };

  if (external || download) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}

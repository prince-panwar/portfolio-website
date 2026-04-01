import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-tertiary">
          &copy; {new Date().getFullYear()} Prince Panwar
        </p>
        <div className="flex gap-5">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-accent-primary"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-accent-primary"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary transition-colors hover:text-accent-primary"
            aria-label="Twitter"
          >
            <FiTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  type: "work" | "education";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 1300, suffix: "+", label: "BaseScape Users" },
  { value: 40, suffix: "+", label: "Partner Integrations" },
  { value: 6, suffix: "+", label: "Production Projects" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "BaseScape",
    description:
      "ERC-20 staking protocol on Base L2 with secure rewards distribution and lock-up logic. Features defense-in-depth security patterns including Reentrancy Guard, SafeERC20, and Pausable. Successfully deployed with 1,300+ active users.",
    tags: ["Solidity", "JavaScript", "Base L2", "DeFi", "PostgreSQL"],
    github: "https://github.com/prince-panwar/BaseScape",
  },
  {
    title: "NFT Marketplace",
    description:
      "Full-stack NFT marketplace for minting, listing, and trading non-fungible tokens. Includes smart contract backend with ERC-721 support and a React-based frontend interface.",
    tags: ["Solidity", "TypeScript", "React", "Hardhat"],
    github: "https://github.com/prince-panwar/NFT-marketplace",
  },
  {
    title: "CareTaker AI",
    description:
      "AI-powered healthcare chatbot supporting voice and text interactions, built with Groq LLM integration for fast and accurate medical assistance.",
    tags: ["TypeScript", "JavaScript", "AI/LLM", "Groq"],
    github: "https://github.com/prince-panwar/caretaker_ai",
  },
  {
    title: "YouTube Shorts Bot",
    description:
      "Fully automated AI pipeline that discovers trending topics, generates scripts, produces short-form videos, and uploads to YouTube, TikTok & Instagram with zero manual intervention.",
    tags: ["Python", "Docker", "AI", "Automation"],
    github: "https://github.com/prince-panwar/Youtube-shorts-bot",
  },
  {
    title: "Token Vesting Site",
    description:
      "Decentralized platform for creating and managing ERC-20 token vesting schedules with full on-chain transparency and customizable lock-up periods.",
    tags: ["Solidity", "TypeScript", "React", "Ethereum"],
    github: "https://github.com/prince-panwar/TokenVestingSite",
  },
  {
    title: "EIP-2535 Diamond Proxy",
    description:
      "Implementation demo of the Diamond standard (EIP-2535) for upgradeable smart contracts with modular facet architecture, showcasing advanced Solidity patterns.",
    tags: ["Solidity", "EIP-2535", "Advanced Patterns"],
    github: "https://github.com/prince-panwar/EIP-2535-demo",
  },
];

export const experiences: Experience[] = [
  {
    company: "Webmob Software Solutions",
    role: "Blockchain Developer",
    period: "Jan 2025 — Present",
    location: "Germany",
    type: "work",
    bullets: [
      "Architected RESTful APIs using NestJS to bridge frontend interfaces with complex DeFi smart contracts.",
      "Integrated high-volume DeFi protocols including Uniswap, SushiSwap, PancakeSwap, Aave, and Compound.",
      "Implemented staking solutions via Ankr and cross-chain bridging using Across Bridge.",
      "Engineered real-time asset tracking, PnL calculation, and portfolio value visualization.",
    ],
  },
  {
    company: "Plena Finance",
    role: "Blockchain Developer Intern",
    period: "Jan 2024 — Jan 2025",
    location: "Remote",
    type: "work",
    bullets: [
      "Led integration of Plena's crypto wallet into 40+ partner organization websites.",
      "Gained deep expertise in ERC-4337 account abstraction and transaction batching.",
      "Developed custom SDK solutions tailored to partner requirements across diverse platforms.",
      "Provided technical support and documentation to stakeholders for successful product integration.",
    ],
  },
  {
    company: "Chandigarh University",
    role: "B.E. Computer Science",
    period: "Aug 2021 — Aug 2025",
    type: "education",
    bullets: ["CGPA: 7.56"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Blockchain & Smart Contracts",
    skills: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Wagmi",
      "Viem",
      "RainbowKit",
      "IPFS",
      "ERC-20",
      "ERC-721",
      "ERC-1155",
      "ERC-4337",
      "DeFi Protocols",
    ],
  },
  {
    name: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "Express.js",
      "GraphQL",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Linux", "Git", "GitHub", "VS Code"],
  },
];

export interface NavLink {
  id: string;
  label: string;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: {
    name: string;
    level: string; // "Advanced", "Proficient", "Working Knowledge"
    badge?: string;
  }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  architecture?: {
    frontend?: string;
    backend?: string;
    aiService?: string;
    database?: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  isPlaceholder?: boolean;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  cgpa?: string;
  percentage?: string;
  gradeLabel?: string;
  gradeValue?: string;
  expectedGraduation?: string;
  status?: string;
  highlights?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  badge: string;
  position: string;
  description: string;
  keyTakeaways: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  pdfUrl?: string;
  skills?: string[];
  description?: string;
  badge?: string;
  isPlaceholder?: boolean;
}

export interface GithubMetrics {
  username: string;
  totalRepos: number;
  totalCommits: number;
  activeStreak: string;
  primaryLanguages: { name: string; percentage: number; color: string }[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone?: string;
  resumeUrl: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  role: string;
  rolesCycle: string[];
  college: string;
  education: EducationItem[];
  about: {
    paragraphs: string[];
    stats: StatItem[];
    currentFocus: {
      title: string;
      specialization: string;
      location: string;
      status: string;
      items: string[];
    };
  };
  skills: SkillCategory[];
  projects: Project[];
  achievements: AchievementItem[];
  certifications: CertificationItem[];
  github: GithubMetrics;
  socials: SocialLinks;
}


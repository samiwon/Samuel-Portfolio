import type { IconType } from "react-icons";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  organization?: string;
  featured?: boolean;
  badge?: string;
  description: string;
  detailedFeatures?: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  isRepresentativeMockup?: boolean;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  badge?: string;
  highlights?: string[];
  description: string;
  tags?: string[];
}

export interface ProcessStage {
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
}

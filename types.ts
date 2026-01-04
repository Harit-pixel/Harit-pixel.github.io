import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'Software' | 'Hardware' | 'System';
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}
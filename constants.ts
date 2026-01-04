import { 
  Code2, 
  Terminal, 
  Cpu, 
  Server, 
  Database, 
  Globe, 
  Zap,
  Instagram,
  Mail,
  Disc,
  Layers,
  Lock,
  Activity
} from 'lucide-react';
import { Project, Skill, SocialLink } from './types';

export const OWNER_NAME = "Harit Rai";
export const TITLE = "Expert Python Developer";

export const SKILLS: Skill[] = [
  { name: "Python (Advanced)", icon: Code2 },
  { name: "Flask", icon: Server },
  { name: "Licensing Systems", icon: Lock },
  { name: "Hardware (Pico/Arduino)", icon: Cpu },
  { name: "C Language", icon: Terminal },
  { name: "MySQL / Database", icon: Database },
  { name: "Firebase", icon: Globe },
  { name: "API Development", icon: Layers },
  { name: "Automation Tools", icon: Zap },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Remote Licensing System",
    description: "A secure, server-client architecture for validating software licenses in real-time, preventing unauthorized usage.",
    category: "System",
    tech: ["Python", "Flask", "Cryptography", "REST API"],
  },
  {
    id: 2,
    title: "Stock Portfolio Manager",
    description: "Database-driven web application to track real-time investment performance and manage complex portfolios.",
    category: "Software",
    tech: ["Python", "Flask", "MySQL", "Chart.js"],
  },
  {
    id: 3,
    title: "Hardware Control Logic",
    description: "Low-level sensor integration and control logic implementation using Raspberry Pi Pico and Arduino.",
    category: "Hardware",
    tech: ["C++", "MicroPython", "Embedded Systems"],
  },
];

export const TECH_STACK = [
  "Python", "Flask", "MySQL", "Firebase", "C", "Arduino", "Raspberry Pi Pico"
];

export const SOCIALS: SocialLink[] = [
  { name: "Email", url: "mailto:contact@haritrai.dev", icon: Mail },
  { name: "Discord", url: "#", icon: Disc }, // Placeholder URL
  { name: "Instagram", url: "#", icon: Instagram }, // Placeholder URL
];
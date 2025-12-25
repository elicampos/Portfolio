export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills?: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  award?: string;
}

export interface Education {
  school: string;
  degree: string;
  gpa: string;
  graduation: string;
  coursework: string[];
  inProgress: string[];
  additionalClasses: string[];
  memberships: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}
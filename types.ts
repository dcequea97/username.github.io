export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    playStore?: string;
    github?: string;
    source?: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string; // FontAwesome class
  skills: string[];
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export type Language = 'en' | 'es';

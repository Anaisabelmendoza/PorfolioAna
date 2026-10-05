
export interface Experience {
  id: string;
  position: string;
  company: string;
  dates: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  dates: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface Tool {
  name: string;
  icon?: string;
}

export interface Certificate {
  name: string;
  year: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    summary: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    image: string;
    backgroundImage?: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  tools: Tool[];
  certificates: Certificate[];
}

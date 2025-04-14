export interface InfoItem {
  key: string;
  icon: React.ReactNode;
  title: string;
  value: string | React.ReactNode;
}

export interface Project {
  key: string;
  image?: string;
  name: string;
  duration: string;
  description: string;
  technologies: string[];
  repository: string;
  readMore?: string;
  featured: boolean;
}

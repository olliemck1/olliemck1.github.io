export type DrawerId = 
  | 'contact' 
  | 'education' 
  | 'command-centre' 
  | 'c-link-auditor' 
  | 'experience' 
  | 'job-tracker';

export interface TerminalEntry {
  id: string;
  command: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

export interface ProjectDetail {
  id: DrawerId;
  title: string;
  subtitle: string;
  tagline: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecturePoints: string[];
  technicalChallenges: string[];
  metrics?: { label: string; value: string }[];
}

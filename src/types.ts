export interface CaseStudyStep {
  title: string;
  description: string;
  details?: string[];
  codeSnippet?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  techStack: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture: string;
  problem: string;
  architectureSteps: CaseStudyStep[];
  databaseSchema: {
    description: string;
    tables: { name: string; columns: string[] }[];
  };
  apiEndpoints: { method: string; path: string; desc: string }[];
  authDetails: string;
  testingDetails: string;
  deploymentDetails: string;
  workflowSteps?: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'framework' | 'database' | 'devops' | 'tool';
  level: number;
  iconName: string;
  description: string;
}

export interface EndpointTest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  description: string;
  payload?: any;
  response: any;
}


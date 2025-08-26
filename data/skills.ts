// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'ML/Data' 
  | 'Cloud/DevOps' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' }
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' }
  ],
  'ML/Data': [
    { name: 'TensorFlow', category: 'ML/Data', logoKey: 'tensorflow' },
    { name: 'PyTorch', category: 'ML/Data', logoKey: 'pytorch' },
    { name: 'Supervised Learning', category: 'ML/Data', logoKey: 'python' },
    { name: 'Deep Learning', category: 'ML/Data', logoKey: 'tensorflow' },
    { name: 'Neural Networks', category: 'ML/Data', logoKey: 'python' },
    { name: 'pandas', category: 'ML/Data', logoKey: 'pandas' },
    { name: 'scikit-learn', category: 'ML/Data', logoKey: 'python' },
    { name: 'Data Visualization', category: 'ML/Data', logoKey: 'jupyter' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'Kubernetes', category: 'Cloud/DevOps', logoKey: 'kubernetes' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts', logoKey: 'github' },
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
    { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
    { name: 'Security', category: 'Concepts', logoKey: 'github' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};
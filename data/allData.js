import { SkillCategory } from './skillCategory';
import { SiJavascript, SiKubernetes, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPostman, SiVscodium } from 'react-icons/si';
import { FaDatabase, FaCloud, FaCode, FaServer, FaJava, FaMicrochip, FaMicrosoft, FaAws, FaDocker, FaPython, FaGit, FaGithub } from 'react-icons/fa';

export const ProfileData = {
  name: 'Frederick',
  title: 'Full-Stack Software Engineer',
  tagline: 'Specializing in Backend Systems, Databases, and Cloud Solutions.',
  bio: [
    'I am a passionate and results-oriented Full-Stack Software Engineer with a strong emphasis on backend development, robust database architecture, and scalable cloud infrastructure. With expertise in Java, JavaScript (Node.js), and a variety of modern technologies, I thrive on building efficient, reliable, and high-performing applications.',
    'My experience spans across designing and implementing microservices, optimizing database queries, and deploying applications on major cloud platforms. I am committed to continuous learning and applying best practices to solve complex technical challenges.',
  ],
  email: 'fred.dev@example.com',
  linkedinUrl: 'https://www.linkedin.com/in/freddecodes', // Replace with actual link
  githubUrl: 'https://github.com/freddecodes', // Replace with actual link
};

export const Project = [
  {
    id: 1,
    title: 'CloudFlow Orchestrator',
    description:
      'A microservices-based platform for orchestrating complex data processing workflows in the cloud. Features dynamic scaling and real-time monitoring.',
    technologies: [
      'Java',
      'Spring Boot',
      'Kafka',
      'PostgreSQL',
      'AWS (EC2, S3, RDS)',
      'Docker',
      'Kubernetes',
    ],
    imageUrl: 'https://picsum.photos/seed/technology6/600/400',
    githubUrl: 'https://github.com/alexjohnsondev/cloudflow',
    liveUrl: 'https://cloudflow.example.com',
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    description:
      'A web application providing real-time analytics and visualizations for large datasets, utilizing Node.js for backend processing and WebSockets for live updates.',
    technologies: [
      'Node.js',
      'Express.js',
      'React',
      'MongoDB',
      'WebSockets',
      'D3.js',
      'Redis',
    ],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: 'https://github.com/alexjohnsondev/analytics-dashboard',
  },
  {
    id: 3,
    title: 'SecureAuth API Gateway',
    description:
      'An API gateway solution focusing on security, authentication, and authorization for distributed systems. Implemented OAuth 2.0 and JWT for secure access.',
    technologies: [
      'Java',
      'Spring Security',
      'OAuth 2.0',
      'JWT',
      'Consul',
      'API Design',
    ],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 4,
    title: 'Distributed Task Scheduler',
    description:
      'A resilient and scalable task scheduling system designed for distributed environments, ensuring high availability and fault tolerance for critical background jobs.',
    technologies: [
      'Node.js',
      'BullMQ',
      'Redis',
      'TypeScript',
      'Microservices Architecture',
    ],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    githubUrl: 'https://github.com/alexjohnsondev/task-scheduler',
  },
];

export const Experience = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    role: 'Senior Backend Engineer',
    duration: 'Jan 2021 - Present',
    responsibilities: [
      'Led the design and development of core backend services for a flagship SaaS product, serving thousands of concurrent users.',
      'Architected and implemented a scalable microservices infrastructure on AWS, reducing operational costs by 20%.',
      'Optimized database performance, improving query response times by up to 50% for critical operations.',
      'Mentored junior engineers and contributed to establishing best practices for code quality and CI/CD pipelines.',
    ],
    logoUrl: 'https://picsum.photos/seed/company1/50/50',
  },
  {
    id: 2,
    company: 'Innovatech Ltd.',
    role: 'Full-Stack Developer',
    duration: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Developed and maintained full-stack web applications using Java (Spring) and JavaScript (Node.js, React).',
      'Managed database schemas (PostgreSQL, MongoDB) and implemented data migration strategies.',
      'Contributed to the deployment and management of applications on cloud platforms (Azure).',
      'Collaborated with cross-functional teams to deliver new features and enhance existing products.',
    ],
    logoUrl: 'https://picsum.photos/seed/company2/50/50',
  },
  {
    id: 3,
    company: 'Data Systems Co.',
    role: 'Software Engineer Intern',
    duration: 'May 2017 - Aug 2017',
    responsibilities: [
      'Assisted in developing backend APIs for internal data management tools using Node.js.',
      'Participated in database design and wrote SQL queries for data retrieval and analysis.',
      'Gained experience with version control (Git) and agile development methodologies.',
    ],
  },
];

export const NavItem = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export const SkillData = [
  // Languages
  {
    name: 'JavaScript',
    category: 'LANGUAGES',
    icon: SiJavascript,
    level: 5,
  },
  {
    name: 'SQL',
    category: 'LANGUAGES',
    icon: FaDatabase,
    level: 5,
  },
  {
    name: 'Java',
    category: 'LANGUAGES',
    icon: FaJava,
    level: 2,
  },
  {
    name: 'Python',
    category: 'LANGUAGES',
    icon: FaPython,
    level: 2,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'BACKEND',
    icon: SiNodedotjs,
    level: 5,
  },
  {
    name: 'REST APIs',
    category: 'BACKEND',
    icon: FaCode,
    level: 3,
  },
  {
    name: 'Express.js',
    category: 'BACKEND',
    icon: FaServer,
    level: 4,
  },
  {
    name: 'Spring Boot',
    category: 'BACKEND',
    icon: FaJava,
    level: 2,
  },
  {
    name: 'Microservices',
    category: 'BACKEND',
    icon: FaMicrochip, 
    level: 2,
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'DATABASE',
    icon: SiPostgresql,
    level: 4,
  },
  {
    name: 'MongoDB',
    category: 'DATABASE',
    icon: SiMongodb,
    level: 4,
  },
  {
    name: 'MySQL',
    category: 'DATABASE',
    icon: SiMysql,
    level: 4,
  },
  {
    name: 'SQL Server',
    category: 'DATABASE',
    icon: FaDatabase,
    level: 4,
  },

  // Cloud
  { name: 'AWS', category: 'CLOUD', icon: FaAws, level: 2 },
  { name: 'Docker', category: 'CLOUD', icon: FaDocker, level: 2 },
  {
    name: 'Kubernetes',
    category: 'CLOUD',
    icon: SiKubernetes,
    level: 1,
  },
  { name: 'Azure', category: 'CLOUD', icon: FaCloud, level: 1 },

  // Tools
  {
    name: 'Git',
    category: 'TOOLS',
    icon: FaGit,
    level: 4,
  },
  {
    name: 'GitHub',
    category: 'TOOLS',
    icon: FaGithub,
    level: 4,
  },
  { name: 'Postman', category: 'TOOLS', icon: SiPostman, level: 4 },
  { name: 'VS Code', category: 'TOOLS', icon: FaCode, level: 5 },
];

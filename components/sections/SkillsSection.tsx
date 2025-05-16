"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { 
  Code, Database, Server, Globe, Layout, Cpu, 
  GitBranch, Terminal, Layers, Smartphone
} from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  technologies: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["Node.js", "Express.js", "Java", "Spring Boot", "Python", "Django", "RESTful APIs"]
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "Redis"]
  },
  {
    category: "DevOps",
    icon: <GitBranch className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["React Native", "Flutter", "Android Development", "iOS Development"]
  },
  {
    category: "Other",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    technologies: ["UI/UX Design", "Responsive Design", "SEO", "Performance Optimization", "Agile/Scrum"]
  }
];

interface SkillCardProps {
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  index: number;
}

const SkillCard = ({ category, icon, technologies, index }: SkillCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-bold mb-4">{category}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-muted rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks to create robust and scalable applications.
            Here are some of the key skills I've developed throughout my career.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.category} 
              category={skill.category} 
              icon={skill.icon} 
              technologies={skill.technologies}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
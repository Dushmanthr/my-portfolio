"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Travelling Site",
    description: "A comprehensive travel website that allows users to explore destinations, book trips, and share their experiences. Features include user authentication, interactive maps, and a review system.",
    image: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mapbox API"],
    githubUrl: "https://github.com/Dushmanthr/Travelling_Site.git",
    liveUrl: "#"
  },
  {
    title: "BirdWorld Web Admin",
    description: "An administrative dashboard for managing a bird conservation platform. Includes features for tracking bird species, managing conservation efforts, and analyzing data.",
    image: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Angular", "Firebase", "Chart.js", "Material UI", "Node.js"],
    githubUrl: "https://github.com/supunnilakshana/BirdWorld-WebAdmin.git",
    liveUrl: "#"
  },
  {
    title: "Food Order System",
    description: "A full-stack food ordering platform that connects customers with local restaurants. Features include real-time order tracking, payment processing, and restaurant management.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Redux", "Express", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/Dushmanthr/food-order.git",
    liveUrl: "#"
  },
  {
    title: "Tech Blog Platform",
    description: "A modern blogging platform focused on technology topics. Includes features for content creation, user engagement, and analytics.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Vercel", "MDX"],
    githubUrl: "https://medium.com/@dushmanthr",
    liveUrl: "#"
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <Badge key={i} variant="secondary">{tech}</Badge>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <Button asChild variant="outline" size="sm">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different challenges
            and solutions, showcasing my skills and approach to problem-solving.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
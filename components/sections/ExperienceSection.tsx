"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, Award, Calendar
} from 'lucide-react';

const experiences = [
  {
    type: "work",
    title: "Software Engineer",
    organization: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    type: "work",
    title: "Junior Web Developer",
    organization: "Digital Innovations",
    period: "2020 - 2022",
    description: "Worked on front-end development using HTML, CSS, JavaScript, and React. Participated in the full software development lifecycle from concept to deployment.",
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "University of Technology",
    period: "2016 - 2020",
    description: "Studied computer science with a focus on software engineering, database systems, and web development.",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    type: "certification",
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    period: "2023",
    description: "Earned certification demonstrating proficiency in developing, deploying, and debugging cloud-based applications using AWS.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.credly.com/badges/8f5f6747-3222-493f-834b-7f1a45de9935/public_url"
  },
  {
    type: "certification",
    title: "Professional Scrum Master I",
    organization: "Scrum.org",
    period: "2022",
    description: "Certified in Scrum methodologies, demonstrating knowledge of Scrum principles, practices, and application.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.credly.com/badges/bc0aa91c-c56c-4d06-bd16-7915e57e5932?source=linked_in_profile"
  },
  {
    type: "certification",
    title: "React - The Complete Guide",
    organization: "Udemy",
    period: "2021",
    description: "Comprehensive course covering React fundamentals, hooks, Redux, Next.js, and advanced patterns.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.udemy.com/certificate/UC-933e4054-9e93-48e9-b5d1-d8c8a032e111/"
  },
  {
    type: "award",
    title: "MadHack 2021 - 2nd Runner Up",
    organization: "IEEE UCSC",
    period: "2021",
    description: "Awarded 2nd Runner Up at MadHack 2021, a 24-hour hackathon focused on innovative solutions for real-world problems.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.linkedin.com/posts/dushmantha-ranathunga_ieee-ieeeucsc-madhack-activity-6836553901995651072-Agnm?utm_source=share&utm_medium=member_desktop"
  },
  {
    type: "award",
    title: "Best Project Award",
    organization: "IEEE SEDS SABRA",
    period: "2023",
    description: "Received the Best Project Award for developing an innovative solution at the IEEE SEDS SABRA competition.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.linkedin.com/posts/dushmantha-ranathunga_ieee-sedssabra-activity-7104140807430934528-I8nN?utm_source=share&utm_medium=member_desktop"
  },
  {
    type: "award",
    title: "HackX 2023 - Semi-Finalist",
    organization: "UCSC",
    period: "2023",
    description: "Selected as a semi-finalist at HackX 2023, a competitive hackathon organized by the University of Colombo School of Computing.",
    icon: <Award className="h-6 w-6" />,
    link: "https://www.linkedin.com/posts/dushmantha-ranathunga_semi-finalists-in-hackx-2023-organized-activity-7119207174253264896-lSFh?utm_source=share&utm_medium=member_desktop"
  }
];

const TimelineItem = ({ item, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className={`mb-8 flex justify-between items-center w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white">{item.icon}</div>
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`order-1 bg-card rounded-lg shadow-md w-5/12 px-6 py-4`}
      >
        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
        <h4 className="text-sm text-muted-foreground mb-2">{item.organization}</h4>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{item.period}</span>
        </div>
        <p className="text-sm leading-snug tracking-wide text-muted-foreground">
          {item.description}
        </p>
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-primary hover:underline"
          >
            View Certificate/Award
          </a>
        )}
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey, educational background, and notable achievements that have shaped my career.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-4 md:p-10">
          <div className="border-2-2 absolute border-opacity-20 border-primary h-full border left-1/2"></div>
          
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={index} 
              item={experience} 
              index={index} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
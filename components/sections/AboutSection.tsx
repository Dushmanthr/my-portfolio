"use client";

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Dushmantha Ranathunga"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Web Developer & Software Engineer</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate software developer with expertise in web development and software engineering. 
              With a strong foundation in both front-end and back-end technologies, I create robust, 
              scalable applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in software development began during my university studies, where I developed a 
              deep interest in creating digital solutions that solve real-world problems. Since then, 
              I've worked on various projects, continuously expanding my skills and staying updated with 
              the latest technologies and best practices.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in writing clean, maintainable code and following industry standards to ensure 
              the highest quality in every project I undertake. My goal is to create software that not 
              only meets technical requirements but also provides value to users and businesses.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Name:</strong> Dushmantha Ranathunga</p>
                <p><strong>Email:</strong> dushr23@gmail.com</p>
                <p><strong>Phone:</strong> +9472 0421867</p>
              </div>
              <div>
                <p><strong>Location:</strong> Sri Lanka</p>
                <p><strong>Experience:</strong> 3+ Years</p>
                <p><strong>Availability:</strong> Full-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
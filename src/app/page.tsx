"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { SidebarDemo } from "@/components/layout/sidebar-demo";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Vortex } from "@/components/ui/vortex"; 

export default function LampDemo() {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Aravind",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Sagar",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const projects = [
    {
      category: "Web Development",
      title: "E-Commerce Platform",
      src: "",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            Technologies used: React, Node.js, Express, MongoDB, Stripe API, JWT Authentication
          </p>
          <a href="#" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            View Project →
          </a>
        </div>
      ),
    },
    {
      category: "AI/ML",
      title: "Smart Image Recognition",
      src: "",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            An AI-powered image recognition system using TensorFlow and Python. Can classify and detect objects in real-time with high accuracy.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            Technologies used: Python, TensorFlow, OpenCV, Flask, REST API
          </p>
          <a href="#" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            View Project →
          </a>
        </div>
      ),
    },
    {
      category: "Mobile App",
      title: "Task Management App",
      src: "",
      content: (
        <div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            A cross-platform mobile app for task management with real-time synchronization, offline support, and intuitive UI design.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-4">
            Technologies used: React Native, Firebase, Redux, Push Notifications
          </p>
          <a href="#" className="inline-flex items-centers px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            View Project →
          </a>
        </div>
      ),
    },
  ];

  const cards = projects.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen bg-black relative">
      {/* Subtle Vortex background */}
      <div className="fixed inset-0 w-screen h-screen z-0">
        <Vortex
          backgroundColor="black"
          rangeY={400}
          particleCount={150}
          baseSpeed={0.05}
          rangeSpeed={0.5}
          baseRadius={0.5}
          rangeRadius={1}
          className="w-full h-full opacity-30"
          containerClassName="w-full h-full"
        />
      </div>

      {/* Heavy fade overlay to make vortex very subtle */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-5"></div>

      {/* Main content with higher z-index */}
      <div className="relative z-10">
        <SidebarDemo>
          {/* Home Section */}
          <section id="home">
            <LampContainer>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
              >
                "Sometimes even the wisest of men <br />  and machines can be in error."
              </motion.h1>
            </LampContainer>
          </section>

          {/* About Section - Card and Typewriter section */}
          <section id="about" className="min-h-screen flex items-center justify-between px-40 gap-16">
            
            {/* Card on the left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Aravind P Sagar
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Full Stack Developer & Computer Science Student
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src="/img1.jpg"
                      height="1000"
                      width="1000"
                      className="h-120 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Aravind Sagar"
                    />
                  </CardItem>
                  
                  
                </CardBody>
              </CardContainer>
            </motion.div>

            {/* Typewriter text on the right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="flex-1 max-w-2xl"
            >
              <TypewriterEffectSmooth words={words} />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.8 }}
                className="text-neutral-300 text-sm mt-6 leading-relaxed"
              >
                I enjoy working on software development, web applications, and AI-driven solutions 
                while constantly learning and experimenting with new tools. Beyond coding, I'm curious 
                about problem-solving, collaboration, and bringing creative ideas to life.
              </motion.p>
            </motion.div>
          </section>

          {/* Projects Carousel Section */}
          <section id="projects" className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-6">
                  My Projects
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  A showcase of projects I've built, ranging from web applications to AI solutions
                </p>
              </motion.div>
              <Carousel items={cards} />
            </div>
          </section>

          {/* Contact Section / Footer */}
          <section id="contact" className="py-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-8">
                  Let's Connect
                </h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                  I'm always open to discussing new opportunities, collaborating on interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                  <motion.a
                    href="https://www.linkedin.com/in/arvind-sagar-a03162293/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
                  >
                    LinkedIn
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/ArvindSagar65/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="border-t border-white/10 pt-8"
              >
                <div className="flex justify-center items-center text-gray-500 text-sm">
                  <div className="flex space-x-6">
                    <a href="#home" className="hover:text-white transition-colors">Home</a>
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </SidebarDemo>
      </div>
    </div>
  );
}
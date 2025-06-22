import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code, Smartphone, Monitor, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const Portfolio = () => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to section when component mounts with hash in URL
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, []);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enhanced portfolio projects with icons
  const portfolioProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced product filtering, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "Health & Fitness App",
      category: "Mobile App",
      description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress visualization.",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80",
      tags: ["React Native", "Firebase", "Redux", "HealthKit"],
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "Web Application",
      description: "An interactive financial dashboard for tracking investments, expenses, and financial goals with data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      id: 4,
      title: "Real Estate Platform",
      category: "Web Development",
      description: "A property listing and management platform with virtual tours, appointment scheduling, and mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
      tags: ["Angular", "Node.js", "MongoDB", "AWS"],
      icon: <Globe className="h-5 w-5" />,
    },
    {
      id: 5,
      title: "Travel Companion App",
      category: "Mobile App",
      description: "A travel planning application with itinerary management, local recommendations, and offline maps.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
      tags: ["Flutter", "Firebase", "Google Maps API", "GraphQL"],
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "Web Application",
      description: "An educational platform with course creation, student progress tracking, and interactive learning materials.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      icon: <Monitor className="h-5 w-5" />,
    },
  ];

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=80"
              alt="Creative workspace with design tools"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm text-sm font-medium px-4 py-1.5 rounded-full text-white/90 mb-4 border border-white/10">
                Our Work
              </span>
            </motion.div>
            
            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Portfolio
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Showcasing our best work and successful projects that drive results and exceed expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('projects')}
              >
                <Link to="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/contact')}
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Portfolio Section */}
        <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Our Work
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Browse through our collection of successful projects that showcase our expertise and creativity.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/90 text-slate-900 hover:bg-white border-0 backdrop-blur-sm"
                      >
                        View Case Study
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                        {project.icon}
                      </div>
                      <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-2 group/button" 
                      onClick={scrollToTop}
                    >
                      View Details 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                Have a Project in Mind?
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's Build Something Amazing Together
              </motion.h2>
              
              <motion.p 
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to turn your ideas into reality? Our team of experts is here to help you create innovative solutions that drive results.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-indigo-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link to="/contact" onClick={scrollToTop}>
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/services" onClick={scrollToTop}>
                    Explore Our Services
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;

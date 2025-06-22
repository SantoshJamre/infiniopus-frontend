import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin, Briefcase, Users, Award, Heart, Zap, DollarSign, Book, Code, Globe, Shield, Mail, ChevronRight } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Separator } from "../ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Updated job openings with more details and icons
const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    experience: "5+ years",
    icon: <Code className="h-6 w-6 text-blue-500" />,
    description: "We're looking for an experienced Frontend Developer with expertise in React, TypeScript, and modern web technologies to join our growing team.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong TypeScript skills and state management",
      "Experience with responsive design and CSS frameworks",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Experience with modern frontend build tools and CI/CD",
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    icon: <Award className="h-6 w-6 text-purple-500" />,
    description: "Join our design team to create beautiful, intuitive user experiences for web and mobile applications across various industries.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma, Sketch, and Adobe Creative Suite",
      "Experience creating wireframes and prototypes",
      "Understanding of user-centered design principles",
      "Strong portfolio demonstrating your design process",
    ],
    skills: ["Figma", "UI/UX", "Prototyping", "User Research", "Design Systems"],
  },
  {
    id: 3,
    title: "Backend Developer",
    department: "Engineering",
    location: "Tech City (On-site)",
    type: "Full-time",
    experience: "4+ years",
    icon: <Code className="h-6 w-6 text-green-500" />,
    description: "We're seeking a talented Backend Developer to build robust APIs and services that power our client applications.",
    requirements: [
      "4+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with databases (SQL and NoSQL)",
      "Knowledge of RESTful API design and GraphQL",
      "Understanding of cloud services (AWS/Azure/GCP)",
    ],
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    icon: <Globe className="h-6 w-6 text-amber-500" />,
    description: "Help our clients grow their online presence through strategic digital marketing campaigns and data-driven optimization.",
    requirements: [
      "3+ years of digital marketing experience",
      "Proficiency in SEO, SEM, and social media marketing",
      "Experience with analytics tools and reporting",
      "Knowledge of content marketing strategies",
      "Strong analytical and communication skills",
    ],
    skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
  },
];

// Enhanced benefits with icons and colors
const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-blue-500" />,
    title: "Competitive Salary",
    description: "We offer above-market compensation packages based on your experience and skills.",
    color: "from-blue-50 to-blue-100",
  },
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
    color: "from-red-50 to-red-100",
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development.",
    color: "from-purple-50 to-purple-100",
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-500" />,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours and remote-friendly policies.",
    color: "from-amber-50 to-amber-100",
  },
  {
    icon: <Book className="h-8 w-8 text-green-500" />,
    title: "Career Growth",
    description: "Clear career paths and regular opportunities for advancement.",
    color: "from-green-50 to-green-100",
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-500" />,
    title: "Work-Life Balance",
    description: "Generous PTO, parental leave, and wellness programs.",
    color: "from-indigo-50 to-indigo-100",
  },
];

const Career = () => {
  const navigate = useNavigate();

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section with Animated Background */}
        <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <img

              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
              alt="Diverse team collaborating in a modern office"
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
                We're Hiring!
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build Your Future With Us
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join our team of innovators and help shape the future of technology.
              Work on exciting projects with talented professionals in a collaborative environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('openings')}
              >
                <Link to="#openings">
                  View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/about')}
                size="lg"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Learn About Our Culture
              </Button>
            </motion.div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400/30"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Why Join Us Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Work That Matters, <span className="text-indigo-600 dark:text-indigo-400">People Who Care</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At Infiniopus, we believe that our team is our greatest asset. We're committed to creating an environment where talented individuals can thrive, grow, and make a meaningful impact.
              </p>
              <p className="text-lg text-muted-foreground">
                We foster a culture of innovation, collaboration, and continuous learning. Our team members work on challenging projects for diverse clients, gaining valuable experience across industries and technologies.
              </p>
              <div className="pt-4">
                <Button variant="outline" size="lg" className="group">
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1522071901873-411886a10004?w=1200&q=80"
                  alt="Infiniopus team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Team Members</div>
                </motion.div>
                <motion.div
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-slate-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Countries</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Benefits & Perks
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We Take Care of Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We offer a comprehensive benefits package to support your wellbeing and growth
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className={cn(
                  "h-full p-6 rounded-xl transition-all duration-300 border border-gray-100 dark:border-slate-800",
                  "bg-white dark:bg-slate-800/50 backdrop-blur-sm",
                  "group-hover:shadow-lg group-hover:border-indigo-100 dark:group-hover:border-indigo-900/50",
                  "relative overflow-hidden"
                )}>
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mb-4",
                    "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-900/10",
                    "text-indigo-600 dark:text-indigo-400"
                  )}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                  <div className={cn(
                    "absolute -right-10 -bottom-10 w-40 h-40 rounded-full",
                    "bg-indigo-100/50 dark:bg-indigo-900/10",
                    "transition-all duration-500 group-hover:opacity-0"
                  )} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Current Openings Section */}
        <section id="openings" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
              Join Our Team
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Current <span className="text-indigo-600 dark:text-indigo-400">Open Positions</span>
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our available positions and find the perfect fit for your skills and career goals
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700/50">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                            {job.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                                {job.department}
                              </span>
                              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                              <span className="flex items-center">
                                <MapPin className="h-3.5 w-3.5 mr-1.5" />
                                {job.location}
                              </span>
                              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                              <span className="flex items-center">
                                <Clock className="h-3.5 w-3.5 mr-1.5" />
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{job.description}</p>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {job.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        <Button
                          disabled
                          size="lg"
                          className="group/button mt-4 md:mt-0 opacity-50 cursor-not-allowed"
                          variant="outline"
                        >
                          <span className="flex items-center">
                            Apply Now
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </span>
                        </Button>
                        <p className="text-red-500 text-sm mt-2">This opening is no longer available</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-700/50">
                      <h4 className="font-medium mb-3 flex items-center text-slate-800 dark:text-slate-200">
                        <Users className="h-5 w-5 mr-2 text-indigo-500" />
                        Key Requirements
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              Don't see a role that matches your skills? We're always looking for talented individuals.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group/button"
            >
              <Link to="/contact" onClick={scrollToTop}>
                Contact Us About Opportunities
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </Link>
            </Button>
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
                Ready to Join Us?
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Start Your Journey at Infiniopus
              </motion.h2>

              <motion.p
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We're always looking for passionate individuals to join our growing team.
                If you don't see the perfect role, we'd still love to hear from you.
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
                  <Link to="#openings" onClick={scrollToTop}>
                    View All Openings
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact" onClick={scrollToTop}>
                    Contact Our Team
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

export default Career;

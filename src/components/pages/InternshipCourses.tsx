import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Book, Briefcase, Users, Clock, MapPin, Check } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const internships = [
  {
    id: 1,
    title: "Software Development",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "3 months",
    description: "Gain hands-on experience in developing real-world applications using the latest technologies and best practices.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Knowledge of at least one programming language",
      "Basic understanding of web technologies",
      "Strong problem-solving abilities",
      "Ability to work in a team environment",
    ],
  },
  {
    id: 2,
    title: "Data Science",
    department: "Analytics",
    location: "Remote",
    type: "6 months",
    description: "Work with our expert team to analyze complex datasets and extract meaningful insights using advanced analytics.",
    requirements: [
      "Knowledge of Python or R programming",
      "Understanding of statistical concepts",
      "Experience with data manipulation libraries",
      "Familiarity with machine learning concepts",
      "Strong analytical thinking skills",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    department: "Design",
    location: "Tech City (On-site)",
    type: "4 months",
    description: "Learn the principles of user-centered design and create engaging interfaces for web and mobile applications.",
    requirements: [
      "Basic understanding of design principles",
      "Familiarity with design tools like Figma or Sketch",
      "Knowledge of UI/UX concepts",
      "Creative thinking and problem-solving skills",
      "Attention to detail",
    ],
  },
];

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    department: "Engineering",
    location: "Online & In-person",
    type: "12 weeks",
    description: "A comprehensive course covering front-end and back-end technologies to build modern web applications.",
    requirements: [
      "Basic programming knowledge",
      "Understanding of HTML, CSS, and JavaScript",
      "Commitment to complete assignments",
      "Laptop with internet connection",
      "Dedication to learning new technologies",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    department: "Data Science",
    location: "Online",
    type: "10 weeks",
    description: "Learn the core concepts and algorithms of machine learning with practical applications.",
    requirements: [
      "Basic Python programming skills",
      "Understanding of linear algebra and statistics",
      "Experience with data analysis tools",
      "Willingness to work on projects",
      "Strong mathematical aptitude",
    ],
  },
  {
    id: 3,
    title: "Cloud Computing",
    department: "Infrastructure",
    location: "Hybrid",
    type: "8 weeks",
    description: "Master cloud technologies and services to design, deploy, and manage scalable applications.",
    requirements: [
      "Basic understanding of networking concepts",
      "Familiarity with operating systems",
      "Command-line interface experience",
      "Interest in cloud technologies",
      "Problem-solving abilities",
    ],
  },
];

const features = [
  {
    icon: "🔍",
    title: "Industry-Relevant Skills",
    description: "Our curriculum is constantly updated to match current industry demands and technologies.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description: "Learn from professionals with years of experience in their respective fields.",
  },
  {
    icon: "💼",
    title: "Career Opportunities",
    description: "Top performers get priority consideration for full-time positions at Infiniopus.",
  },
  {
    icon: "🌐",
    title: "Networking",
    description: "Connect with like-minded individuals and build your professional network.",
  },
];

const InternshipCoursesPage = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("https://demo-source.imgix.net/mountains.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn & Grow with Us
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our internship opportunities and professional courses designed to enhance your skills and prepare you for a successful career in technology
            </motion.p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Programs?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Infiniopus, we are committed to providing high-quality educational experiences that prepare you for the challenges of today's tech industry.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our programs are designed with input from industry experts to ensure that you gain practical, relevant skills that employers are looking for.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're looking to start your career, switch fields, or enhance your existing skills, our internships and courses provide the knowledge and hands-on experience you need to succeed.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/api/placeholder/800/450"
                  alt="Students learning technology"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Program Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What makes our internships and courses stand out from the rest
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Internship Programs Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Internship Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get hands-on experience and learn from industry professionals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {internships.map((internship) => (
              <motion.div key={internship.id} variants={fadeIn}>
                <Card className="hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{internship.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{internship.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{internship.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="mb-4">{internship.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" /> Key Requirements
                      </h4>
                      <ul className="space-y-1">
                        {internship.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Professional Courses Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your skills with our industry-focused training programs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {courses.map((course) => (
              <motion.div key={course.id} variants={fadeIn}>
                <Card className="hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Book className="h-4 w-4 mr-1" />
                            <span>{course.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{course.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{course.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className="mb-4">{course.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" /> Prerequisites
                      </h4>
                      <ul className="space-y-1">
                        {course.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Application Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A simple process to get you started on your learning journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "📋",
                title: "Choose Program",
                description: "Browse our offerings and select the internship or course that aligns with your goals.",
              },
              {
                icon: "📝",
                title: "Submit Application",
                description: "Fill out the application form with your details and qualifications.",
              },
              {
                icon: "🎯",
                title: "Assessment",
                description: "Complete a brief assessment to help us understand your current skill level.",
              },
              {
                icon: "🚀",
                title: "Get Started",
                description: "Upon acceptance, receive all necessary materials and begin your journey.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-background rounded-lg p-6 shadow-sm h-full hover:shadow-md transition-shadow duration-300 relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Apply for our internships or enroll in our courses to accelerate your career in technology. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  View All Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InternshipCoursesPage;
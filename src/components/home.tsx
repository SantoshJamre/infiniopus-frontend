import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, Zap, Target, Code, Rocket, Quote, ShoppingCart, Cloud, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import HeroSection from "./sections/HeroSection";
import ContactForm from "./ContactForm";
import Layout from "./layout/Layout";
import { services } from "./../data/services";

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

const Home = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Statement */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Infiniopus, we're dedicated to transforming ideas into powerful
              digital experiences. We combine cutting-edge technology with
              creative design to deliver solutions that drive business growth
              and user engagement.
            </p>
            <Link to="/mission">
              <Button variant="outline" size="lg">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Services Section */}
        <section id="services" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of digital solutions to help your
              business thrive in the digital landscape.
            </p>
            <div className="mt-6">
              <Link to="/services">
                <Button variant="outline" size="lg" className="group">
                  View All Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <Link to={`/services/${service.id}`}>
                      <Button variant="link" className="mt-4 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Our Expertise & Impact Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise & Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Delivering exceptional results through innovation, expertise, and dedication to excellence
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Technologies Mastered</p>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center p-6 bg-card rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Support & Maintenance</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovation Hub</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Exploring the frontiers of technology to create groundbreaking solutions
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={fadeIn} className="relative group">
                <Card className="h-full transform transition-transform group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
                    <p className="text-muted-foreground mb-4">
                      Harnessing the power of artificial intelligence to create smart, adaptive solutions
                      that evolve with your business needs.
                    </p>
                    <Link to="/services" className="inline-flex items-center text-primary hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} className="relative group">
                <Card className="h-full transform transition-transform group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Cloud Architecture</h3>
                    <p className="text-muted-foreground mb-4">
                      Building scalable, secure, and efficient cloud infrastructure that powers your
                      digital transformation journey.
                    </p>
                    <Link to="/services" className="inline-flex items-center text-primary hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} className="relative group">
                <Card className="h-full transform transition-transform group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Mobile Innovation</h3>
                    <p className="text-muted-foreground mb-4">
                      Creating cutting-edge mobile experiences that combine beautiful design with
                      powerful functionality.
                    </p>
                    <Link to="/services" className="inline-flex items-center text-primary hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transforming ideas into impactful solutions - explore our latest success stories
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Success Story 1 - E-commerce */}
              <motion.div variants={fadeIn} className="group">
                <Card className="overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <ShoppingCart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">200% ROI</h3>
                        <p className="text-white/90">E-commerce Platform</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Revolutionized online sales with AI-powered recommendations, resulting in 3x increase in customer engagement and 200% ROI within 6 months.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AI/ML</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">E-commerce</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Analytics</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Success Story 2 - Cloud Migration */}
              <motion.div variants={fadeIn} className="group">
                <Card className="overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-teal-600 to-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Cloud className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">50% Faster</h3>
                        <p className="text-white/90">Cloud Migration</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Successfully migrated legacy systems to cloud infrastructure, reducing operational costs by 40% and improving system performance by 50%.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cloud</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">DevOps</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">AWS</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Success Story 3 - Mobile App */}
              <motion.div variants={fadeIn} className="group">
                <Card className="overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                          <Smartphone className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">1M+ Users</h3>
                        <p className="text-white/90">Mobile App</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Developed a feature-rich mobile app that achieved 1M+ downloads in first quarter, with 4.8/5 user rating and 92% retention rate.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Mobile</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">UX</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="group">
                  View All Success Stories 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Have a project in mind or want to learn more about our services?
                We'd love to hear from you. Fill out the form and we'll get back
                to you shortly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">
                     Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+91-8109878096</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@infiniopus.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Let's work together to create something amazing. Contact us
                today to get started on your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/portfolio">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    View Our Work
                  </Button>
                </Link>
                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contact Us <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
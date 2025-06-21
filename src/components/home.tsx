import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, Zap, Target, Code, Rocket, Quote, ShoppingCart, Cloud, Smartphone, ChevronDown, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
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
        <Separator className="max-w-5xl mx-auto" />

        {/* Services Section */}
        <section id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                What We Offer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a comprehensive range of digital solutions to help your
                business thrive in the digital landscape.
              </p>
              <div className="mt-8">
                <Link to="/services">
                  <Button variant="outline" size="lg" className="group border-blue-200 hover:border-blue-300 hover:bg-blue-50/50">
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
              {services.map((service, index) => (
                <motion.div key={service.id} variants={fadeIn} className="hover-lift">
                  <Card className="h-full overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-[100px] -z-10"></div>
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-xl shadow-lg mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <div className="mt-auto">
                        <Link to={`/services/${service.id}`}>
                          <Button
                            variant="ghost"
                            className="group bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          >
                            Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Expertise & Impact Section */}
        <section className="section-divider py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                Our Achievements
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
                Our Expertise & Impact
              </h2>
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
              <motion.div variants={fadeIn} className="hover-lift">
                <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">500+</h3>
                  <p className="text-muted-foreground font-medium">Projects Delivered</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="hover-lift">
                <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">98%</h3>
                  <p className="text-muted-foreground font-medium">Client Satisfaction</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="hover-lift">
                <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-3">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">15+</h3>
                  <p className="text-muted-foreground font-medium">Technologies Mastered</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="hover-lift">
                <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-3">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">24/7</h3>
                  <p className="text-muted-foreground font-medium">Support & Maintenance</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Innovation Hub Section */}
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                Future Forward
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Innovation Hub
              </h2>
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
              <motion.div variants={fadeIn} className="hover-lift">
                <Card className="h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-[100px] -z-10"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3">
                      <svg
                        className="h-8 w-8 text-white"
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">AI & Machine Learning</h3>
                    <p className="text-muted-foreground mb-6">
                      Harnessing the power of artificial intelligence to create smart, adaptive solutions
                      that evolve with your business needs.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} className="hover-lift">
                <Card className="h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-[100px] -z-10"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transform rotate-3">
                      <svg
                        className="h-8 w-8 text-white"
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Cloud Architecture</h3>
                    <p className="text-muted-foreground mb-6">
                      Building scalable, secure, and efficient cloud infrastructure that powers your
                      digital transformation journey.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} className="hover-lift">
                <Card className="h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-[100px] -z-10"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transform -rotate-3">
                      <svg
                        className="h-8 w-8 text-white"
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
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">Mobile Innovation</h3>
                    <p className="text-muted-foreground mb-6">
                      Creating cutting-edge mobile experiences that combine beautiful design with
                      powerful functionality.
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                Client Success
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Success Stories
              </h2>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Success Story 1 - E-commerce */}
              <motion.div variants={fadeIn} className="group hover-lift">
                <Card className="overflow-hidden h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-500 group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg transform -rotate-3">
                          <ShoppingCart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">200% ROI</h3>
                        <p className="text-white/90 font-medium">E-commerce Platform</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Revolutionized online sales with AI-powered recommendations, resulting in 3x increase in customer engagement and 200% ROI within 6 months.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">AI/ML</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">E-commerce</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium">Analytics</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Success Story 2 - Cloud Migration */}
              <motion.div variants={fadeIn} className="group hover-lift">
                <Card className="overflow-hidden h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg transform rotate-3">
                          <Cloud className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">40% Cost Reduction</h3>
                        <p className="text-white/90 font-medium">Cloud Migration</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Seamlessly migrated legacy systems to cloud infrastructure, improving scalability and reducing operational costs by 40% while enhancing security.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium">Cloud</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium">DevOps</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium">Security</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Success Story 3 - Mobile App */}
              <motion.div variants={fadeIn} className="group hover-lift">
                <Card className="overflow-hidden h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg">
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-500 group-hover:scale-105 transition-transform duration-500 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-lg transform -rotate-3">
                          <Smartphone className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">1M+ Downloads</h3>
                        <p className="text-white/90 font-medium">Mobile App</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6">
                      Developed an award-winning mobile application with intuitive UX/UI design that achieved over 1 million downloads and 4.8-star rating across platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 rounded-full text-sm font-medium">Mobile</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 rounded-full text-sm font-medium">UX/UI</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 rounded-full text-sm font-medium">React Native</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="mt-16 text-center"
            >
              <Link to="/portfolio">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg hover:shadow-purple-500/25 group"
                >
                  View All Case Studies <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-40">
            <motion.div
              initial={{ opacity: 0, x: -100, y: -100 }}
              animate={{
                opacity: [0.1, 0.15, 0.1],
                x: [-100, 0, -100],
                y: [-100, 0, -100],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100, y: 100 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                x: [100, 0, 100],
                y: [100, 0, 100],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
            ></motion.div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
                <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                About Us
              </div>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }
                }}
                className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight"
              >
                Empowering Innovation, <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                  Delivering Excellence
                </span>
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.2
                    }
                  }
                }}
                className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
              >
                At <span className="font-semibold text-blue-600">Infiniopus</span>, we transform visionary ideas into powerful digital realities.
                Our expert team combines cutting-edge technology with creative design to craft
                solutions that drive meaningful growth and exceptional user experiences.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 0.4
                    }
                  }
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/mission">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Explore Our Mission
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-blue-100 bg-white/50 hover:bg-white/80 hover:border-blue-200 text-blue-700 px-8 py-6 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Get in Touch
                    <MessageCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Have a project in mind or want to learn more about our services?
                We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-muted-foreground">
                        Indore, Madhya Pradesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-muted-foreground">+91-8109878096</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-4 shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-muted-foreground">info@infiniopus.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-700/90 z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />
          </div>

          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium py-1 px-4 rounded-full mb-4">
                Let's Collaborate
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Digital Presence?</span>
              </h2>

              <p className="text-lg mb-10 text-white/90">
                Let's work together to create something amazing. Contact us
                today to get started on your next project.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/portfolio">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-700 hover:bg-white/90 hover:text-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    View Our Work
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <a href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                  >
                    Contact Us <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
            <div className="absolute top-1/2 -right-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
            <div className="absolute bottom-1/2 -left-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
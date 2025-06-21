import React from "react";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { Separator } from "../ui/separator";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

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

const About = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.div
              className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium py-1 px-4 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Journey
            </motion.div>

            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Infiniopus</span>
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover our story, mission, and the team behind our success
            </motion.p>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
          <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
          <div className="absolute top-1/2 -right-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
          <div className="absolute bottom-1/2 -left-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
        </div>

        {/* Our Story Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
          >
            <div>
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2022, Infiniopus began with a simple mission: to help
                businesses harness the power of technology to achieve their
                goals. What started as a small team of passionate developers has
                grown into a full-service digital agency with a global client
                base.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our journey has been defined by continuous innovation, learning,
                and a commitment to excellence. We've evolved alongside the
                rapidly changing digital landscape, always staying ahead of
                trends and technologies to deliver cutting-edge solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be trusted partners to businesses of all
                sizes, from startups to enterprises, helping them navigate the
                complexities of the digital world and achieve remarkable
                results.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-sm bg-white/70">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Infiniopus team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-2 border-blue-200 z-0"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border-2 border-indigo-200 z-0"></div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
              Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by our core values and commitment to excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: "🚀",
                title: "Our Mission",
                description:
                  "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create exceptional user experiences. We strive to be a trusted partner in our clients' digital transformation journey.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                description:
                  "To be a global leader in digital innovation, recognized for our creativity, technical excellence, and the measurable impact we create for our clients. We aim to shape the future of digital experiences through continuous innovation.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "We embrace cutting-edge technologies and creative thinking to develop solutions that are not just current but future-ready. Our R&D team constantly explores emerging technologies to bring innovative solutions to our clients.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership. We work closely with our clients, understanding their unique needs and challenges to deliver tailored solutions that exceed expectations.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-[100px] -z-10"></div>
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-xl shadow-lg mb-6">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-indigo-950/90 z-0"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />
          </div>

          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium py-1 px-4 rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                What Sets Us <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Apart</span>
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                What sets us apart in the digital landscape
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: "🚀",
                  title: "Proven Track Record",
                  description:
                    "Successfully delivered 200+ projects with a 98% client satisfaction rate.",
                },
                {
                  icon: "⚡",
                  title: "Fast Turnaround",
                  description:
                    "Agile development process ensures quick delivery without compromising quality.",
                },
                {
                  icon: "🔒",
                  title: "Security First",
                  description:
                    "Industry-leading security practices protect your data and digital assets.",
                },
                {
                  icon: "📱",
                  title: "Modern Technology",
                  description:
                    "Cutting-edge tools and frameworks to build future-ready solutions.",
                },
                {
                  icon: "💬",
                  title: "24/7 Support",
                  description:
                    "Round-the-clock support ensures your business never misses a beat.",
                },
                {
                  icon: "📈",
                  title: "Scalable Solutions",
                  description:
                    "Built to grow with your business, from startup to enterprise scale.",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 h-full">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
            <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
            <div className="absolute top-1/2 -right-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
            <div className="absolute bottom-1/2 -left-8 h-16 w-16 rounded-full border-2 border-white/10 z-0"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="bg-gradient-to-br from-indigo-600/90 to-purple-700/90 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
              <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full border-4 border-white/10 z-0"></div>

            <div className="text-center relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Start Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Digital Journey?</span>
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Let's work together to create something amazing. Contact us today to get started on your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-700 hover:bg-white/90 hover:text-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-medium"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Our Services <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
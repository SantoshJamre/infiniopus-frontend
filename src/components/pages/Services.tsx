import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { services } from "../../data/services";

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

const Services = () => {
  // Function to handle scroll to top before navigation
  const handleLearnMoreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Layout>
      <div className="bg-gradient-to-b from-slate-50 to-indigo-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-950">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full border border-indigo-500/20 opacity-20"></div>
            <div className="absolute top-60 -left-20 h-60 w-60 rounded-full border border-purple-500/20 opacity-20"></div>
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-white/10 opacity-10"></div>
            
            {/* Animated blurred orbs */}
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-indigo-600/30 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl"></div>
          </div>
          
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-slate-900/90 backdrop-blur-sm" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">Our Expertise</Badge>
            <motion.h1
              className="mb-6 max-w-4xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Services
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
          </div>
        </div>

        {/* Services Overview */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a comprehensive range of digital services to help your
              business thrive in the digital landscape. Our expert team delivers
              tailored solutions that drive growth and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <Card className="h-full overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 relative">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 text-3xl mr-3 shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/services/${service.id}`} 
                      onClick={handleLearnMoreClick}
                      className="inline-flex items-center justify-center w-full"
                    >
                      <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-300">
                        <span className="relative z-10 flex items-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-slate-50/50 to-indigo-50/50 rounded-3xl my-16 shadow-sm backdrop-blur-sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How we work with you to deliver exceptional results
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
                icon: "🔍",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and challenges through in-depth consultation.",
              },
              {
                icon: "📝",
                title: "Strategy",
                description:
                  "We develop a tailored strategy and roadmap to achieve your specific objectives.",
              },
              {
                icon: "⚙️",
                title: "Implementation",
                description:
                  "Our expert team executes the plan with precision, keeping you informed at every step.",
              },
              {
                icon: "📊",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and refine to ensure optimal performance and results.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-indigo-100/50 relative group">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-indigo-300 group-hover:text-indigo-500 transition-colors duration-300" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-700/90 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full border border-white/10 opacity-20"></div>
            <div className="absolute top-60 -left-20 h-60 w-60 rounded-full border border-white/10 opacity-20"></div>
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full border border-white/10 opacity-20"></div>
            
            {/* Animated blurred orbs */}
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/30 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 h-32 w-32 rounded-full bg-purple-400/20 blur-3xl"></div>
          </div>
          
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">Get Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Let's discuss how our services can help you achieve your goals.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/portfolio">
                  <Button size="lg" variant="secondary" className="px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="flex items-center">
                      View Our Portfolio
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 bg-transparent border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;

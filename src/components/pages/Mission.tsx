import React from "react";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
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

const Mission = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission & Vision
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Transforming ideas into powerful digital experiences that drive innovation and growth
            </motion.p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Infiniopus, our mission is to empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We are committed to:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Delivering excellence in every project we undertake</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Fostering innovation and creative problem-solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Building long-term partnerships with our clients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Contributing positively to the digital ecosystem</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground">
                We believe that technology should be accessible, intuitive, and transformative. Our dedicated team works tirelessly to turn complex challenges into elegant solutions that make a difference.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80"
                  alt="Infiniopus mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-4xl text-white">
                🚀
              </div>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Vision Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                  alt="Infiniopus vision"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-lg flex items-center justify-center text-4xl text-white">
                🔭
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We envision a world where technology seamlessly enhances human potential, where digital solutions are not just tools but catalysts for positive change. Our vision encompasses:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Being at the forefront of technological innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Creating digital experiences that delight and inspire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Bridging the gap between business goals and user needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>Setting new standards for quality and reliability in our industry</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground">
                At Infiniopus, we don't just build for today—we design for tomorrow, anticipating needs and creating solutions that stand the test of time.
              </p>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Values Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company
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
                title: "Innovation",
                description: "We embrace new ideas and technologies, constantly pushing boundaries to create better solutions.",
                icon: "💡",
              },
              {
                title: "Excellence",
                description: "We strive for the highest quality in everything we do, never settling for 'good enough'.",
                icon: "🏆",
              },
              {
                title: "Integrity",
                description: "We operate with honesty, transparency, and ethical principles in all our interactions.",
                icon: "🤝",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork, both within our company and with our clients.",
                icon: "👥",
              },
              {
                title: "User-Centricity",
                description: "We put users at the heart of our design process, creating experiences that truly resonate.",
                icon: "❤️",
              },
              {
                title: "Adaptability",
                description: "We embrace change and remain flexible, evolving alongside the dynamic digital landscape.",
                icon: "🔄",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-card hover:bg-card/80 transition-colors duration-300 p-8 rounded-lg border border-border h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
                Join Us on Our Journey
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Whether you're looking for a technology partner or interested in joining our team, we'd love to connect with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/about">Learn About Our Team</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <Button asChild variant="ghost" className="flex items-center gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;

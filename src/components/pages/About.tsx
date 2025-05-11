import React from "react";
import { motion } from "framer-motion";
import Layout from "../layout/Layout";
import { Separator } from "../ui/separator";

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
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80)`,
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
              About Infiniopus
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
        </div>

        {/* Our Story Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2015, Infiniopus began with a simple mission: to help
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
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Infiniopus team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Mission & Vision Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guided by strong principles and a clear vision for the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-background rounded-lg p-8 shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and competitive advantage. We are
                committed to delivering exceptional value through technology,
                creativity, and strategic thinking.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="bg-background rounded-lg p-8 shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading digital transformation partner for
                forward-thinking organizations worldwide, known for our
                innovation, expertise, and the measurable impact we create for
                our clients. We envision a world where technology enhances human
                potential and business possibilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
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
                icon: "💡",
                title: "Innovation",
                description:
                  "We constantly explore new ideas and technologies to stay ahead of the curve.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and partnership with our clients.",
              },
              {
                icon: "✨",
                title: "Excellence",
                description:
                  "We strive for the highest quality in everything we deliver.",
              },
              {
                icon: "🔄",
                title: "Adaptability",
                description:
                  "We embrace change and evolve with the dynamic digital landscape.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-background rounded-lg p-6 shadow-sm h-full hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the talented individuals who drive our vision forward
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
                  name: "Jane Smith",
                  role: "CEO & Founder",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
                  bio: "With over 15 years of industry experience, Jane leads our vision and strategy.",
                },
                {
                  name: "John Doe",
                  role: "CTO",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
                  bio: "John oversees all technical aspects and innovation at Infiniopus.",
                },
                {
                  name: "Sarah Johnson",
                  role: "Design Director",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                  bio: "Sarah brings creative vision and user-centered design principles to all our projects.",
                },
                {
                  name: "Michael Chen",
                  role: "Lead Developer",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
                  bio: "Michael leads our development team with expertise in multiple programming languages.",
                },
              ].map((member, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

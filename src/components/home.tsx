import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import HeroSection from "./sections/HeroSection";
import TestimonialsCarousel from "./sections/TestimonialsCarousel";
import ContactForm from "./ContactForm";
import Layout from "./layout/Layout";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centered design that enhances user experience and engagement.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: "☁️",
  },
];

const clients = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=TechCorp",
  },
  {
    id: 2,
    name: "InnovateLabs",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=InnovateLabs",
  },
  {
    id: 3,
    name: "FutureWorks",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=FutureWorks",
  },
  {
    id: 4,
    name: "GlobalSoft",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=GlobalSoft",
  },
  {
    id: 5,
    name: "NextGen",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=NextGen",
  },
  {
    id: 6,
    name: "DigiSolutions",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=DigiSolutions",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    bio: "With over 15 years of industry experience, Jane leads our vision and strategy.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    bio: "John oversees all technical aspects and innovation at Infiniopus.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Design Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Sarah brings creative vision and user-centered design principles to all our projects.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    bio: "Michael leads our development team with expertise in multiple programming languages.",
  },
];

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
            <Button variant="outline" size="lg">
              Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Services Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
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
                    <Button variant="link" className="mt-4">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've had the privilege of working with amazing organizations
              across various industries.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={fadeIn}
                className="flex items-center justify-center"
              >
                <div className="bg-background rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-24 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full"
                  />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the talented individuals who make the magic happen at
                Infiniopus.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} variants={fadeIn}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
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
                      123 Innovation Way, Tech City, TC 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-primary">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
                <Button size="lg" variant="secondary">
                  View Our Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

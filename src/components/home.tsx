import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import HeroSection from "./sections/HeroSection";
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
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    industry: "Technology",
  },
  {
    id: 2,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    industry: "E-commerce",
  },
  {
    id: 3,
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    industry: "Technology",
  },
  {
    id: 4,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    industry: "Technology",
  },
  {
    id: 5,
    name: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    industry: "Software",
  },
  {
    id: 6,
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    industry: "CRM",
  },
  {
    id: 7,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    industry: "Automotive",
  },
  {
    id: 8,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    industry: "Entertainment",
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
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real feedback from real clients who have experienced our dedication to excellence
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  company: "TechVision Inc.",
                  quote:
                    "Infiniopus transformed our digital presence with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Director",
                  company: "Global Brands",
                  quote:
                    "Working with Infiniopus was a game-changer for our marketing strategy. Their insights and execution helped us achieve record-breaking engagement.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "CEO",
                  company: "Startup Innovators",
                  quote:
                    "As a startup, finding the right partner was crucial. Infiniopus understood our vision and helped us build a solid foundation for growth.",
                  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="bg-background rounded-xl p-8 shadow-lg h-full flex flex-col relative">
                    <div className="absolute -top-6 left-8">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Quote className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 mb-4 mt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="italic text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                    
                    <div className="flex items-center mt-auto">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
              className="mt-12 text-center"
            >
              <Button variant="outline" size="lg" className="group">
                View All Testimonials <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
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

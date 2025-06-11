import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "../layout/Layout";
import ContactForm from "../ContactForm";
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

const Contact = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80)`,
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
              Contact Us
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get in touch with our team to discuss your project or inquiries
            </motion.p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Our Location",
                details: [
                  "Indore",
                  "Madhya Pradesh",
                  "India",
                ],
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone Number",
                details: ["+91-8109878096", "+91-8839974136"],
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email Address",
                details: ["info@infiniopus.com"],
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Working Hours",
                details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 2PM"],
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <div className="text-muted-foreground">
                      {item.details.map((detail, i) => (
                        <p key={i} className="mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or want to discuss a project? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="h-full"
            >
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office or use the map below to get directions.
              </p>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.523928184781!2d75.85772671509643!3d22.719568585107242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc827c37c9d%3A0x54842d8d34a7c58!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1620217123570!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and process
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
                question: "How long does a typical project take to complete?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing options including fixed-price quotes for defined projects and hourly rates for ongoing work. We tailor our approach to fit your budget and project requirements.",
              },
              {
                question: "Do you offer maintenance services after project completion?",
                answer: "Yes, we offer various maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our team can provide regular updates, monitoring, and support.",
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain transparent communication throughout the project using tools like Slack, email, and regular video calls. You'll have a dedicated project manager as your main point of contact.",
              },
              {
                question: "Can you work with our existing systems and technologies?",
                answer: "Absolutely. We have experience integrating with a wide range of existing systems and technologies. Our team will assess your current setup and recommend the best approach for seamless integration.",
              },
              {
                question: "What makes Infiniopus different from other agencies?",
                answer: "We combine technical expertise with strategic thinking to deliver solutions that not only look great but also drive business results. Our collaborative approach ensures we truly understand your needs and goals.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;

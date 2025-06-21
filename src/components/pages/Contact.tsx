import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Headset, Users, Globe } from "lucide-react";
import Layout from "../layout/Layout";
import ContactForm from "../ContactForm";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
              backgroundImage: `url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-slate-900/90 backdrop-blur-sm" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">Get In Touch</Badge>
            <motion.h1
              className="mb-6 max-w-4xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl"
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
              We'd love to hear from you. Get in touch with our team to discuss your project or inquiries.
            </motion.p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto -mt-20 relative z-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <MapPin className="h-6 w-6 text-indigo-600" />,
                title: "Our Location",
                details: ["Indore", "Madhya Pradesh", "India"],
                bgColor: "from-indigo-50 to-white",
              },
              {
                icon: <Phone className="h-6 w-6 text-purple-600" />,
                title: "Phone Number",
                details: ["+91-8109878096", "+91-8839974136"],
                bgColor: "from-purple-50 to-white",
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-600" />,
                title: "Email Address",
                details: ["info@infiniopus.com"],
                bgColor: "from-blue-50 to-white",
              },
              {
                icon: <Clock className="h-6 w-6 text-emerald-600" />,
                title: "Working Hours",
                details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 2PM"],
                bgColor: "from-emerald-50 to-white",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="h-full">
                <Card className={`h-full bg-gradient-to-br ${item.bgColor} border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-opacity-20 ${
                      index === 0 ? 'bg-indigo-100' : 
                      index === 1 ? 'bg-purple-100' : 
                      index === 2 ? 'bg-blue-100' : 'bg-emerald-100'
                    } flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                    <div className="text-muted-foreground space-y-1">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="relative"
            >
              <div className="absolute -top-8 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold flex items-center">
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Send Us a Message
                  </h2>
                  <p className="text-indigo-100 mt-1">
                    Have questions or want to discuss a project? We're here to help!
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="space-y-8"
            >
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <div className="h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.523928184781!2d75.85772671509643!3d22.719568585107242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdc827c37c9d%3A0x54842d8d34a7c58!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1620217123570!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Office Location Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Office</h3>
                  <p className="text-gray-600 text-sm">Visit us at our office in Indore, Madhya Pradesh, India. We'd love to meet you in person!</p>
                </div>
              </div>

              {/* Support Info */}
              <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <Headset className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Need Help?</h3>
                      <p className="text-sm text-gray-600 mt-1">Our support team is here to help you with any questions.</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    <MessageCircle className="mr-2 h-4 w-4" /> Chat with Support
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-t-3xl mt-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm text-indigo-600 hover:bg-white/20 border border-indigo-200">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                question: "How long does a typical project take to complete?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                icon: <Clock className="h-5 w-5 text-indigo-600" />
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing options including fixed-price quotes for defined projects and hourly rates for ongoing work. We tailor our approach to fit your budget and project requirements.",
                icon: <Globe className="h-5 w-5 text-indigo-600" />
              },
              {
                question: "Do you offer maintenance services after project completion?",
                answer: "Yes, we offer various maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our team can provide regular updates, monitoring, and support.",
                icon: <Users className="h-5 w-5 text-indigo-600" />
              },
              {
                question: "How do you handle project communication?",
                answer: "We maintain transparent communication throughout the project using tools like Slack, email, and regular video calls. You'll have a dedicated project manager as your main point of contact.",
                icon: <MessageCircle className="h-5 w-5 text-indigo-600" />
              },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="group"
              >
                <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-indigo-200 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-50 p-2 rounded-lg mr-4 group-hover:bg-indigo-100 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                          {item.question}
                        </h3>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="mailto:info@infiniopus.com">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;

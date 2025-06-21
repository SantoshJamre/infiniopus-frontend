import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, ChevronRight } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const serviceId = parseInt(id || "1");
  const service = services.find((s) => s.id === serviceId) || services[0];
  const nextServiceId = serviceId < services.length ? serviceId + 1 : 1;
  const prevServiceId = serviceId > 1 ? serviceId - 1 : services.length;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-indigo-100/50 blur-3xl" />
          <div className="absolute -left-64 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
        </div>

        {/* Hero Section */}
        <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-r from-indigo-900 to-slate-900">
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/80 to-indigo-900/80" />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <motion.div 
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 p-4 text-white shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl">{service.icon}</div>
            </motion.div>
            
            <motion.h1
              className="mb-6 max-w-4xl bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-4 shadow-sm">
          <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-7xl">
            <div className="flex items-center text-sm text-slate-600">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <Link to="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
              <ChevronRight className="mx-2 h-4 w-4" />
              <span className="font-medium text-indigo-700">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent inline-block">
                  Service Overview
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Our <span className="font-semibold text-indigo-700">{service.title}</span> service is designed to help businesses 
                  leverage the latest technologies to achieve their goals. We provide end-to-end solutions 
                  that are tailored to your specific needs and industry requirements.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-800 flex items-center">
                    <span className="mr-3">✨</span> Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="mr-3 mt-0.5 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                            <Check className="h-4 w-4" />
                          </div>
                        </div>
                        <p className="text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                    <span className="mr-2">🚀</span> Our Approach
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We follow a systematic approach to deliver high-quality <span className="font-medium text-indigo-700">{service.title}</span> solutions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🔍",
                        title: "Discovery & Planning",
                        description: "We start by understanding your business goals, target audience, and requirements to create a tailored strategy."
                      },
                      {
                        icon: "🎨",
                        title: "Design & Development",
                        description: "Our expert team creates custom solutions using cutting-edge technologies and industry best practices."
                      },
                      {
                        icon: "🧪",
                        title: "Testing & Deployment",
                        description: "We conduct rigorous testing to ensure quality and reliability before seamless deployment."
                      },
                      {
                        icon: "🔄",
                        title: "Support & Optimization",
                        description: "We provide ongoing support and continuous optimization to maximize your results."
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1 border border-slate-100">
                          <CardContent className="p-6">
                            <div className="text-3xl mb-4">{step.icon}</div>
                            <h4 className="text-xl font-semibold mb-3 text-slate-800">{step.title}</h4>
                            <p className="text-slate-600">{step.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation between services */}
              <div className="flex justify-between mt-12">
                <Link 
                  to={`/services/${prevServiceId}`}
                  className="group flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Service</span>
                </Link>
                <Link 
                  to={`/services/${nextServiceId}`}
                  className="group flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Next Service</span>
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                className="sticky top-24 space-y-6"
              >
                <Card className="overflow-hidden border border-slate-100 shadow-sm">
                  <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
                    <h3 className="text-xl font-semibold">Ready to Get Started?</h3>
                    <p className="mt-2 text-indigo-100">
                      Let's discuss how we can help your business grow.
                    </p>
                  </div>
                  <CardContent className="p-6">
                    <Button 
                      className="w-full mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
                      size="lg"
                      asChild
                    >
                      <Link to={`/contact?service=${encodeURIComponent(service.title)}`}>
                        Request a Free Consultation
                      </Link>
                    </Button>
                    <Link to="/contact" className="block w-full">
                      <Button 
                        variant="outline" 
                        className="w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400"
                        size="lg"
                      >
                        Contact Us
                      </Button>
                    </Link>

                    <Separator className="my-6 bg-slate-100" />

                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-800 flex items-center">
                        <span className="mr-2">📞</span> Have questions?
                      </h4>
                      <p className="text-sm text-slate-600">
                        Call us at <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+1 (234) 567-890</a> or 
                        email <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">info@example.com</a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-slate-100 shadow-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-slate-800">
                      Explore Our Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {services
                        .filter(s => s.id !== service.id)
                        .slice(0, 4)
                        .map(s => (
                          <Link 
                            key={s.id} 
                            to={`/services/${s.id}`} 
                            className="group block rounded-lg p-3 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                                <span className="text-lg">{s.icon}</span>
                              </div>
                              <div>
                                <div className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors">
                                  {s.title}
                                </div>
                                <div className="text-sm text-slate-500 line-clamp-1">
                                  {s.description.substring(0, 50)}...
                                </div>
                              </div>
                              <ChevronRight className="ml-auto h-5 w-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                            </div>
                          </Link>
                        ))}
                      <Link 
                        to="/services" 
                        className="mt-2 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                      >
                        View all services
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-gradient-to-r from-indigo-700 to-blue-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTkgMGMwIDIuMjA5IDEuNzkxIDQgNCA0czQtMS43OTEgNC00LTEuNzkxLTQtNC00LTQgMS43OTEtNCA0eiIvPjwvZz48L2c+PC9zdmc+')]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mt-4 text-xl text-indigo-100 max-w-3xl mx-auto">
              Let's discuss how our {service.title} service can help you achieve your goals and drive growth.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-6 text-base font-medium md:py-6 md:px-10 md:text-lg"
                asChild
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium md:py-6 md:px-10 md:text-lg"
                asChild
              >
                <Link to="/services">
                  Explore All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceDetail;

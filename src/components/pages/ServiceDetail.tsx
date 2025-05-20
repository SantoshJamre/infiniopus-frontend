import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
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

  // Find the service with the matching ID
  const service = services.find((s) => s.id === serviceId) || services[0];

  // Get next and previous service IDs for navigation
  const nextServiceId = serviceId < services.length ? serviceId + 1 : 1;
  const prevServiceId = serviceId > 1 ? serviceId - 1 : services.length;

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content container */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
            <div className="text-5xl mb-6">{service.icon}</div>
            <motion.h1
              className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-muted/30 py-3">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{service.title}</span>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our {service.title} service is designed to help businesses leverage the latest technologies
                  to achieve their goals. We provide end-to-end solutions that are tailored to your specific needs.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We follow a systematic approach to deliver high-quality {service.title} solutions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Discovery & Planning",
                      description: "We start by understanding your business goals, target audience, and requirements."
                    },
                    {
                      title: "Design & Development",
                      description: "Our team creates tailored solutions using the latest technologies and best practices."
                    },
                    {
                      title: "Testing & Deployment",
                      description: "We thoroughly test all deliverables and ensure smooth deployment."
                    },
                    {
                      title: "Support & Optimization",
                      description: "We provide ongoing support and continuously optimize for better performance."
                    }
                  ].map((step, index) => (
                    <Card key={index} className="h-full">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="sticky top-24"
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-6">
                      Contact us today to discuss how our {service.title} services can help your business grow.
                    </p>
                    <Button
                      className="w-full mb-4"
                      asChild
                    >
                      <Link to={`/request-quote?service=${encodeURIComponent(service.title)}`}>
                        Request a Quote
                      </Link>
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Us
                      </Button>
                    </Link>

                    <Separator className="my-6" />

                    <h4 className="font-medium mb-3">Other Services</h4>
                    <div className="space-y-2">
                      {services
                        .filter(s => s.id !== service.id)
                        .slice(0, 3)
                        .map(s => (
                          <Link key={s.id} to={`/services/${s.id}`} className="block">
                            <div className="flex items-center py-2 px-3 rounded-md hover:bg-muted transition-colors">
                              <span className="mr-2">{s.icon}</span>
                              <span>{s.title}</span>
                            </div>
                          </Link>
                        ))}
                      <Link to="/services" className="block text-primary hover:underline text-sm mt-2">
                        View all services
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link to={`/services/${prevServiceId}`}>
              <Button variant="ghost" className="mb-4 sm:mb-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Service
              </Button>
            </Link>
            <Link to={`/services/${nextServiceId}`}>
              <Button variant="ghost">
                Next Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Let's discuss how our {service.title} services can help you achieve your goals.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/portfolio">
                  <Button size="lg" variant="secondary">
                    View Our Portfolio
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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

export default ServiceDetail;

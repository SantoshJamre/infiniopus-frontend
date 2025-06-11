import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin, Briefcase, Users } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description: "We're looking for an experienced Frontend Developer with expertise in React, TypeScript, and modern web technologies to join our growing team.",
    requirements: [
      "5+ years of experience with React and modern JavaScript",
      "Strong TypeScript skills",
      "Experience with state management solutions",
      "Knowledge of responsive design and CSS frameworks",
      "Excellent problem-solving abilities",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Join our design team to create beautiful, intuitive user experiences for web and mobile applications across various industries.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma and design tools",
      "Experience creating wireframes and prototypes",
      "Understanding of user-centered design principles",
      "Portfolio demonstrating your design process",
    ],
  },
  {
    id: 3,
    title: "Backend Developer",
    department: "Engineering",
    location: "Tech City (On-site)",
    type: "Full-time",
    description: "We're seeking a talented Backend Developer to build robust APIs and services that power our client applications.",
    requirements: [
      "4+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with databases (SQL and NoSQL)",
      "Knowledge of RESTful API design",
      "Understanding of cloud services (AWS/Azure/GCP)",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Help our clients grow their online presence through strategic digital marketing campaigns and data-driven optimization.",
    requirements: [
      "3+ years of digital marketing experience",
      "Proficiency in SEO, SEM, and social media marketing",
      "Experience with analytics tools and reporting",
      "Knowledge of content marketing strategies",
      "Strong analytical and communication skills",
    ],
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "Tech City (Hybrid)",
    type: "Full-time",
    description: "Lead project teams to deliver exceptional digital solutions on time and within budget while ensuring client satisfaction.",
    requirements: [
      "5+ years of project management experience",
      "PMP certification preferred",
      "Experience managing digital or software projects",
      "Strong leadership and communication skills",
      "Proficiency with project management tools",
    ],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain our cloud infrastructure, CI/CD pipelines, and deployment processes.",
    requirements: [
      "3+ years of DevOps experience",
      "Proficiency with cloud platforms (AWS/Azure/GCP)",
      "Experience with containerization and orchestration",
      "Knowledge of infrastructure as code",
      "Strong scripting and automation skills",
    ],
  },
];

const benefits = [
  {
    icon: "",
    title: "Competitive Salary",
    description: "We offer above-market compensation packages based on your experience and skills.",
  },
  {
    icon: "",
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
  },
  {
    icon: "",
    title: "Generous PTO",
    description: "Flexible vacation policy with additional paid holidays and sick leave.",
  },
  {
    icon: "",
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and professional development.",
  },
  {
    icon: "",
    title: "Remote Work",
    description: "Flexible work arrangements with remote and hybrid options available.",
  },
  {
    icon: "",
    title: "Career Growth",
    description: "Clear career paths and regular opportunities for advancement and skill development.",
  },
];

const Career = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full overflow-hidden bg-slate-900">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80)`,
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
              Join Our Team
            </motion.h1>

            <motion.p
              className="mb-8 max-w-2xl text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Build your career at Infiniopus and work on exciting projects with talented professionals
            </motion.p>
          </div>
        </div>

        {/* Why Join Us Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Join Infiniopus?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Infiniopus, we believe that our team is our greatest asset. We're committed to creating an environment where talented individuals can thrive, grow, and make a meaningful impact.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We foster a culture of innovation, collaboration, and continuous learning. Our team members work on challenging projects for diverse clients, gaining valuable experience across industries and technologies.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're an experienced professional or just starting your career, Infiniopus offers opportunities to develop your skills, advance your career, and work alongside passionate colleagues who share your commitment to excellence.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071901873-411886a10004?w=800&q=80"
                  alt="Infiniopus team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-5xl mx-auto" />

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive benefits package to support your wellbeing and growth
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Current Openings Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our available positions and find the perfect fit for your skills and career goals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            {jobOpenings.map((job) => (
              <motion.div key={job.id} variants={fadeIn}>
                <Card className="hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="mt-4 md:mt-0">
                        <Link 
                          to={`/apply-job?position=${encodeURIComponent(job.title)}&department=${encodeURIComponent(job.department)}`}
                          onClick={scrollToTop}
                        >
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    
                    <p className="mb-4">{job.description}</p>
                    
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-2" /> Key Requirements
                      </h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What to expect when you apply to join our team
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
                icon: "",
                title: "Application",
                description: "Submit your resume and cover letter through our online application system.",
              },
              {
                icon: "",
                title: "Initial Interview",
                description: "A 30-minute call with our HR team to discuss your background and the role.",
              },
              {
                icon: "",
                title: "Technical Assessment",
                description: "Complete a skills assessment or project relevant to the position.",
              },
              {
                icon: "",
                title: "Final Interview",
                description: "Meet with the team and leadership to ensure a mutual fit.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="bg-background rounded-lg p-6 shadow-sm h-full hover:shadow-md transition-shadow duration-300 relative">
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
                Don't See the Right Fit?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link onClick={scrollToTop} to={""}>View All Openings</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/apply-job" onClick={scrollToTop}>Submit Open Application</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Career;

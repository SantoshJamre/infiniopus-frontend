import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Book, Briefcase, Users, Clock, MapPin, Check } from "lucide-react";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
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

const internships = [
  {
    id: 1,
    title: "Software Development",
    department: "Engineering",
    location: "Tech City (Hybrid)",
    type: "3 months",
    description: "Gain hands-on experience in developing real-world applications using the latest technologies and best practices.",
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Knowledge of at least one programming language",
      "Basic understanding of web technologies",
      "Strong problem-solving abilities",
      "Ability to work in a team environment",
    ],
  },
  {
    id: 2,
    title: "Data Science",
    department: "Analytics",
    location: "Remote",
    type: "6 months",
    description: "Work with our expert team to analyze complex datasets and extract meaningful insights using advanced analytics.",
    requirements: [
      "Knowledge of Python or R programming",
      "Understanding of statistical concepts",
      "Experience with data manipulation libraries",
      "Familiarity with machine learning concepts",
      "Strong analytical thinking skills",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    department: "Design",
    location: "Tech City (On-site)",
    type: "4 months",
    description: "Learn the principles of user-centered design and create engaging interfaces for web and mobile applications.",
    requirements: [
      "Basic understanding of design principles",
      "Familiarity with design tools like Figma or Sketch",
      "Knowledge of UI/UX concepts",
      "Creative thinking and problem-solving skills",
      "Attention to detail",
    ],
  },
];

export { internships };

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    department: "Engineering",
    location: "Online & In-person",
    type: "12 weeks",
    description: "A comprehensive course covering front-end and back-end technologies to build modern web applications.",
    requirements: [
      "Basic programming knowledge",
      "Understanding of HTML, CSS, and JavaScript",
      "Commitment to complete assignments",
      "Laptop with internet connection",
      "Dedication to learning new technologies",
    ],
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    department: "Data Science",
    location: "Online",
    type: "10 weeks",
    description: "Learn the core concepts and algorithms of machine learning with practical applications.",
    requirements: [
      "Basic Python programming skills",
      "Understanding of linear algebra and statistics",
      "Experience with data analysis tools",
      "Willingness to work on projects",
      "Strong mathematical aptitude",
    ],
  },
  {
    id: 3,
    title: "Cloud Computing",
    department: "Infrastructure",
    location: "Hybrid",
    type: "8 weeks",
    description: "Master cloud technologies and services to design, deploy, and manage scalable applications.",
    requirements: [
      "Basic understanding of networking concepts",
      "Familiarity with operating systems",
      "Command-line interface experience",
      "Interest in cloud technologies",
      "Problem-solving abilities",
    ],
  },
];

export { courses };

const features = [
  {
    icon: "🔍",
    title: "Industry-Relevant Skills",
    description: "Our curriculum is constantly updated to match current industry demands and technologies.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description: "Learn from professionals with years of experience in their respective fields.",
  },
  {
    icon: "💼",
    title: "Career Opportunities",
    description: "Top performers get priority consideration for full-time positions at Infiniopus.",
  },
  {
    icon: "🌐",
    title: "Networking",
    description: "Connect with like-minded individuals and build your professional network.",
  },
];

const InternshipCoursesPage = () => {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          {/* Background with overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Internships & Courses
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Accelerate your career with hands-on learning experiences and
                expert-led courses in cutting-edge technologies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Internships Section */}
        <section className="py-16 bg-background">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Internship Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Gain real-world experience and mentorship from industry experts
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {internships.map((internship) => (
                <motion.div key={internship.id} variants={fadeIn}>
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {internship.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Briefcase className="h-4 w-4 mr-1" />
                            <span>{internship.department}</span>
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {internship.type}
                        </div>
                      </div>

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-1 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Applications open until positions are filled
                          </span>
                        </div>
                      </div>

                      <p className="mb-4">{internship.description}</p>

                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {internship.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <Check className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          asChild
                          className="w-full"
                        >
                          <Link to={`/apply?program=${encodeURIComponent(internship.title)}&type=internship`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 bg-muted/30">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Courses
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Enhance your skills with our industry-relevant courses
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {courses.map((course) => (
                <motion.div key={course.id} variants={fadeIn}>
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">
                            {course.title}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Book className="h-4 w-4 mr-1" />
                            <span>{course.department}</span>
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {course.type}
                        </div>
                      </div>

                      <div className="mb-4 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{course.location}</span>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-4 w-4 mr-1 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Limited seats available
                          </span>
                        </div>
                      </div>

                      <p className="mb-4">{course.description}</p>

                      <div className="mb-6">
                        <h4 className="font-medium mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {course.requirements.map((req, index) => (
                            <li
                              key={index}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <Check className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          asChild
                          className="w-full"
                        >
                          <Link to={`/apply?program=${encodeURIComponent(course.title)}&type=course`}>
                            Apply Now
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Ready to Take the Next Step?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Apply for our internships or enroll in our courses to accelerate your career in technology. Start your journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  asChild
                >
                  <Link to="/apply">
                    Apply Now
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link to="/contact">
                    Contact Our Team
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InternshipCoursesPage;
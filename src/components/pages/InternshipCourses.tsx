import React, { useState } from "react";
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
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
  },
  // {
  //   id: 2,
  //   title: "Data Science",
  //   department: "Analytics",
  //   location: "Remote",
  //   type: "6 months",
  //   description: "Work with our expert team to analyze complex datasets and extract meaningful insights using advanced analytics.",
  //   requirements: [
  //     "Knowledge of Python or R programming",
  //     "Understanding of statistical concepts",
  //     "Experience with data manipulation libraries",
  //     "Familiarity with machine learning concepts",
  //     "Strong analytical thinking skills",
  //   ],
  //   skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Data Visualization"],
  // },
  // {
  //   id: 3,
  //   title: "UI/UX Design",
  //   department: "Design",
  //   location: "Tech City (On-site)",
  //   type: "4 months",
  //   description: "Learn the principles of user-centered design and create engaging interfaces for web and mobile applications.",
  //   requirements: [
  //     "Basic understanding of design principles",
  //     "Familiarity with design tools like Figma or Sketch",
  //     "Knowledge of UI/UX concepts",
  //     "Creative thinking and problem-solving skills",
  //     "Attention to detail",
  //   ],
  //   skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
  // },
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
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
  },
  // {
  //   id: 2,
  //   title: "Machine Learning Fundamentals",
  //   department: "Data Science",
  //   location: "Online",
  //   type: "10 weeks",
  //   description: "Learn the core concepts and algorithms of machine learning with practical applications.",
  //   requirements: [
  //     "Basic Python programming skills",
  //     "Understanding of linear algebra and statistics",
  //     "Experience with data analysis tools",
  //     "Willingness to work on projects",
  //     "Strong mathematical aptitude",
  //   ],
  //   skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Data Preprocessing", "Model Evaluation"],
  // },
  // {
  //   id: 3,
  //   title: "Cloud Computing",
  //   department: "Infrastructure",
  //   location: "Hybrid",
  //   type: "8 weeks",
  //   description: "Master cloud technologies and services to design, deploy, and manage scalable applications.",
  //   requirements: [
  //     "Basic understanding of networking concepts",
  //     "Familiarity with operating systems",
  //     "Command-line interface experience",
  //     "Interest in cloud technologies",
  //     "Problem-solving abilities",
  //   ],
  //   skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Serverless"],
  // },
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
  const [activeTab, setActiveTab] = useState<'internships' | 'courses'>('internships');

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          {/* Original Background with Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                {activeTab === 'internships' ? 'Internship Opportunities' : 'Professional Courses'}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-200 mb-8"
              >
                {activeTab === 'internships' 
                  ? 'Gain real-world experience and build your professional network.'
                  : 'Enhance your skills with our industry-relevant training programs.'}
              </motion.p>
              
              {/* Tab Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-1.5 mb-8"
              >
                <button
                  onClick={() => setActiveTab('internships')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'internships' 
                      ? 'bg-white text-blue-700 shadow-lg' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Briefcase className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                  Internships
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === 'courses' 
                      ? 'bg-white text-blue-700 shadow-lg' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Book className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                  Courses
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeTab === 'internships' ? internships : courses).map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {item.department}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow">
                      {item.description}
                    </p>
                    
                    {/* Skills Section */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills?.map((skill, index) => (
                          <span key={index} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1.5">
                        {item.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {item.type}
                        </div>
                        <Button 
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                        >
                          <Link to={`/apply?program=${encodeURIComponent(item.title)}&type=${activeTab.slice(0, -1)}`}>
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss custom internship or training opportunities tailored to your needs.
            </p>
            <Button 
              asChild 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-base"
            >
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InternshipCoursesPage;
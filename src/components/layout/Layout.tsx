import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children = <div className="p-8">Page content</div>,
}: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Career", path: "/career" },
    { name: "Internship/Courses", path: "/internship-courses" },
  ];

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between min-h-[60px]">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                    Infini
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:from-indigo-700 group-hover:to-purple-700 transition-all duration-300">
                    opus
                  </span>
                </div>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    className="relative h-full flex items-center"
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          mass: 0.5
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence mode="wait">
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <nav className="flex flex-col space-y-1 py-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to={link.path}
                          className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="flex items-center">
                            <span>{link.name}</span>
                            {isActive && (
                              <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-950">
        {/* Background elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full border-2 border-white/5 z-0"></div>
        <div className="absolute bottom-1/2 -left-8 h-16 w-16 rounded-full border border-white/5 z-0"></div>

        <div className="container mx-auto px-4 py-16 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                Infiniopus
              </h3>
              <p className="text-gray-300 mb-6">
                Transforming ideas into innovative solutions. We help businesses
                grow through technology and creative strategies.
              </p>
              <div className="flex space-x-5">
                <a
                  href="https://in.linkedin.com/company/infiniopus"
                  className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-blue-400 hover:text-blue-300 transition-all duration-300"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <span
                  className="bg-white/5 p-2.5 rounded-full text-gray-500 cursor-not-allowed"
                  aria-label="Facebook (disabled)"
                  aria-disabled="true"
                >
                  <Facebook className="h-5 w-5" />
                </span>
                <span
                  className="bg-white/5 p-2.5 rounded-full text-gray-500 cursor-not-allowed"
                  aria-label="Twitter (disabled)"
                  aria-disabled="true"
                >
                  <Twitter className="h-5 w-5" />
                </span>
                <span
                  className="bg-white/5 p-2.5 rounded-full text-gray-500 cursor-not-allowed"
                  aria-label="Instagram (disabled)"
                  aria-disabled="true"
                >
                  <Instagram className="h-5 w-5" />
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                      onClick={scrollToTop}
                    >
                      <div className="h-6 w-6 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center mr-3 transition-all duration-300">
                        <ChevronDown className="h-3 w-3 rotate-90 text-blue-400" />
                      </div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 mt-1">
                    Indore, Madhya Pradesh
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Phone className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 mt-1">+91-8109878096</span>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <Mail className="h-4 w-4 text-blue-400" />
                  </div>
                  <a
                    href="mailto:info@infiniopus.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors mt-1"
                  >
                    info@infiniopus.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/5 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Infiniopus</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

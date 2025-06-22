import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronRight, Code, Cloud, Rocket, Smartphone } from "lucide-react";

const HeroSection = ({
  title = "Transforming Ideas into Digital Reality",
  subtitle = "Welcome to Infiniopus",
  description = "We help businesses leverage cutting-edge technology to drive growth, efficiency, and innovation in an increasingly digital world.",
  ctaText = "Explore Our Services",
  ctaLink = "#services",
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80",
  scrollToSectionId = "services",
}) => {

  const navigate = useNavigate();

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Animated particles or shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-600/30 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-indigo-600/20 blur-[100px]" />
      </div>

      {/* Animated Multi-Color Waves - Multiple layers with different animations */}
      <div className="absolute bottom-0 left-0 right-0 z-5 overflow-hidden">
        {/* First Wave Layer - Slower moving */}
        <motion.div
          className="relative"
          animate={{
            x: [-2, 2, -1, 1, -2],
            y: [-1, 1, -2, 2, -1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4158D0">
                  <animate attributeName="stop-color"
                    values="#4158D0;#C850C0;#FFCC70;#4158D0"
                    dur="8s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#C850C0">
                  <animate attributeName="stop-color"
                    values="#C850C0;#FFCC70;#4158D0;#C850C0"
                    dur="8s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FFCC70">
                  <animate attributeName="stop-color"
                    values="#FFCC70;#4158D0;#C850C0;#FFCC70"
                    dur="8s"
                    repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#wave-gradient-1)"
              fillOpacity="0.7"
              d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>

        {/* Second Wave Layer - Medium speed */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          animate={{
            x: [2, -2, 1, -1, 2],
            y: [1, -1, 2, -2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0093E9">
                  <animate attributeName="stop-color"
                    values="#0093E9;#80D0C7;#8EC5FC;#0093E9"
                    dur="6s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#80D0C7">
                  <animate attributeName="stop-color"
                    values="#80D0C7;#8EC5FC;#0093E9;#80D0C7"
                    dur="6s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#8EC5FC">
                  <animate attributeName="stop-color"
                    values="#8EC5FC;#0093E9;#80D0C7;#8EC5FC"
                    dur="6s"
                    repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#wave-gradient-2)"
              fillOpacity="0.6"
              d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,176C672,181,768,235,864,240C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>

        {/* Third Wave Layer - Faster moving */}
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          animate={{
            x: [-1, 1, -0.5, 0.5, -1],
            y: [0.5, -0.5, 1, -1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9A8B">
                  <animate attributeName="stop-color"
                    values="#FF9A8B;#FF6A88;#FF99AC;#FF9A8B"
                    dur="4s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#FF6A88">
                  <animate attributeName="stop-color"
                    values="#FF6A88;#FF99AC;#FF9A8B;#FF6A88"
                    dur="4s"
                    repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FF99AC">
                  <animate attributeName="stop-color"
                    values="#FF99AC;#FF9A8B;#FF6A88;#FF99AC"
                    dur="4s"
                    repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#wave-gradient-3)"
              fillOpacity="0.4"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,256L48,261.3C96,267,192,277,288,261.3C384,245,480,203,576,208C672,213,768,267,864,272C960,277,1056,235,1152,218.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,176C672,181,768,235,864,240C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Decorative elements - Moved above wave with z-10 */}
      <motion.div
        className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-600/20 blur-3xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Content container - Highest z-index */}
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-1 text-sm font-medium uppercase tracking-wider text-white">
            {subtitle}
          </span>
        </motion.div>

        <motion.h1
          className="mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          <button
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 shadow-lg hover:shadow-blue-500/25 px-8 py-3 rounded-lg text-white font-medium min-w-[180px] flex items-center justify-center transition-all duration-200"
            onClick={() => scrollToSection(scrollToSectionId)}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            className="group border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium min-w-[180px] flex items-center justify-center transition-all duration-200"
            onClick={() => navigate('/portfolio')}
          >
            View Our Work
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          className="absolute bottom-16 left-0 right-0 flex justify-center z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center gap-6 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            {[
              { icon: Code, delay: 0.2 },
              { icon: Cloud, delay: 0.4 },
              { icon: Smartphone, delay: 0.6 },
              { icon: Rocket, delay: 0.8 }
            ].map(({ icon: Icon, delay }, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1 + delay, duration: 0.6, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="h-12 w-12 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl group-hover:border-white/30 transition-all duration-300 cursor-pointer">
                  <Icon className="h-6 w-6 text-white/90 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <button
              onClick={() => scrollToSection(scrollToSectionId)}
              className="flex flex-col items-center text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll Down"
            >
              <span className="mb-2">Scroll Down</span>
              <div className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
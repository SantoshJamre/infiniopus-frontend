import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Store, User, Users, TrendingUp, Award, Briefcase, Target, Star, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const Growth = () => {
  const [studentStage, setStudentStage] = useState(0);
  const [clientStage, setClientStage] = useState(0);
  const [isHovered, setIsHovered] = useState({ student: false, client: false });
  const controls = useAnimation();

  // Auto-cycle through stages with pause on hover
  useEffect(() => {
    let studentInterval: NodeJS.Timeout;
    let clientInterval: NodeJS.Timeout;

    if (!isHovered.student) {
      studentInterval = setInterval(() => {
        setStudentStage(prev => (prev + 1) % 4);
      }, 3000);
    }

    if (!isHovered.client) {
      clientInterval = setInterval(() => {
        setClientStage(prev => (prev + 1) % 4);
      }, 3500);
    }

    return () => {
      clearInterval(studentInterval);
      clearInterval(clientInterval);
    };
  }, [isHovered]);

  const studentStages = [
    {
      title: "Beginner",
      subtitle: "Starting Journey",
      progress: 25,
      icon: User,
      color: "from-gray-400 to-gray-500",
      bgColor: "from-gray-50 to-gray-100",
      description: "Learning fundamentals"
    },
    {
      title: "Learning",
      subtitle: "Skill Development",
      progress: 50,
      icon: Target,
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      description: "Building expertise"
    },
    {
      title: "Growing",
      subtitle: "Advanced Skills",
      progress: 75,
      icon: TrendingUp,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      description: "Mastering concepts"
    },
    {
      title: "Expert",
      subtitle: "Career Ready",
      progress: 100,
      icon: Award,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      description: "Industry professional"
    }
  ];

  const clientStages = [
    {
      title: "Startup",
      subtitle: "Small Business",
      progress: 25,
      icon: Store,
      color: "from-orange-400 to-orange-500",
      bgColor: "from-orange-50 to-orange-100",
      description: "Local presence"
    },
    {
      title: "Expanding",
      subtitle: "Growing Market",
      progress: 50,
      icon: TrendingUp,
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      description: "Regional reach"
    },
    {
      title: "Scaling",
      subtitle: "Market Leader",
      progress: 75,
      icon: Briefcase,
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      description: "National presence"
    },
    {
      title: "Enterprise",
      subtitle: "Industry Giant",
      progress: 100,
      icon: Star,
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      description: "Global impact"
    }
  ];

  const CircularProgress = ({ progress, stage, stages, type, isHovered }) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    const gradientId = `gradient-${type}-${stage}`;

    return (
      <div className="relative w-36 h-36 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-100"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset,
              rotate: isHovered ? 90 : 0,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ 
              strokeDashoffset: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 1, ease: "easeInOut" },
              scale: { duration: 0.3, ease: "easeOut" }
            }}
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="text-blue-400" />
              <stop offset="100%" className="text-indigo-600" />
            </linearGradient>
          </defs>
        </svg>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            rotate: { duration: 2, ease: "linear", repeat: Infinity },
            scale: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                type: "spring",
                damping: 15,
                stiffness: 300,
                rotate: { 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1]
                }
              }}
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${stages[stage].color} flex items-center justify-center shadow-lg`}
            >
              {React.createElement(stages[stage].icon, { 
                className: "h-8 w-8 text-white" 
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    );
  };

  const StageIndicators = ({ currentStage, stages, onClick }) => (
    <div className="flex justify-center space-x-2 mb-6">
      {stages.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onClick(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentStage 
              ? 'w-8 bg-gradient-to-r from-blue-500 to-indigo-600' 
              : index < currentStage
                ? 'w-6 bg-green-400'
                : 'w-4 bg-gray-300'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );

  const GrowthCard = ({ 
    title, 
    stages, 
    currentStage, 
    setCurrentStage, 
    type, 
    isHovered,
    onHoverStart,
    onHoverEnd 
  }) => {
    const currentStageData = stages[currentStage];
    
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="relative group"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
      >
        {/* Animated background glow */}
        <motion.div 
          className={`absolute -inset-4 bg-gradient-to-br ${currentStageData.bgColor} rounded-2xl -z-10 opacity-70 blur-xl`}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ 
            y: -5,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <StageIndicators 
              currentStage={currentStage}
              stages={stages}
              onClick={setCurrentStage}
            />
          </div>

          {/* Circular Progress */}
          <CircularProgress 
            progress={currentStageData.progress}
            stage={currentStage}
            stages={stages}
            type={type}
            isHovered={isHovered}
          />

          {/* Stage Info */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h4 className={`text-xl font-bold bg-gradient-to-r ${currentStageData.color} bg-clip-text text-transparent mb-2`}>
                {currentStageData.title}
              </h4>
              <p className="text-gray-600 font-medium mb-2">
                {currentStageData.subtitle}
              </p>
              <p className="text-sm text-gray-500">
                {currentStageData.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Growth visualization */}
          <div className="mt-6 h-24 relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
            <motion.div
              className={`absolute bottom-0 left-0 h-full bg-gradient-to-r ${currentStageData.color} rounded-lg`}
              initial={{ width: '0%' }}
              animate={{ width: `${currentStageData.progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                key={currentStage}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-white font-bold text-lg"
              >
                {currentStageData.progress === 100 ? '🎉' : '🌱'}
              </motion.div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${currentStageData.color} rounded-full opacity-30`}
                animate={{
                  y: [-10, -100],
                  x: [Math.random() * 300, Math.random() * 300],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '100%',
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        initial={{ backgroundPosition: '0 0' }}
        animate={{ backgroundPosition: '50px 50px' }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeIn}
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full mb-4"
          >
            Growth Journey
          </motion.div>
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Transforming Lives & Businesses
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Watch how we nurture growth from seed to success, empowering students and businesses to reach their full potential.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeIn}>
            <GrowthCard
              title="Student Growth"
              stages={studentStages}
              currentStage={studentStage}
              setCurrentStage={setStudentStage}
              type="student"
              isHovered={isHovered.student}
              onHoverStart={() => setIsHovered(prev => ({ ...prev, student: true }))}
              onHoverEnd={() => setIsHovered(prev => ({ ...prev, student: false }))}
            />
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <GrowthCard
              title="Client Growth"
              stages={clientStages}
              currentStage={clientStage}
              setCurrentStage={setClientStage}
              type="client"
              isHovered={isHovered.client}
              onHoverStart={() => setIsHovered(prev => ({ ...prev, client: true }))}
              onHoverEnd={() => setIsHovered(prev => ({ ...prev, client: false }))}
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced decorative elements */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 20, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
    </section>
  );
};

export default Growth;
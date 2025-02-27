// HeroSection.jsx
import React from 'react';
import { School, GraduationCap, Award, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Moving background elements
  const floatingElements = [
    { id: 1, size: 'w-16 h-16', color: 'bg-[#E76F51]', opacity: 'opacity-20', initialPosition: 'top-10 left-10', animate: { x: [0, 30, 0], y: [0, -30, 0], rotate: [0, 15, 0] } },
    { id: 2, size: 'w-20 h-20', color: 'bg-yellow-300', opacity: 'opacity-10', initialPosition: 'top-32 right-20', animate: { x: [0, -40, 0], y: [0, 20, 0], rotate: [0, -10, 0] } },
    { id: 3, size: 'w-24 h-24', color: 'bg-[#8A2E88]', opacity: 'opacity-15', initialPosition: 'bottom-10 left-1/4', animate: { x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 5, 0] } },
    { id: 4, size: 'w-12 h-12', color: 'bg-white', opacity: 'opacity-10', initialPosition: 'bottom-20 right-1/3', animate: { x: [0, -15, 0], y: [0, 25, 0], rotate: [0, -8, 0] } },
  ];

  return (
    <section className="bg-[#8A2E88] bg-opacity-30 w-[100vw] py-10 sm:py-16 lg:py-24 overflow-hidden relative">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full ${element.size} ${element.color} ${element.opacity} ${element.initialPosition} z-0`}
          animate={element.animate}
          transition={{ 
            repeat: Infinity, 
            duration: 8 + Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto lg:mx-0"
          >
            <motion.p 
              variants={itemVariants}
              className="text-base font-semibold tracking-wider text-yellow-300 uppercase"
            >
              A World-Class Educational Experience
            </motion.p>
            
            <motion.h1 
              variants={itemVariants}
              className="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-7xl"
            >
              Mysore International School
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-base text-white lg:mt-8 sm:text-xl"
            >
              Academics. Leadership. Sports. A Future Without Limits!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8"
            >
              <Award className="w-6 h-6 text-[#E76F51]" />
              <p className="text-xl font-semibold text-yellow-300">
                Admissions Open for 2025-26! Secure Your Spot Today.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Admission Form - Updated for better mobile view */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none"
          >
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 shadow-black relative overflow-hidden">
              {/* Decorative elements on the form */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#E76F51] opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#8A2E88] opacity-15"></div>
              
              <div className="relative z-10">
                <h2 className="text-[#8A2E88] text-2xl font-bold mb-2">Admission Enquiry</h2>
                <p className="text-gray-600 mb-6">Limited seats available for Academic Year 2024-25</p>
                
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Parent's Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88]" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-[#E76F51] rounded-full mr-2"></div>
                      Child's Grade Applying For <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8A2E88] appearance-none bg-white relative">
                      <option value="" disabled selected>Select grade</option>
                      <option value="pre-k">Pre-Kindergarten</option>
                      <option value="k">Kindergarten</option>
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#E76F51] hover:shadow-lg hover:shadow-purple-700 cursor-pointer text-white py-4 px-6 rounded-full font-semibold flex items-center justify-center hover:bg-[#E76F51]/90 transition-all duration-200"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit & Get More Info
                  </button>
                </form>
                
                <div className="mt-6 flex items-start p-3 border-l-4 border-[#E76F51]">
                  <p className="text-[#E76F51] font-medium">
                    "Seats are filling fast! Secure your child's future today!"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// HeroSection.jsx
import React from 'react';
import { School, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import image1 from "../assets/Logos/image1.png";
import image2 from "../assets/Logos/image2.png";


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

  return (
    <section className="bg-[#8A2E88] bg-opacity-30 w-[100vw] py-10 sm:py-16 lg:py-24">
      <div className="px-4  mx-auto max-w-[70vw] sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
              className="mt-6 text-lg text-purple-100 italic border-l-4 border-[#E76F51] pl-4 py-2"
            >
              <p>
                "Give your child a world-class education that blends academic excellence, leadership
                development, and top-tier sports facilities—preparing them for a future without limits!"
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8"
            >
              <Award className="w-6 h-6 text-[#E76F51]" />
              <p className="text-xl font-semibold text-yellow-300">
                Admissions Open for 2025-26! Secure Your Spot Today.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-[#8A2E88] transition-all duration-200 bg-white rounded-full hover:bg-gray-100 focus:bg-gray-100" 
                role="button"
              >
                Apply Now
                <ArrowRight className="w-6 h-6 ml-4" />
              </a>
              
              <a 
                href="#campus-tour" 
                className="inline-flex items-center justify-center px-6 py-4 font-semibold text-black transition-all duration-200 bg-[#E76F51] rounded-full hover:bg-[#E76F51]/90 focus:bg-[#E76F51]/90" 
                role="button"
              >
                Book Campus Tour
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8">
  <p className="text-purple-100 mb-4">Why our students excel:</p>
  <div className="flex flex-row flex-nowrap items-center justify-between w-full px-4">
    <div className="flex items-center whitespace-nowrap mx-4">
      <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
      <span className="text-white">Personalized Learning</span>
    </div>
    
    <div className="flex items-center whitespace-nowrap mx-4">
      <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
      <span className="text-white">Leadership Development</span>
    </div>
    
    <div className="flex items-center whitespace-nowrap mx-4">
      <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
      <span className="text-white">State-of-the-art Facilities</span>
    </div>
  </div>
</motion.div>
          </motion.div>

          {/* Right Content - Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl shadow-fuchsia-500">
                <img 
                  className="w-full" 
                  src={image2}
                  alt="Students of Mysore International School" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#E76F51] opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#8A2E88] opacity-30"></div>
              
              {/* Student Collage Overlay */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                <img 
                  src={image1}
                  alt="Student with camera" 
                  className="w-full h-full object-cover"
                />
              </div>
              
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
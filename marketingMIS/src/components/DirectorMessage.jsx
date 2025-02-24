// src/components/DirectorMessage.jsx
import React, { useState } from 'react';
import { 
  ChevronDown,
  Quote,
  Award,
  BookOpen,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import {
  Card,
  CardContent,
  CardHeader,
} from './Card';

const DirectorMessage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullMessage = `The journey of a thousand miles begins with a single step. As we enter our tenth year, we continue working towards our goal: establishing Mysore International School as a place that inspires students with both academic excellence and character development.

  Our commitment to providing world-class education is reflected in every aspect of our institution. From our state-of-the-art facilities to our dedicated faculty, we strive to create an environment where every student can thrive and realize their full potential.

  We believe in nurturing not just academic excellence, but also fostering leadership qualities, sports skills, and strong values that will serve our students throughout their lives. Our unique approach combines rigorous academics with practical learning experiences, ensuring our students are well-prepared for the challenges of tomorrow.

  At Mysore International School, we're not just building a school; we're building the future leaders of tomorrow. Join us in this exciting journey of learning and growth.`;

  const shortMessage = fullMessage.split('.')[0] + '.';
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
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
    <div className="w-[100vw] bg-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gray-50 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-[#8A2E88]/10"></span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#264653] relative">
                Director's Message
              </h2>
            </span>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-xl p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Background quote mark */}
            <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/4 -translate-y-1/4">
              <Quote className="w-80 h-80 text-[#8A2E88]" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#8A2E88] to-[#6A1B67] p-1">
                    <img
                      src="/api/placeholder/400/400"
                      alt="Dr. Joseph K Thomas, Director"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Quote className="w-10 h-10 text-[#8A2E88]" />
                  </div>
                </div>
                
                <div className="mt-10 bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-bold text-[#264653] mb-2">Dr. Joseph K Thomas</h4>
                  <p className="text-[#8A2E88] font-medium mb-3">Director, Mysore International School</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>Ph.D. in Educational Leadership</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <div className="space-y-4">
                    <p className="text-xl text-[#264653] leading-relaxed italic">
                      {isExpanded ? fullMessage : shortMessage}
                    </p>
                    <motion.button
                      className="text-[#8A2E88] hover:text-[#8A2E88]/80 font-semibold flex items-center gap-2"
                      onClick={() => setIsExpanded(!isExpanded)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </motion.button>
                  </div>
                </div>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div className="flex flex-col items-center" variants={itemVariants}>
                    <div className="bg-[#8A2E88]/10 p-3 rounded-full mb-3">
                      <BookOpen className="w-6 h-6 text-[#8A2E88]" />
                    </div>
                    <p className="text-3xl font-bold text-[#8A2E88]">25+</p>
                    <p className="text-gray-600">Years in Education</p>
                  </motion.div>
                  
                  <motion.div className="flex flex-col items-center" variants={itemVariants}>
                    <div className="bg-[#8A2E88]/10 p-3 rounded-full mb-3">
                      <Users className="w-6 h-6 text-[#8A2E88]" />
                    </div>
                    <p className="text-3xl font-bold text-[#8A2E88]">1000+</p>
                    <p className="text-gray-600">Students Mentored</p>
                  </motion.div>
                  
                  <motion.div className="flex flex-col items-center" variants={itemVariants}>
                    <div className="bg-[#8A2E88]/10 p-3 rounded-full mb-3">
                      <Award className="w-6 h-6 text-[#8A2E88]" />
                    </div>
                    <p className="text-3xl font-bold text-[#8A2E88]">50+</p>
                    <p className="text-gray-600">Educational Awards</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center space-y-6 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-[#264653]">
            Join Us in Shaping the Future
          </h3>
          <p className="text-gray-600">
            Be part of our vision to create tomorrow's leaders through world-class education and holistic development
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white px-8 py-3 rounded-full text-lg shadow-md"
              onClick={() => window.location.href = '#lead-capture'}
            >
              Apply Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DirectorMessage;
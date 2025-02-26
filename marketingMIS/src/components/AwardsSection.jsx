// AwardsSection.jsx
import React from 'react';
import { 
  Award,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardDescription 
} from './Card';

const AwardsSection = () => {
  const awards = [
    {
      icon: <Trophy className="w-14 h-14 text-[#F4A261]" />,
      title: "Best Emerging School 2024",
      organization: "Education World",
      description: "Recognized for excellence in academic innovation and sports facilities"
    },
    {
      icon: <Star className="w-14 h-14 text-[#F4A261]" />,
      title: "5-Star Rating for Sports Infrastructure",
      organization: "International School Sports Federation",
      description: "Awarded for world-class sports facilities and training programs"
    },
    {
      icon: <Award className="w-14 h-14 text-[#F4A261]" />,
      title: "Excellence in Holistic Education",
      organization: "National Education Board",
      description: "Recognized for balanced approach to academics, sports, and leadership"
    }
  ];

  const recognitions = [
    "Ranked among Top 10 CBSE Schools in Karnataka",
    "Best Sports Infrastructure Award 2023",
    "Innovation in Education Award",
    "Excellence in Co-Curricular Activities"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-100 rounded-full translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-[#F4A261]/20"></span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#264653] relative">
                Awards & Recognition
              </h2>
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of excellence in education and sports
          </p>
        </motion.div>

        {/* Major Awards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F4A261]"></div>
                <CardHeader className="pt-8 pb-4 text-center">
                  <motion.div 
                    className="flex justify-center mb-6 bg-[#F4A261]/10 p-5 rounded-full w-24 h-24 mx-auto"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(244, 162, 97, 0.2)" }}
                  >
                    {award.icon}
                  </motion.div>
                  <CardTitle className="text-2xl text-[#264653] group-hover:text-[#8A2E88] transition-colors">
                    {award.title}
                  </CardTitle>
                  <CardDescription className="text-[#8A2E88] font-semibold mt-2">
                    {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Recognitions */}
        <motion.div 
          className="bg-[#264653] text-white rounded-xl p-10 shadow-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Additional Recognitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recognitions.map((recognition, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 bg-white/10 p-5 rounded-lg hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Award className="w-8 h-8 text-[#F4A261] flex-shrink-0" />
                  <span className="text-lg">{recognition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "50+", label: "Awards & Recognitions" },
            { number: "1000+", label: "Successful Alumni" },
            { number: "100%", label: "Parent Satisfaction" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center p-6 rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <p className="text-4xl font-bold text-[#8A2E88] mb-2">{stat.number}</p>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-6 max-w-3xl mx-auto bg-gray-50 p-10 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-[#264653]">
            Join Our Award-Winning Institution
          </h3>
          <p className="text-xl text-gray-600">
            Give your child the advantage of studying at one of Karnataka's most prestigious schools
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 my-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">World-class facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Expert faculty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Proven track record</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white text-lg px-8 py-3 rounded-full shadow-md flex items-center gap-2 mx-auto"
              onClick={() => window.location.href = '#lead-capture'}
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsSection;
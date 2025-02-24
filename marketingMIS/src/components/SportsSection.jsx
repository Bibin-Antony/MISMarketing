// SportsSection.jsx
import React from 'react';
import { 
  Trophy,
  User,
  CalendarCheck,
  ChevronRight,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "./Card";

const SportsSection = () => {
  const sportsFacilities = [
    {
      icon: "⚽",
      title: "FIFA-Standard Football Field",
      description: "State-of-the-art artificial turf with flood lights and spectator gallery",
      features: ["Professional coaching", "Regular tournaments", "Advanced training equipment"],
      color: "bg-green-500",
      ctaText: "Football Programs"
    },
    {
      icon: "🏀",
      title: "NBA-Standard Basketball Court",
      description: "Indoor court with premium flooring and modern amenities",
      features: ["Height-adjustable hoops", "Professional scoring system", "Climate controlled"],
      color: "bg-orange-500",
      ctaText: "Basketball Programs"
    },
    {
      icon: "🎾",
      title: "ITF-Approved Tennis Courts",
      description: "Multiple courts with professional-grade surfaces",
      features: ["All-weather courts", "Tournament ready", "Professional coaching"],
      color: "bg-yellow-500",
      ctaText: "Tennis Programs"
    },
    {
      icon: "🏏",
      title: "Professional Cricket Nets",
      description: "Multiple practice nets with bowling machines",
      features: ["Bowling machines", "Video analysis", "Professional equipment"],
      color: "bg-blue-500",
      ctaText: "Cricket Programs"
    },
    {
      icon: "🏃",
      title: "4-Lane Professional Running Track",
      description: "IAAF standard synthetic track for athletics",
      features: ["Professional timing system", "Multiple lanes", "All-weather surface"],
      color: "bg-red-500",
      ctaText: "Track Programs"
    }
  ];

  const achievements = [
    {
      title: "Regional Champions",
      detail: "Inter-School Football Tournament 2023",
      icon: "🏆"
    },
    {
      title: "State Finalists",
      detail: "Basketball Tournament 2023",
      icon: "🥈"
    },
    {
      title: "Tournament Winners",
      detail: "Multiple Tennis Tournaments",
      icon: "🏅"
    },
    {
      title: "District Champions",
      detail: "Cricket Championship 2023",
      icon: "🏏"
    }
  ];

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
    <div className="py-16 bg-gradient-to-b from-white to-gray-50 w-[100vw]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-0 h-3 bg-[#8A2E88]/20"></span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#264653] relative">
                World-Class Sports Facilities
              </h2>
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing champions with state-of-the-art facilities and professional coaching
          </p>
        </motion.div>

        {/* Sports Facilities Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sportsFacilities.map((facility, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full overflow-hidden border-0 shadow-lg">
                <div className={`h-2 w-full ${facility.color}`}></div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <span className="text-5xl">{facility.icon}</span>
                    <CardTitle className="text-xl font-bold text-[#264653]">
                      {facility.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <CardDescription className="text-base mb-5 text-gray-700">
                    {facility.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="h-2 w-2 rounded-full bg-[#8A2E88] mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0">
                  <a href="#learn-more" className="inline-flex items-center text-[#8A2E88] font-medium hover:underline">
                    {facility.ctaText}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="rounded-xl p-10 bg-gradient-to-br from-[#8A2E88]/10 to-white shadow-lg border border-[#8A2E88]/20 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-[#8A2E88] rounded-full text-white">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-[#264653]">
              Our Sports Achievements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{achievement.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[#264653] text-center mb-1">{achievement.title}</h4>
                <p className="text-gray-600 text-center text-sm">{achievement.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sports Programs CTA */}
        <motion.div 
          className="bg-gradient-to-r from-[#264653] to-[#1f3a45] text-white rounded-xl p-10 shadow-xl overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <h3 className="text-3xl font-bold">Join Our Elite Sports Programs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="bg-white/10 p-6 rounded-lg"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Professional Coaches</h4>
                <p className="text-sm text-gray-200">Learn from experts with years of experience</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-6 rounded-lg"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Regular Tournaments</h4>
                <p className="text-sm text-gray-200">Compete at all levels from local to national</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 p-6 rounded-lg"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
              >
                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-2">Structured Training</h4>
                <p className="text-sm text-gray-200">Scientifically designed programs for all ages</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="pt-6" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white px-8 py-3 text-lg rounded-full shadow-lg"
                onClick={() => window.location.href = '#lead-capture'}
              >
                Enroll Now
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} fill="#FFD700" className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-xl italic text-gray-700 mb-6">
            "The sports program at Mysore International School has transformed my child. The coaches are outstanding, and the facilities are truly world-class. My son has not only improved his skills but also developed discipline and teamwork."
          </blockquote>
          <div>
            <p className="font-bold text-[#264653]">Rajesh Kumar</p>
            <p className="text-gray-500">Parent of Vikram, Class 8</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SportsSection;
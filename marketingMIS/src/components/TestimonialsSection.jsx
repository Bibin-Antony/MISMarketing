// TestimonialsSection.jsx
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Play,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./Card";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "We wanted more than just good grades for our child. Mysore International School provided the perfect balance of academics, sports, and leadership training. Now, my son is excelling in studies and sports!",
      author: "Dr. Ananya Sharma",
      role: "Parent",
      rating: 5
    },
    {
      text: "The best decision we made! The school's world-class sports facilities and innovative learning approach truly prepare kids for real-world success.",
      author: "Ravi Menon",
      role: "IT Professional & Parent",
      rating: 5
    },
    {
      text: "The leadership programs and sports facilities have transformed my daughter into a confident young athlete. The academic support is outstanding!",
      author: "Priya Kumar",
      role: "Parent",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-[100vw] bg-[#8A2E88] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 space-y-16 relative z-10">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Hear from our community of satisfied parents who've seen their children thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Written Testimonials */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Parent Testimonials</h3>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="relative h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Card className="bg-white rounded-xl shadow-2xl h-full">
                    <CardHeader>
                      <div className="flex gap-1">
                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Quote className="w-10 h-10 text-[#8A2E88]/20" />
                      <CardDescription className="text-xl text-gray-700 font-medium">
                        "{testimonials[currentSlide].text}"
                      </CardDescription>
                      <div>
                        <p className="font-bold text-[#264653] text-lg">
                          {testimonials[currentSlide].author}
                        </p>
                        <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 mx-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Video Testimonials */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white">Video Testimonials</h3>
            <div className="relative aspect-video bg-black/20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/api/placeholder/640/360"
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button 
                  className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-10 h-10" />
                </motion.button>
              </motion.div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-bold">Student Success Stories</p>
                <p className="text-sm opacity-80">Watch our journey of excellence</p>
              </div>
            </div>
            <p className="text-center text-purple-200 text-lg">
              Watch inspiring stories from our school community
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white text-xl mb-6">Ready to give your child the best education experience?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-white hover:bg-gray-100 text-[#8A2E88] text-lg px-8 py-3 rounded-full shadow-xl"
              onClick={() => window.location.href = '#lead-capture'}
            >
              Join Our Thriving Community – Apply Now!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
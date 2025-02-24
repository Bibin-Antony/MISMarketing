// TestimonialsSection.jsx
import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Play,
  Star 
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
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
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          What Parents Say About Us
        </h2>
        <p className="text-lg text-gray-600">
          Hear from our community of satisfied parents
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Written Testimonials */}
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-[#264653]">Parent Testimonials</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <div className="flex gap-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F4A261] text-[#F4A261]" />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-lg text-gray-700 italic">
                "{testimonials[currentSlide].text}"
              </CardDescription>
              <div>
                <p className="font-semibold text-[#264653]">
                  {testimonials[currentSlide].author}
                </p>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#8A2E88]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#264653]">Video Testimonials</h3>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/640/360"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white rounded-full w-16 h-16 flex items-center justify-center"
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
          </div>
          <p className="text-center text-gray-600">
            Watch our parent and student testimonials
          </p>
        </div>
      </div>

      <div className="text-center">
        <Button 
          className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white"
          onClick={() => window.location.href = '#lead-capture'}
        >
          Join Our Thriving Community – Apply Now!
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
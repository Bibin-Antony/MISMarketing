// HeroSection.jsx
import React from 'react';
import { School, GraduationCap, Award } from 'lucide-react';
import Button from './Button'; // Changed from { Button }

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <School className="w-8 h-8 text-[#8A2E88]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#264653]">
              Mysore International School
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#F4A261]" />
            <h2 className="text-xl md:text-2xl font-semibold text-[#264653]">
              Academics. Leadership. Sports. A Future Without Limits!
            </h2>
          </div>
        </div>

        <p className="text-lg text-gray-700 italic">
          "Give your child a world-class education that blends academic excellence, leadership
          development, and top-tier sports facilities—preparing them for a future without limits!"
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#E76F51]" />
            <p className="text-lg font-semibold text-[#264653]">
              Admissions Open for 2024-25! Secure Your Spot Today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white"
              onClick={() => window.location.href = '#contact'}
            >
              Book a Call
            </Button>
            <Button 
              className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white"
              onClick={() => window.location.href = '#campus-tour'}
            >
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="flex-1 w-full h-full min-h-[400px] relative">
        <img
          src="/api/placeholder/800/600"
          alt="Students engaged in learning, leadership, and sports"
          className="rounded-lg shadow-xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
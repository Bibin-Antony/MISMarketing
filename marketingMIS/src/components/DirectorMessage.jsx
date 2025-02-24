// src/components/DirectorMessage.jsx
import React, { useState } from 'react';
import { 
  ChevronDown,
  Quote 
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
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

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#264653]">
          Director's Message
        </h2>
      </div>

      <Card className="relative overflow-hidden">
        <CardHeader className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden bg-gray-100">
              <img
                src="/api/placeholder/400/400"
                alt="School Director"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-[#264653]">
                Ms. Suseela Santhosh
              </h3>
              <Quote className="w-8 h-8 text-[#8A2E88]" />
            </div>
            <p className="text-lg font-medium text-[#8A2E88]">
              Director, Mysore International School
            </p>
            <div className="space-y-2">
              <p className="text-[#264653] leading-relaxed">
                {isExpanded ? fullMessage : shortMessage}
              </p>
              <Button
                variant="link"
                className="text-[#8A2E88] hover:text-[#8A2E88]/80 p-0 h-auto font-semibold flex items-center gap-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8A2E88]">25+</p>
              <p className="text-gray-600">Years in Education</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8A2E88]">1000+</p>
              <p className="text-gray-600">Students Mentored</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#8A2E88]">50+</p>
              <p className="text-gray-600">Educational Awards</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-[#264653]">
          Join Us in Shaping the Future
        </h3>
        <Button 
          className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white"
          onClick={() => window.location.href = '#lead-capture'}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default DirectorMessage;
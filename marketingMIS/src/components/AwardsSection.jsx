// AwardsSection.jsx
import React from 'react';
import { 
  Award,
  Trophy,
  Star,
  ArrowRight 
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }

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
      icon: <Trophy className="w-12 h-12 text-[#F4A261]" />,
      title: "Best Emerging School 2024",
      organization: "Education World",
      description: "Recognized for excellence in academic innovation and sports facilities"
    },
    {
      icon: <Star className="w-12 h-12 text-[#F4A261]" />,
      title: "5-Star Rating for Sports Infrastructure",
      organization: "International School Sports Federation",
      description: "Awarded for world-class sports facilities and training programs"
    },
    {
      icon: <Award className="w-12 h-12 text-[#F4A261]" />,
      title: "Excellence in Holistic Education",
      organization: "National Education Board",
      description: "Recognized for balanced approach to academics, sports, and leadership"
    }
  ];

  const recognitions = [
    "Ranked among Top 10 International Schools in Karnataka",
    "Best Sports Infrastructure Award 2023",
    "Innovation in Education Award",
    "Excellence in Co-Curricular Activities"
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          Awards & Recognition
        </h2>
        <p className="text-lg text-gray-600">
          Celebrating excellence in education and sports
        </p>
      </div>

      {/* Major Awards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow text-center"
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                {award.icon}
              </div>
              <CardTitle className="text-xl text-[#264653]">
                {award.title}
              </CardTitle>
              <CardDescription className="text-[#8A2E88] font-medium">
                {award.organization}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {award.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Recognitions */}
      <div className="bg-[#264653] text-white rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Additional Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-lg"
              >
                <Award className="w-6 h-6 text-[#F4A261] flex-shrink-0" />
                <span>{recognition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-[#264653]">
          Join Our Award-Winning Institution
        </h3>
        <p className="text-lg text-gray-600">
          Give your child the advantage of studying at one of Karnataka's most prestigious schools
        </p>
        <Button 
          className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white flex items-center gap-2"
          onClick={() => window.location.href = '#lead-capture'}
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "15+", label: "Years of Excellence" },
          { number: "50+", label: "Awards & Recognitions" },
          { number: "1000+", label: "Successful Alumni" },
          { number: "100%", label: "Parent Satisfaction" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold text-[#8A2E88]">{stat.number}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
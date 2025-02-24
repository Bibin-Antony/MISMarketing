// WhyChooseUs.jsx
import React from 'react';
import { 
  Lightbulb, 
  Users, 
  Trophy, 
  UserPlus, 
  Globe,
  Mail
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './Card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#8A2E88]" />,
      title: "Future-Ready Curriculum",
      description: "Blending academics, innovation, and real-world problem-solving for comprehensive development."
    },
    {
      icon: <Users className="w-8 h-8 text-[#8A2E88]" />,
      title: "Leadership Development",
      description: "Public speaking, critical thinking, and entrepreneurship training for tomorrow's leaders."
    },
    {
      icon: <Trophy className="w-8 h-8 text-[#8A2E88]" />,
      title: "World-Class Sports Facilities",
      subFeatures: [
        "FIFA-Standard Football Field",
        "NBA-Standard Basketball Court",
        "ITF-Approved Tennis Courts",
        "Professional Cricket Nets",
        "4-Lane Professional Running Track"
      ]
    },
    {
      icon: <UserPlus className="w-8 h-8 text-[#8A2E88]" />,
      title: "Personalized Attention",
      description: "Low student-to-teacher ratio ensuring focused learning and individual growth."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#8A2E88]" />,
      title: "Global Exposure",
      description: "Preparing students for IITs, IIMs, Ivy League, and beyond."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          Why Choose Mysore International School?
        </h2>
        <p className="text-xl text-[#8A2E88]">
          The Future of Education Starts Here!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                {feature.icon}
                <CardTitle className="text-xl text-[#264653]">
                  {feature.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {feature.description && (
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              )}
              {feature.subFeatures && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {feature.subFeatures.map((subFeature, idx) => (
                    <li key={idx}>{subFeature}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-lg font-semibold text-[#E76F51]">
          Limited Seats Available – Apply Now!
        </p>
        <Button 
          className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white flex items-center gap-2"
          onClick={() => window.location.href = '#lead-capture'}
        >
          <Mail className="w-4 h-4" />
          Request More Info
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
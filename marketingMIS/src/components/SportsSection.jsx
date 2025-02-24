// SportsSection.jsx
import React from 'react';
import { 
  Trophy,
  User,
  CalendarCheck 
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

const SportsSection = () => {
  const sportsFacilities = [
    {
      icon: "⚽",
      title: "FIFA-Standard Football Field",
      description: "State-of-the-art artificial turf with flood lights and spectator gallery",
      features: ["Professional coaching", "Regular tournaments", "Advanced training equipment"]
    },
    {
      icon: "🏀",
      title: "NBA-Standard Basketball Court",
      description: "Indoor court with premium flooring and modern amenities",
      features: ["Height-adjustable hoops", "Professional scoring system", "Climate controlled"]
    },
    {
      icon: "🎾",
      title: "ITF-Approved Tennis Courts",
      description: "Multiple courts with professional-grade surfaces",
      features: ["All-weather courts", "Tournament ready", "Professional coaching"]
    },
    {
      icon: "🏏",
      title: "Professional Cricket Nets",
      description: "Multiple practice nets with bowling machines",
      features: ["Bowling machines", "Video analysis", "Professional equipment"]
    },
    {
      icon: "🏃",
      title: "4-Lane Professional Running Track",
      description: "IAAF standard synthetic track for athletics",
      features: ["Professional timing system", "Multiple lanes", "All-weather surface"]
    }
  ];

  const achievements = [
    "Regional Champions in Inter-School Football Tournament 2023",
    "State-level Basketball Tournament Finalists",
    "Multiple Tennis Tournament Winners",
    "District Cricket Championship Winners"
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          World-Class Sports Facilities
        </h2>
        <p className="text-lg text-gray-600">
          Nurturing champions with state-of-the-art facilities and professional coaching
        </p>
      </div>

      {/* Sports Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsFacilities.map((facility, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{facility.icon}</span>
                <CardTitle className="text-xl text-[#264653]">
                  {facility.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                {facility.description}
              </CardDescription>
              <ul className="space-y-2">
                {facility.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <div className="h-2 w-2 rounded-full bg-[#8A2E88]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-[#8A2E88]/10 rounded-lg p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Trophy className="w-8 h-8 text-[#8A2E88]" />
          <h3 className="text-2xl font-bold text-[#264653]">
            Our Sports Achievements
          </h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#E76F51]" />
              <span className="text-gray-700">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sports Programs CTA */}
      <div className="bg-[#264653] text-white rounded-lg p-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">Join Our Elite Sports Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 justify-center">
              <User className="w-6 h-6" />
              <span>Professional Coaches</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Trophy className="w-6 h-6" />
              <span>Regular Tournaments</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CalendarCheck className="w-6 h-6" />
              <span>Structured Training</span>
            </div>
          </div>
          <Button 
            className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white mt-4"
            onClick={() => window.location.href = '#lead-capture'}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SportsSection;
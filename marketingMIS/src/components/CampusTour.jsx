// src/components/CampusTour.jsx
import React from 'react';
import { 
  PlayCircle, 
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

const CampusTour = () => {
  const highlights = [
    {
      title: "Smart Classrooms",
      description: "Experience our technology-enabled learning spaces"
    },
    {
      title: "Sports Complex",
      description: "Visit our FIFA-standard field and NBA-standard court"
    },
    {
      title: "Science Labs",
      description: "Explore our state-of-the-art laboratories"
    },
    {
      title: "Library",
      description: "Discover our extensive collection of books and digital resources"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          Let's Take A Tour Of Our Campus!
        </h2>
        <p className="text-lg text-gray-600">
          Experience our world-class facilities firsthand
        </p>
      </div>

      {/* Video Section */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
        <img
          src="/api/placeholder/1280/720"
          alt="Campus tour video thumbnail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Button 
            className="bg-white/90 hover:bg-white text-[#8A2E88] rounded-full w-20 h-20 flex items-center justify-center"
            onClick={() => {/* Handle video play */}}
          >
            <PlayCircle className="w-12 h-12" />
          </Button>
        </div>
      </div>

      {/* Campus Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-[#264653]">
                {highlight.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                {highlight.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Schedule Tour Section */}
      <div className="bg-[#8A2E88] text-white rounded-xl p-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Schedule Your Campus Visit</h3>
            <p>
              Join us for a guided tour of our campus. Our admissions team will be happy to
              show you around and answer all your questions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Monday to Saturday: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Mysore International School Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call us for instant booking: +91 XXXXXXXXXX</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Button 
              className="bg-white text-[#8A2E88] hover:bg-white/90 w-full md:w-auto"
              onClick={() => window.location.href = '#lead-capture'}
            >
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Virtual Tour Option */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-[#264653]">
          Can't Visit Us in Person?
        </h3>
        <p className="text-gray-600">
          Take a virtual tour of our campus from the comfort of your home
        </p>
        <Button 
          variant="outline"
          className="border-[#8A2E88] text-[#8A2E88] hover:bg-[#8A2E88] hover:text-white"
        >
          Start Virtual Tour
        </Button>
      </div>
    </div>
  );
};

export default CampusTour;
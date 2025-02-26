import React from 'react';
import { Trophy, User, CalendarCheck, ChevronRight } from 'lucide-react';

const SportsSection = () => {
  const sportsFacilities = [
    {
      icon: "⚽",
      title: "FIFA-Standard Football Field",
      description: "State-of-the-art artificial turf with spectator gallery",
      features: ["Professional coaching", "Regular tournaments", "Advanced training equipment"],
      colorClass: "bg-[#8A2E88]"
    },
    {
      icon: "🏀",
      title: "NBA-Standard Basketball Court",
      description: "Outdoor court with premium synthetic flooring and modern amenities",
      features: ["Height-adjustable hoops", "Professional scoring system", "Weather-resistant surface"],
      colorClass: "bg-[#264653]"
    },
    {
      icon: "🎾",
      title: "ITF-Approved Tennis Courts",
      description: "A professional-grade tennis court with synthetic flooring",
      features: ["Weather synthetic courts", "Tournament ready", "Professional coaching"],
      colorClass: "bg-[#8A2E88]"
    },
    {
      icon: "🏏",
      title: "Professional Cricket Nets",
      description: "Multiple practice nets with bowling machines",
      features: ["Bowling machines", "Video analysis", "Professional equipment"],
      colorClass: "bg-[#264653]"
    },
    {
      icon: "🏃",
      title: "5-Lane Professional Running Track",
      description: "IAAF standard synthetic track for athletics",
      features: ["Professional timing system", "Multiple lanes", "All-weather surface"],
      colorClass: "bg-[#8A2E88]"
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

  return (
    <section className="py-12 bg-white sm:py-16 w-[100vw] lg:py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8A2E88]/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-32 h-32 bg-[#264653]/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#E76F51]/10 rounded-full"></div>
        
        <div className="text-center relative">
          <h2 className="text-3xl font-bold text-[#264653] sm:text-4xl xl:text-5xl">
            World-Class Sports Facilities
          </h2>
          <p className="mt-4 text-xl text-[#8A2E88] sm:mt-8">
            Nurturing Champions with Professional Equipment and Coaching
          </p>
        </div>

        {/* Sports Facilities Cards */}
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-8 xl:mt-24 relative">
          {sportsFacilities.map((facility, index) => (
            <div key={index} className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5 shadow-md">
              <div className="relative">
                <div className="flex justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{facility.icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">{facility.title}</h3>
                <p className="mt-4 text-base text-gray-600">
                  {facility.description}
                </p>
                <ul className="mt-4 text-base text-gray-600 space-y-2 text-left pl-4">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-left">
                  <a href="#sports-programs" className="inline-flex items-center text-[#8A2E88] font-medium hover:underline">
                    Learn More 
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#8A2E88]/10 to-white rounded-lg shadow-md border border-[#8A2E88]/20">
          <div className="flex items-center justify-center mb-8">
            <Trophy className="w-6 h-6 text-[#8A2E88] mr-4" />
            <h3 className="text-2xl font-bold text-[#264653]">
              Our Sports Achievements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5 shadow-md">
                <div className="text-center mb-4">
                  <span className="text-5xl">{achievement.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[#264653] text-center">{achievement.title}</h4>
                <p className="mt-2 text-sm text-gray-600 text-center">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#264653] to-[#1f3a45] text-white rounded-lg p-8 shadow-lg overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full"></div>
          
          <div className="text-center relative z-10 space-y-8">
            <h3 className="text-2xl font-bold">Join Our Elite Sports Programs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 bg-white/10 hover:bg-white/15">
                <User className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="font-bold">Professional Coaches</h4>
                <p className="mt-2 text-sm text-gray-200">Learn from experts with years of experience</p>
              </div>
              
              <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 bg-white/10 hover:bg-white/15">
                <Trophy className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="font-bold">Regular Tournaments</h4>
                <p className="mt-2 text-sm text-gray-200">Compete at all levels from local to national</p>
              </div>
              
              <div className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 bg-white/10 hover:bg-white/15">
                <CalendarCheck className="w-8 h-8 text-white mx-auto mb-4" />
                <h4 className="font-bold">Structured Training</h4>
                <p className="mt-2 text-sm text-gray-200">Scientifically designed programs for all ages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-[#E76F51]">
            Join Our Sports Programs Today!
          </p>
          <button 
className="mt-6 px-6 py-3 bg-[#E76F51] hover:bg-[#FF9F68] transition-all duration-500 text-white rounded-md flex items-center gap-2 mx-auto transform hover:-translate-y-1 hover:shadow-lg"
onClick={() => window.location.href = '#lead-capture'}
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Enroll Now
          </button>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-4xl mx-auto text-center p-8 rounded-lg bg-white shadow-md border border-gray-100">
          <div className="flex justify-center mb-4">
            {Array(5).fill().map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <blockquote className="text-lg italic text-gray-700 mb-6">
            "The sports program at Mysore International School has transformed my child. The coaches are outstanding, and the facilities are truly world-class. My son has not only improved his skills but also developed discipline and teamwork."
          </blockquote>
          <div>
            <p className="font-bold text-[#264653]">Rajesh Kumar</p>
            <p className="text-gray-500">Parent of Vikram, Class 8</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
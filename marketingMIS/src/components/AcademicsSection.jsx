import React from 'react';
import {
  GraduationCap,
  Star,
  Trophy,
  Calendar
} from 'lucide-react';

const AcademicsSection = () => {
  const academicFeatures = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academics that Inspire",
      features: [
        "Future-ready learning with innovation & creativity at its core",
        "Emphasis on STEM, problem-solving, and global curriculum",
        "State-of-the-art smart classrooms and learning facilities",
        "Expert faculty with international teaching experience"
      ]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Leadership that Empowers",
      features: [
        "Public speaking, teamwork, and decision-making skills",
        "Programs to build confidence, independence, and resilience",
        "Regular leadership workshops and seminars",
        "Opportunities for student-led initiatives"
      ]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Athletes in the Making",
      features: [
        "Professional training in football, basketball, cricket, tennis, and track sports",
        "State-of-the-art facilities for sports development at an elite level",
        "Expert coaching staff with international experience",
        "Regular competitions and tournaments"
      ]
    }
  ];

  return (
    <section className="py-12 bg-[#8A2E88] w-[100vw] sm:py-16 lg:py-20 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
        
        <div className="text-center relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            Academics, Leadership & Sports – The Perfect Balance!
          </h2>
          <p className="mt-4 text-xl text-white/80 sm:mt-8">
            Providing a holistic education that prepares students for future success
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-8 xl:mt-24 relative">
          {academicFeatures.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg transition-all duration-500 transform hover:scale-105 group relative overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#8A2E88]/5 hover:to-[#264653]/5">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#8A2E88]/10 group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] transition-all duration-500">
                    <span className="text-[#8A2E88] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </span>
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-bold text-[#264653] group-hover:text-[#8A2E88] transition-colors duration-300">{feature.title}</h3>
                <ul className="mt-4 text-base text-gray-600 space-y-2 text-left pl-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-[#8A2E88] group-hover:bg-gradient-to-r group-hover:from-[#8A2E88] group-hover:to-[#264653] rounded-full mr-2 transition-colors duration-300"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-white">
            Admissions Open! Your child deserves an education beyond textbooks.
          </p>
          <button 
            className="mt-6 px-6 py-3 bg-gradient-to-r from-white to-white/90 hover:from-white/90 hover:to-white transition-all duration-500 text-[#8A2E88] rounded-md flex items-center gap-2 mx-auto transform hover:-translate-y-1 hover:shadow-lg"
            onClick={() => window.location.href = '#campus-tour'}
          >
            <Calendar className="w-4 h-4" />
            Schedule a School Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
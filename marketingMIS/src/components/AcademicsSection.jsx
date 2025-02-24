import React from 'react';
import {
  GraduationCap,
  Star,
  Trophy,
  Calendar
} from 'lucide-react';
import Button from './Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from './Card';

const AcademicsSection = () => {
  const academicFeatures = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Academics that Inspire",
      features: [
        "Future-ready learning with innovation & creativity at its core",
        "Emphasis on STEM, problem-solving, and global curriculum",
        "State-of-the-art smart classrooms and learning facilities",
        "Expert faculty with international teaching experience"
      ]
    },
    {
      icon: <Star className="w-12 h-12 text-white" />,
      title: "Leadership that Empowers",
      features: [
        "Public speaking, teamwork, and decision-making skills",
        "Programs to build confidence, independence, and resilience",
        "Regular leadership workshops and seminars",
        "Opportunities for student-led initiatives"
      ]
    },
    {
      icon: <Trophy className="w-12 h-12 text-white" />,
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
    <div className="py-16 bg-[#8A2E88] w-[100vw]">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Academics, Leadership & Sports – The Perfect Balance!
          </h2>
          <p className="text-lg text-white/80">
            Providing a holistic education that prepares students for future success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 w-full ${
                index === 0 ? 'bg-[#8A2E88]' : 
                index === 1 ? 'bg-[#F4A261]' : 'bg-[#E76F51]'
              }`}></div>
              <CardHeader className="text-center pt-8">
                <div className={`flex justify-center mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-[#8A2E88]' : 
                  index === 1 ? 'bg-[#F4A261]' : 'bg-[#E76F51]'
                }`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-[#264653]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`min-w-[8px] h-2 w-2 rounded-full mt-2 ${
                        index === 0 ? 'bg-[#8A2E88]' : 
                        index === 1 ? 'bg-[#F4A261]' : 'bg-[#E76F51]'
                      }`} />
                      <span className="text-gray-600 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center py-8 px-4 bg-white/10 rounded-xl space-y-6 max-w-3xl mx-auto">
          <p className="text-xl text-white font-semibold">
            Admissions Open! Your child deserves an education beyond textbooks.
          </p>
          <Button
            className="bg-white text-[#8A2E88] hover:bg-white/90 flex items-center gap-2 px-6 py-3 text-lg shadow-lg"
            onClick={() => window.location.href = '#campus-tour'}
          >
            <Calendar className="w-5 h-5" />
            Schedule a School Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;
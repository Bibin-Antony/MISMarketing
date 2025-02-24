// AcademicsSection.jsx
import React from 'react';
import { 
  GraduationCap, 
  Star, 
  Trophy,
  Calendar 
} from 'lucide-react';
import Button from './Button'; // Changed from { Button }
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from './Card';

const AcademicsSection = () => {
  const academicFeatures = [
    {
      icon: <GraduationCap className="w-12 h-12 text-[#8A2E88]" />,
      title: "Academics that Inspire",
      features: [
        "Future-ready learning with innovation & creativity at its core",
        "Emphasis on STEM, problem-solving, and global curriculum",
        "State-of-the-art smart classrooms and learning facilities",
        "Expert faculty with international teaching experience"
      ]
    },
    {
      icon: <Star className="w-12 h-12 text-[#F4A261]" />,
      title: "Leadership that Empowers",
      features: [
        "Public speaking, teamwork, and decision-making skills",
        "Programs to build confidence, independence, and resilience",
        "Regular leadership workshops and seminars",
        "Opportunities for student-led initiatives"
      ]
    },
    {
      icon: <Trophy className="w-12 h-12 text-[#E76F51]" />,
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
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#264653]">
          Academics, Leadership & Sports – The Perfect Balance!
        </h2>
        <p className="text-lg text-gray-600">
          Providing a holistic education that prepares students for future success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {academicFeatures.map((feature, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow border-t-4"
            style={{ borderTopColor: index === 0 ? '#8A2E88' : index === 1 ? '#F4A261' : '#E76F51' }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <CardTitle className="text-xl text-[#264653]">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="min-w-[8px] h-2 w-2 rounded-full mt-2"
                      style={{ 
                        backgroundColor: index === 0 ? '#8A2E88' : 
                          index === 1 ? '#F4A261' : '#E76F51' 
                      }}
                    />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-lg text-[#E76F51] font-semibold">
          Admissions Open! Your child deserves an education beyond textbooks.
        </p>
        <Button 
          className="bg-[#8A2E88] hover:bg-[#8A2E88]/90 text-white flex items-center gap-2"
          onClick={() => window.location.href = '#campus-tour'}
        >
          <Calendar className="w-4 h-4" />
          Schedule a School Tour
        </Button>
      </div>
    </div>
  );
};

export default AcademicsSection;
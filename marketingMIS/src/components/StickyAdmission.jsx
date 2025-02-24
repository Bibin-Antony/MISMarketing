// StickyAdmission.jsx
import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';
import Button from '../components/Button';

const StickyAdmission = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 24,
    minutes: 60,
    seconds: 60
  });

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };
        
        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0) return { ...prev, minutes: newMinutes, seconds: 59 };
        
        const newHours = prev.hours - 1;
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 };
        
        const newDays = prev.days - 1;
        if (newDays >= 0) return { ...prev, days: newDays, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#8A2E88] text-white py-3 z-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <Clock className="w-5 h-5" />
          <span className="font-semibold">
            Admissions Closing Soon! Time Left:
          </span>
          <div className="flex gap-4">
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <Button 
            className="bg-[#E76F51] hover:bg-[#E76F51]/90 text-white"
            onClick={() => window.location.href = '#lead-capture'}
          >
            Apply Now
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAdmission;
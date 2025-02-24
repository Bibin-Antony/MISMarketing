// MarketingPage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AcademicsSection from '../components/AcademicsSection';
import SportsSection from '../components/SportsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AwardsSection from '../components/AwardsSection';
import CampusTour from '../components/CampusTour';
import DirectorMessage from '../components/DirectorMessage';
import LeadCaptureForm from '../components/LeadCaptureForm';
import Footer from '../components/Footer';
import StickyAdmission from '../components/StickyAdmission';

const MarketingPage = () => {
  return (
    <div className="relative min-h-screen bg-[#F8F1F1]">
      {/* Sticky Admission Notice */}
      <StickyAdmission />

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <section id="header" className="py-4">
          <Header />
        </section>

        <section id="hero" className="py-8">
          <HeroSection />
        </section>

        <section id="why-choose-us" className="py-16">
          <WhyChooseUs />
        </section>

        <section id="academics" className="py-16">
          <AcademicsSection />
        </section>

        <section id="sports" className="py-16">
          <SportsSection />
        </section>

        <section id="testimonials" className="py-16">
          <TestimonialsSection />
        </section>

        <section id="awards" className="py-16">
          <AwardsSection />
        </section>

        <section id="campus-tour" className="py-16">
          <CampusTour />
        </section>

        <section id="director-message" className="py-16">
          <DirectorMessage />
        </section>

        <section id="lead-capture" className="py-16">
          <LeadCaptureForm />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;
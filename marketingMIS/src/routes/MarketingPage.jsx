// MarketingPage.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import SportsSection from '../components/SportsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AwardsSection from '../components/AwardsSection';
import CampusTour from '../components/CampusTour';
import LeadCaptureForm from '../components/LeadCaptureForm';
import Footer from '../components/Footer';
import StickyAdmission from '../components/StickyAdmission';
import ThankYou from '../components/ThankYou';

const MarketingPage = () => {
  return (
    <div className="relative ">
      {/* Sticky Admission Notice */}
      <StickyAdmission />

      {/* Main Content */}
      <div className="container ">
        <section id="header">
          <Header />
        </section>

        <section id="hero" >
          <HeroSection />
        </section>

        <section id="why-choose-us" >
          <WhyChooseUs />
        </section>


        <section id="awards" >
          <AwardsSection />
        </section>

        <section id="testimonials" >
          <TestimonialsSection />
        </section>

        <section id="sports" >
        <SportsSection />
        </section>

        <section id="campus-tour" >
          <CampusTour />
        </section>

        <section id="lead-capture" >
          <LeadCaptureForm />
        </section>

       
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MarketingPage;
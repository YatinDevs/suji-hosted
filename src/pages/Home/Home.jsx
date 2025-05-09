import React from "react";
import CTA from "./CTA";
import WhyUs from "./WhyUs";
import TestimonialsSection from "./TestimonialsSection";
import StatsSection from "./StatsSection";
import ServicesSection from "./ServicesSection";
import EventsNewsSection from "./EventsNewsSection";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="mt-20">
      <HeroSection />
      <EventsNewsSection />
      <WhyUs />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTA />
    </div>
  );
}

export default Home;

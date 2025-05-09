import React from "react";
import { useParams } from "react-router-dom";
import {
  AboutSection,
  AdvisorTips,
  Benefits,
  CTA,
  Features,
  HeroSection,
  Regulations,
} from "../Services/ProductComponent";
import { servicesData } from "../../constants/serviceData";
import ServiceSidebar from "./ServiceSidebar";
import FAQSection from "./FAQSection";

const ServiceLayout = () => {
  const { slug } = useParams();
  // console.log(slug);
  const service = servicesData[slug];
  // console.log(service);

  if (!service)
    return <div className="p-4 text-red-500">Service not found</div>;

  return (
    <div className="container mx-auto mt-28 grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 lg:p-10">
      <div className="lg:col-span-3 space-y-10">
        <HeroSection {...service} />
        <AboutSection content={service.aboutContent} />
        <Features features={service.features} />
        <Benefits benefits={service.benefits} />
        {service.advisorTips && <AdvisorTips {...service.advisorTips} />}
        {service.regulations && <Regulations {...service.regulations} />}
        {service.faqs && <FAQSection faqs={service.faqs} />}

        <CTA {...service.cta} />
      </div>

      <div className="lg:col-span-1">
        <ServiceSidebar sidebarData={service.sidebarData} />
      </div>
    </div>
  );
};

export default ServiceLayout;

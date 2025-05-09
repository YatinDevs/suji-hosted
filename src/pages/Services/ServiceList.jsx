import React from "react";
import { servicesMenu } from "../../constants/servicesData";
import { Link } from "react-router-dom";

const ServicesList = () => {
  return (
    <div className="container mx-auto mt-28 p-4 lg:p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          We offer comprehensive placement services across banking, finance and
          IT sectors. Explore our specialized services below to find your dream
          job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesMenu.submenu.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.label}
                </h3>
                <p className="text-gray-600 mb-4">
                  {servicesData[service.path.split("/").pop()]?.description ||
                    "Professional placement service for your career needs."}
                </p>
                <div className="text-blue-600 font-medium flex items-center">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;

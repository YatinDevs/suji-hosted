import React from "react";
import { Building, Banknote, Laptop, HardHat, ArrowRight } from "lucide-react";

const PlacementSectors = ({ scrollToForm }) => {
  const sectors = [
    {
      name: "Banking",
      icon: <Building className="w-6 h-6 text-blue-600" />,
      positions: [
        "Relationships Officer",
        "Assistant Manager",
        "Relationships Manager",
        "Branch Manager",
      ],
      color: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      name: "Finance",
      icon: <Banknote className="w-6 h-6 text-green-600" />,
      positions: [
        "Sales Officer",
        "Relationships Manager",
        "Branch Manager",
        "Credit Manager",
      ],
      color: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      name: "IT Sector",
      icon: <Laptop className="w-6 h-6 text-purple-600" />,
      positions: ["Software Developer", "Analyst", "Other IT Roles"],
      color: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      name: "Construction",
      icon: <HardHat className="w-6 h-6 text-orange-600" />,
      positions: ["Civil Engineering", "Accounts", "Supervisor"],
      color: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Placement Sectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide placement opportunities across these key sectors with
            leading companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${sector.color}`}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full ${sector.color} ${sector.textColor}`}
                  >
                    {sector.icon}
                  </div>
                  <h3 className={`text-xl font-bold ml-3 ${sector.textColor}`}>
                    {sector.name}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {sector.positions.map((position, idx) => (
                    <li key={idx} className="flex items-start">
                      <span
                        className={`w-2 h-2 rounded-full mt-2 mr-3 ${sector.textColor}`}
                      ></span>
                      <span className="text-gray-700">{position}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    onClick={scrollToForm}
                    className={`inline-flex items-center ${sector.textColor} font-medium hover:underline`}
                  >
                    View openings <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Not sure which sector fits you best?
          </h3>
          <p className="text-gray-600 mb-4">
            Take our 2-minute career assessment and we'll recommend the best
            options for you
          </p>
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium inline-flex items-center"
          >
            Take Assessment <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlacementSectors;

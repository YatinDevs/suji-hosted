import React from "react";
import {
  Download,
  Link as LinkIcon,
  BookOpen,
  ArrowRight,
  Mail,
  CheckCircle,
  FileText,
  User,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import PlacementSectors from "../Career/PlacementSectors";

const TrainingSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("enrollment-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trainingPrograms = [
    {
      id: 1,
      title: "Fresher Training Program",
      icon: <User className="w-6 h-6 text-blue-500" />,
      description:
        "Launch your career in banking and financial services with our comprehensive fresher training program",
      criteria: "12th Pass (Minimum Criteria)",
      package: "₹1.50 LPA - ₹3.00 LPA",
      positions: ["Sales Officer", "Relationship Officer", "Customer Support"],
      documentLink: "/documents/fresher-training.pdf",
      officialLinks: [
        { name: "RBI Careers", url: "https://www.rbi.org.in" },
        { name: "Banking Exam Resources", url: "https://www.ibps.in" },
      ],
    },
    {
      id: 2,
      title: "Experienced Professionals Program",
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
      description:
        "Advance your career with specialized training for experienced professionals",
      criteria: "Graduate with 1+ years experience",
      package: "₹3.00 LPA - ₹40.00 LPA",
      positions: [
        "Relationship Manager",
        "Branch Manager",
        "Credit Manager",
        "Assistant Manager",
      ],
      documentLink: "/documents/experienced-training.pdf",
      officialLinks: [
        { name: "SEBI Guidelines", url: "https://www.sebi.gov.in" },
        { name: "NBFC Directory", url: "https://www.rbi.org.in/nbfc" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Training & Placement Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kickstart or accelerate your career in banking and financial
            services with our specialized programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-blue-500"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-blue-50 p-3 rounded-full">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {program.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Eligibility: </span>
                      <span>{program.criteria}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Package: </span>
                      <span>{program.package}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Positions: </span>
                      <span>{program.positions.join(", ")}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* <a
                    href={program.documentLink}
                    download
                    className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Program Details
                  </a> */}

                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
                      <LinkIcon className="w-4 h-4 mr-1" />
                      Official Resources
                    </h4>
                    <ul className="space-y-2">
                      {program.officialLinks.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:text-blue-600 flex items-center"
                          >
                            <span className="truncate">{link.name}</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section
          className="py-16 mt-10 md:mt-20 bg-gray-100"
          id="enrollment-form"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-6">
                    Ready to Transform Your Career?
                  </h2>
                  <p className="mb-6 text-blue-100">
                    Whether you're starting fresh or looking to advance, our
                    programs are designed to get you placed in top
                    organizations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        90% Placement Record
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        Industry-aligned curriculum
                      </span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-300 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100">
                        Dedicated placement cell
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 px-2 md:p-4 flex flex-col justify-center">
                  <div className="mb-6 text-center">
                    <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Enrollment Form
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Apply for our training programs in just 2 minutes
                    </p>
                  </div>

                  <div className="w-full h-[900px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://admin.masteraix.io/widget/form/681879b77da32"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "3px",
                      }}
                      id="inline-681879b77da32"
                      data-form-name="First-Application-Form"
                      data-layout-iframe-id="inline-681879b77da32"
                      data-form-id="681879b77da32"
                      title="First-Application-Form"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            New Sector-Specific Programs Coming Soon
          </h3>
          <p className="text-gray-600 mb-4">
            We're launching specialized programs for IT, Construction, and
            Government sectors
          </p>
          <button
            onClick={scrollToForm}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium inline-flex items-center"
          >
            Get Early Access <Mail className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
      <PlacementSectors scrollToForm={scrollToForm} />
    </section>
  );
};

export default TrainingSection;

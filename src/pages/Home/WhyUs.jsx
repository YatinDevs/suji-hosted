import { motion } from "framer-motion";
import {
  Award,
  Shield,
  Users,
  CheckCircle,
  FileText,
  Handshake,
  BarChart2,
  BookOpen,
} from "lucide-react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WhyUs() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: "Industry Expertise",
      desc: "Suji Career brings specialized knowledge in banking and finance sector placements",
      details:
        "With strong ties to major banks and financial institutions, we provide direct access to top employers.",
    },
    {
      icon: <FileText size={40} className="text-blue-600" />,
      title: "Placement Success",
      desc: "Proven track record in placing candidates",
      details:
        "We've successfully placed candidates in Axis Bank, ICICI, HDFC, Kotak Mahindra, and other leading financial institutions.",
    },
    {
      icon: <Handshake size={40} className="text-blue-600" />,
      title: "Career Partnership",
      desc: "We guide you through your entire career journey",
      details:
        "From resume building to interview preparation, we provide end-to-end support for your career growth.",
    },
    {
      icon: <Shield size={40} className="text-blue-600" />,
      title: "Trusted Network",
      desc: "Strong relationships with top employers",
      details:
        "Our connections with HR departments across banking and finance sectors give our candidates an edge.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Suji Career?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We bridge the gap between talented candidates and leading employers
            in banking, finance, and IT sectors. With our extensive network and
            personalized approach, we help you build a successful career in
            India's top financial institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-all flex flex-col"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center mb-4 font-medium">
                {feature.desc}
              </p>
              <p className="text-gray-500 text-center">{feature.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Your Career Launchpad
              </h3>
              <p className="text-gray-700 mb-4">
                Located in the heart of Thakkar Bazar, Nashik, Suji Career has
                established itself as a trusted name in career services. We
                specialize in placements for banking, finance, and IT sectors
                with a focus on quality training and personalized guidance.
              </p>
              <p className="text-gray-700 mb-6">
                Our services include resume building, interview preparation, and
                direct placement opportunities with top employers like Axis
                Bank, ICICI, HDFC, Kotak Mahindra, and more.
              </p>
              <button
                onClick={() => navigate("/contactus")}
                className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Start Your Career Journey
                <FaArrowRight className="ml-2" />
              </button>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                alt="Career counseling session"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;

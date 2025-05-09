import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import {
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import { MdOutlineSchool, MdGppGood } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { FileText, Handshake, Shield, Briefcase, Banknote } from "lucide-react";

const AboutUsPage = () => {
  const navigate = useNavigate();
  // Refs for section scrolling
  const whyChooseRef = useRef(null);
  const expertiseRef = useRef(null);
  const leadershipRef = useRef(null);
  const aboutusRef = useRef(null);
  const location = useLocation();

  // State for image carousel
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
  ];

  // Handle section scrolling based on URL hash
  useEffect(() => {
    const scrollToSection = (ref) => {
      if (ref.current) {
        window.scrollTo({
          top: ref.current.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };

    if (location.hash === "#why-choose") {
      scrollToSection(whyChooseRef);
    } else if (location.hash === "#expertise") {
      scrollToSection(expertiseRef);
    } else if (location.hash === "#leadership") {
      scrollToSection(leadershipRef);
    } else if (location.hash === "#us") {
      scrollToSection(aboutusRef);
    }
  }, [location]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const whyChooseUs = [
    {
      icon: MdOutlineSchool,
      title: "Industry Connections",
      description:
        "Strong relationships with top banks and financial institutions for direct placements",
    },
    {
      icon: GiSkills,
      title: "Skill Development",
      description:
        "Comprehensive training programs tailored for banking and finance sector requirements",
    },
    {
      icon: FaBullseye,
      title: "Career Focus",
      description:
        "Dedicated to helping candidates build successful careers in financial services",
    },
    {
      icon: MdGppGood,
      title: "Placement Success",
      description:
        "Proven track record of placing candidates in reputed companies",
    },
  ];

  const services = [
    {
      title: "Banking Placements",
      description:
        "Placement opportunities in Axis Bank, ICICI, HDFC, Kotak Mahindra, and other leading banks",
    },
    {
      title: "Finance Sector Jobs",
      description:
        "Career opportunities in Bajaj Finance, HDB Finance, Shriram Finance and other NBFCs",
    },
    {
      title: "Interview Preparation",
      description:
        "Specialized training for banking and finance sector interviews",
    },
    {
      title: "Resume Building",
      description:
        "Professional resume crafting tailored for financial sector requirements",
    },
  ];

  const teamMembers = [
    {
      name: "Bhushan",
      role: "Founder & Director",
      expertise:
        "Extensive experience in recruitment and training for banking sector",
      icon: RiTeamFill,
    },
    {
      name: "Placement Team",
      role: "Career Consultants",
      expertise:
        "Experts in banking sector recruitment with strong corporate connections",
      icon: FaUsers,
    },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Hero Section with Image Carousel */}
        <motion.section
          ref={aboutusRef}
          id="us"
          variants={staggerContainer}
          className="relative h-96 rounded-xl overflow-hidden mb-16"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-cover bg-center ${
                index === current ? "z-10" : "z-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center">
            <div className="text-center px-4">
              <motion.h1
                variants={fadeIn("up", "spring", 0.1, 1)}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                About Suji Career
              </motion.h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
              <motion.p
                variants={fadeIn("up", "spring", 0.2, 1)}
                className="text-white mt-4 max-w-3xl mx-auto text-lg"
              >
                Connecting talented candidates with leading employers in
                banking, finance, and IT sectors through quality training and
                placement services.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          variants={fadeIn("up", "spring", 0.3, 1)}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaBullseye className="mr-2" /> Our Mission
            </h2>
            <p className="mb-6">
              To bridge the gap between job seekers and employers by providing
              quality training and placement services, helping individuals build
              rewarding careers in India's top financial institutions.
            </p>
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Mission"
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
          <div className="bg-gray-800 text-white p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FaChartLine className="mr-2" /> Our Vision
            </h2>
            <p className="mb-6">
              To become the most trusted career service provider in Nashik
              region, known for our ethical practices and successful placements
              in banking and finance sectors.
            </p>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
              alt="Vision"
              className="rounded-lg h-48 w-full object-cover"
            />
          </div>
        </motion.section>

        {/* Why Choose Suji Career */}
        <motion.section
          ref={whyChooseRef}
          id="why-choose"
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Suji Career
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We specialize in placing candidates in top banks and financial
              institutions with our network of corporate partners and
              comprehensive training programs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Briefcase,
                title: "Industry Partnerships",
                description:
                  "Strong ties with Axis Bank, ICICI, HDFC, Kotak Mahindra and other leading financial institutions",
                details:
                  "Direct access to HR teams and hiring managers for faster placements.",
              },
              {
                icon: FileText,
                title: "Comprehensive Training",
                description:
                  "Specialized programs for banking and finance sector roles",
                details:
                  "Covers product knowledge, sales techniques, and customer service skills.",
              },
              {
                icon: Handshake,
                title: "End-to-End Support",
                description:
                  "We guide you from resume building to final job offer",
                details:
                  "Includes interview preparation, mock sessions, and placement assistance.",
              },
              {
                icon: Shield,
                title: "Proven Success",
                description:
                  "Track record of placing 1000+ candidates in reputed companies",
                details:
                  "Our alumni network includes employees at all major banks in Nashik.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 1)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-500 h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <Icon className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-gray-500 mt-auto">{item.details}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Your Career Launchpad
                </h3>
                <p className="text-gray-700 mb-4">
                  Located in the heart of Thakkar Bazar, Nashik, Suji Career has
                  established itself as a trusted name in career services. We
                  specialize in placements for banking, finance, and IT sectors.
                </p>
                <p className="text-gray-700 mb-6">
                  Our services include resume building, interview preparation,
                  and direct placement opportunities with top employers.
                </p>
                <button
                  onClick={() => navigate("/contact")}
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
          </div>
        </motion.section>

        {/* Our Expertise */}
        <motion.section
          ref={expertiseRef}
          id="expertise"
          variants={fadeIn("up", "spring", 0.5, 1)}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Specializations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Banking Sector Placements
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Retail Banking Roles
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Relationship Managers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Customer Service Executives
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Sales Officers
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Finance Sector Placements
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Loan Officers
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Credit Analysts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Financial Advisors
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Collection Agents
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-600 text-white p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Banking sector"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Our Placement Process
                </h3>
                <p className="mb-4">
                  We follow a structured approach to ensure candidates are
                  well-prepared for interviews and job requirements in the
                  banking and finance sector.
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="flex items-center font-medium"
                >
                  Learn about our process <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          variants={fadeIn("up", "spring", 0.6, 1)}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Corporate Tie-ups
                </h3>
                <p className="text-gray-700 mb-4">
                  We partner with HR departments of leading banks and financial
                  institutions to understand their specific hiring needs and
                  provide them with pre-screened, qualified candidates.
                </p>
                <button
                  onClick={() => navigate("/employers")}
                  className="flex items-center text-blue-600 font-medium"
                >
                  For Employers <FaArrowRight className="ml-2" />
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Corporate meeting"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Future Plans */}
        <motion.section
          variants={fadeIn("up", "spring", 0.8, 1)}
          className="bg-gray-50 rounded-xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <FaAward className="mr-2 text-blue-600" /> Our Growth
          </h2>
          <p className="text-gray-700 mb-4">
            We are continuously expanding our corporate network and training
            programs to provide more opportunities for our candidates in Nashik
            and surrounding regions.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              New Bank Partnerships
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              IT Sector Placements
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Soft Skills Training
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Career Counseling
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Regional Expansion
            </span>
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          variants={fadeIn("up", "spring", 0.9, 1)}
          className="bg-blue-600 text-white p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
          <p className="mb-6">
            We've helped hundreds of candidates launch successful careers in
            banking and finance. Hear from our placed candidates about their
            experiences with Suji Career.
          </p>
          <button
            onClick={() => navigate("/testimonials")}
            className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium"
          >
            Read Success Stories
          </button>
        </motion.section>

        {/* Leadership */}
        <motion.section
          ref={leadershipRef}
          id="leadership"
          variants={fadeIn("up", "spring", 0.7, 1)}
          className="mb-16 mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.2, 1)}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-blue-100 rounded-full mr-6">
                      <Icon className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-blue-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{member.expertise}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default AboutUsPage;

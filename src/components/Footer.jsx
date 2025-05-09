import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import SujiLogo from "./SujiLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      url: "https://facebook.com/sujicareer",
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      url: "https://twitter.com/sujicareer",
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      url: "https://linkedin.com/company/sujicareer",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://instagram.com/sujicareer",
    },
    { icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/919970499999" },
  ];

  const navItems = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT US",
      submenu: [
        { label: "About Us", path: "/about#us" },
        { label: "Our Mission", path: "/about#mission" },
        { label: "Our Team", path: "/about#team" },
      ],
    },
    {
      label: "SERVICES",
      submenu: [
        { label: "Company Placements", path: "/services/company-placements" },
        { label: "Banking Placements", path: "/services/banking-placements" },
        { label: "Finance Placements", path: "/services/finance-placements" },
        { label: "IT Placements", path: "/services/it-placements" },
        { label: "Govt Contract Jobs", path: "/services/govtcontract-jobs" },
        { label: "Part Time Jobs", path: "/services/parttime-jobs" },
      ],
    },
    {
      label: "TRAINING",
      path: "/training-programs",
    },
    { label: "CONTACT", path: "/contactus" },
  ];

  const quickLinks = [
    { label: "About Us", path: "/about#us" },
    { label: "Training", path: "/training-programs" },
    { label: "Our Mission", path: "/about#mission" },
    { label: "SERVICES", path: "/services/company-placements" },
    { label: "Success Stories", path: "/about#team" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-6">
            <SujiLogo />
          </div>
          <p className="text-gray-300 mb-6">
            Suji Training and Placement Service is a leading placement agency
            providing job opportunities in banking, finance, and IT sectors with
            top companies across India.
          </p>
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, label, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <span className="text-blue-400 mr-2">•</span>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Our Services
          </h3>
          <ul className="space-y-3">
            {navItems
              .find((item) => item.label === "SERVICES")
              .submenu.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <span className="text-blue-400 mr-2">•</span>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-6 text-blue-400">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <IoLocationOutline
                size={20}
                className="text-blue-400 mt-1 flex-shrink-0"
              />
              <span>
                GH 02, Ground Floor, Near Janta Hotel, Near New CBS, Thakkar
                Bazar-422002 (Near New CBS)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-blue-400" />
              <a
                href="mailto:info@sujicareer.com"
                className="hover:text-white transition-colors"
              >
                info@sujicareer.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-blue-400" />
              <a
                href="tel:+919970499999"
                className="hover:text-white transition-colors"
              >
                +91 9970499999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineBusinessCenter size={20} className="text-blue-400" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-800 pt-6">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Suji Training and Placement Service
          </span>
          . All Rights Reserved.{" "}
          <Link to="/privacy-policy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link to="/terms" className="text-blue-400 hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

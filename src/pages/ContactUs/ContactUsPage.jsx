import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineBusinessCenter } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { FileText } from "lucide-react";

const ContactUsPage = () => {
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
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/company/sujicareer",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      url: "https://instagram.com/sujicareer",
    },
    { icon: FaWhatsapp, label: "WhatsApp", url: "https://wa.me/917947418103" },
  ];

  const contactData = {
    tel_number: "+91 7947418103",
    mobile_number: "+91 7947418103",
    email: "info@sujicareer.com",
    whatsapp_number: "+91 7947418103",
    office_address_line1: "Suji Career Solutions",
    office_address_line2: "GH 02, Ground Floor, Near Janta Hotel",
    office_address_line3: "Near New CBS, Thakkar Bazar",
    office_address_line4: "Nashik",
    office_address_line5: "Maharashtra - 422002",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Suji Career
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get in touch with our team for career guidance, placement inquiries,
          or training programs
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <div className="mb-6 text-center">
            <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Application Form
            </h3>
            <p className="text-gray-600 mb-6">Enquire Now</p>
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
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <IoCallOutline size={24} className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">{contactData.tel_number}</p>
                  <p className="text-gray-600">{contactData.mobile_number}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdOutlineEmail size={24} className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">{contactData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaWhatsapp size={24} className="text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">{contactData.whatsapp_number}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, label, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors"
                    title={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <IoLocationOutline size={24} className="text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Office Address
                </h3>
              </div>
              <address className="text-gray-600 not-italic pl-9">
                {contactData.office_address_line1}
                <br />
                {contactData.office_address_line2}
                <br />
                {contactData.office_address_line3}
                <br />
                {contactData.office_address_line4}
                <br />
                {contactData.office_address_line5}
              </address>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-16 bg-gray-50 rounded-xl overflow-hidden"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-8 pt-8">
          Our Location
        </h2>
        <div className="p-8">
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.24382318906!2d73.7803765!3d19.9982789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU5JzUzLjgiTiA3M8KwNDYnNDkuNCJF!5e0!3m2!1sen!2sin!4v1746785332209!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Suji Career Office Location"
            ></iframe>
          </div>
        </div>

        {/* Schema Markup (invisible) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Suji Career",
              "url": "https://www.sujicareer.com",
              "logo": "https://www.sujicareer.com/logo.png",
              "description": "Leading career placement and training services provider",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "GH 02, Ground Floor, Near Janta Hotel, Near New CBS, Thakkar Bazar",
                "addressLocality": "Nashik",
                "addressRegion": "Maharashtra",
                "postalCode": "422002",
                "addressCountry": "IN"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+917947418103",
                  "contactType": "customer service",
                  "email": "info@sujicareer.com",
                  "areaServed": "IN"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/sujicareer",
                "https://www.twitter.com/sujicareer",
                "https://www.linkedin.com/company/sujicareer",
                "https://www.instagram.com/sujicareer"
              ]
            }
          `}
        </script>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;

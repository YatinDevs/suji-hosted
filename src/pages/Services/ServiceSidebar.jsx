import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SidebarSection = ({ title, children, icon }) => (
  <div className="mb-8 border-b border-gray-200 pb-6 last:border-0">
    <div className="flex items-center mb-4">
      {icon && <span className="text-blue-600 mr-2 text-xl">{icon}</span>}
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
    </div>
    <div className="pl-2">{children}</div>
  </div>
);

const CallbackForm = () => (
  <form className="space-y-3">
    <div>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
    >
      Request Callback
    </button>
  </form>
);

const TestimonialCard = ({ text, author }) => (
  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
    <p className="text-gray-600 italic mb-2">"{text}"</p>
    <p className="text-gray-800 font-medium">- {author}</p>
  </div>
);

const NewsItem = ({ title, date }) => (
  <div className="mb-3 pb-2 border-b border-gray-100 last:border-0">
    <p className="text-sm text-gray-500 mb-1">{date}</p>
    <h5 className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
      {title}
    </h5>
  </div>
);

const ServiceSidebar = ({ sidebarData }) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md sticky top-20"
    >
      <SidebarSection title="Why Choose Us" icon="★">
        <ul className="space-y-2">
          {sidebarData?.whyChooseUs?.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <svg
                className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Company Profile" icon="ℹ️">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-3">
            {sidebarData?.companyProfile?.description}
          </p>
          <Link
            to="/about"
            className="text-blue-600 font-medium inline-flex items-center"
          >
            Read more <span className="ml-1">→</span>
          </Link>
        </div>
      </SidebarSection>

      <SidebarSection title="Guidelines" icon="📋">
        <ul className="space-y-2">
          {sidebarData?.guidelines?.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.link}
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-start"
              >
                <svg
                  className="h-5 w-5 text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Instant Callback" icon="📞">
        <CallbackForm />
      </SidebarSection>

      {sidebarData?.testimonials && (
        <SidebarSection title="Testimonials" icon="🌟">
          <div className="space-y-4">
            {sidebarData.testimonials.map((testimonial, idx) => (
              <TestimonialCard
                key={idx}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </div>
        </SidebarSection>
      )}

      {sidebarData?.news && (
        <SidebarSection title="Latest News" icon="📰">
          <div className="space-y-3">
            {sidebarData.news.map((item, idx) => (
              <NewsItem key={idx} title={item.title} date={item.date} />
            ))}
          </div>
          <Link
            to="/blogs"
            className="text-blue-600 font-medium inline-flex items-center mt-3"
          >
            View all news <span className="ml-1">→</span>
          </Link>
        </SidebarSection>
      )}
    </motion.aside>
  );
};

export default ServiceSidebar;

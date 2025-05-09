import React, { useState } from "react";

const FAQSection = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{faqs.title}</h2>

        <div className="space-y-4">
          {faqs.items.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left p-4 flex justify-between items-center ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="p-4 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

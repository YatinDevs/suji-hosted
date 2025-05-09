import React from "react";

export const HeroSection = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
    </div>
  );
};

export const AboutSection = ({ content }) => {
  return (
    <section className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{content.title}</h2>

          <div className="space-y-4">
            {Array.isArray(content.description) ? (
              content.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-600 leading-relaxed">
                {content.description}
              </p>
            )}
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden h-80 lg:h-full">
          <img
            src={content.image}
            alt={content.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export const Features = ({ features }) => (
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="w-5 h-5 text-blue-500 mt-1 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </section>
);

export const Benefits = ({ benefits }) => (
  <section className="bg-gray-50 p-8 rounded-xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-2">{benefit}</h3>
        </div>
      ))}
    </div>
  </section>
);

export const AdvisorTips = ({ title, tips }) => (
  <section className="border-l-4 border-blue-400 pl-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <ul className="space-y-3">
      {tips.map((tip, index) => (
        <li key={index} className="text-gray-700">
          <span className="font-medium text-blue-600">Tip {index + 1}:</span>{" "}
          {tip}
        </li>
      ))}
    </ul>
  </section>
);

export const Regulations = ({ title, items }) => (
  <section>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          • {item}
        </li>
      ))}
    </ul>
  </section>
);

export const CTA = ({ title, description, buttonText, buttonLink }) => (
  <section className="bg-blue-50 p-8 rounded-xl text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
    <a
      href={buttonLink}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
    >
      {buttonText}
    </a>
  </section>
);

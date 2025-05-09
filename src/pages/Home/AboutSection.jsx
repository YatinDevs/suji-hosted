import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const aboutData = {
  title: "About Suji Career",
  description:
    "Suji Training and Placement Service, located in Nashik, has been a trusted name in career services since its establishment. We specialize in connecting talented candidates with leading employers in banking, finance, and IT sectors through our extensive network and personalized approach.",
  vision: {
    title: "Our Mission",
    text: "To bridge the gap between job seekers and employers by providing quality training and placement services, helping individuals build rewarding careers in India's top financial institutions.",
  },
  values: [
    {
      title: "Integrity",
      description: "Ethical practices in all our placement activities",
    },
    {
      title: "Excellence",
      description: "Commitment to quality training and placement services",
    },
    {
      title: "Partnership",
      description:
        "Building long-term relationships with candidates and employers",
    },
    {
      title: "Innovation",
      description: "Adapting to changing industry needs and technologies",
    },
  ],
};

const AboutSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Career Partners Since 2013
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {aboutData.description}
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {aboutData.vision.title}
              </h3>
              <p className="text-gray-600">{aboutData.vision.text}</p>
            </div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group transition-colors"
              >
                Learn More About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-gray-900/70"></div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
              alt="Suji Career team with candidates"
              className="w-full h-full object-cover"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">30+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-xs text-gray-600">Clients Served</p>
                </div>
                <div className="h-8 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-xs text-gray-600">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;

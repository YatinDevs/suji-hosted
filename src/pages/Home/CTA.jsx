import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // JSON data
  const ctaData = {
    title: "Need Help With Compliance?",
    subtitle: "Call us at",
    phone_number: "+1 (800) 123-4567",
    phone_hours: "Mon-Fri 9am-5pm",
    call_button_text: "Call Now",
    contact_button_text: "Get Started",
    contact_button_link: "contactus",
    image_url:
      "https://ionexchangeglobal.com/app/uploads/2021/09/call-support-full.jpg",
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Left side with image and text */}
            <div className="md:w-1/2 p-8 bg-blue-50 flex justify-center items-center">
              <div className="flex flex-col md:flex-row  items-center gap-6 text-center md:text-left">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={ctaData.image_url}
                    alt="Support"
                    className="w-24 h-24 rounded-lg object-cover shadow-md"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {ctaData.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {ctaData.subtitle}{" "}
                    <span className="font-semibold">
                      {ctaData.phone_number}
                    </span>{" "}
                    {ctaData.phone_hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side with newsletter and buttons */}
            <div className="md:w-1/2 p-8">
              <div className="space-y-6">
                {/* Newsletter Form */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Stay Updated
                  </h4>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col md:flex-row gap-2"
                  >
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="pl-10 w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap"
                    >
                      {isSubscribed ? "Thank you!" : "Subscribe"}
                    </motion.button>
                  </form>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={`tel:${ctaData.phone_number.replace(/\D/g, "")}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    <Phone size={18} /> {ctaData.call_button_text}
                  </motion.a>

                  <motion.a
                    href={ctaData.contact_button_link}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
                  >
                    {ctaData.contact_button_text} <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

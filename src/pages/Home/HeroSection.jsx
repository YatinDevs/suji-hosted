import { motion } from "framer-motion";
import { Briefcase, CheckCircle, MapPin, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const partnerLogos = [
    // Major Banks
    {
      name: "Axis Bank",
      logo: "https://cdn.zeebiz.com/sites/default/files/2022/09/23/201800-axis-bank.jpg?im=FitAndFill=(1200,900)",
      category: "banking",
    },
    {
      name: "HDFC Bank",
      logo: "https://logo.clearbit.com/hdfcbank.com",
      category: "banking",
    },
    {
      name: "ICICI Bank",
      logo: "https://logo.clearbit.com/icicibank.com",
      category: "banking",
    },
    {
      name: "State Bank of India",
      logo: "https://logo.clearbit.com/sbi.co.in",
      category: "banking",
    },
    {
      name: "SBI Card",
      logo: "https://logo.clearbit.com/sbicard.com",
      category: "financial-services",
    },
    {
      name: "Kotak Mahindra Bank",
      logo: "https://logo.clearbit.com/kotak.com",
      category: "banking",
    },
    {
      name: "Yes Bank",
      logo: "https://logo.clearbit.com/yesbank.in",
      category: "banking",
    },

    // Other Financial Institutions
    {
      name: "Punjab National Bank",
      logo: "https://logo.clearbit.com/pnbindia.in",
      category: "banking",
    },
    {
      name: "Bank of Baroda",
      logo: "https://logo.clearbit.com/bankofbaroda.in",
      category: "banking",
    },
    {
      name: "IDBI Bank",
      logo: "https://logo.clearbit.com/idbi.com",
      category: "banking",
    },
    {
      name: "Bandhan Bank",
      logo: "https://logo.clearbit.com/bandhanbank.com",
      category: "banking",
    },

    // IT/Fintech Partners
    {
      name: "Paytm Payments Bank",
      logo: "https://logo.clearbit.com/paytmbank.com",
      category: "fintech",
    },
    {
      name: "PhonePe",
      logo: "https://logo.clearbit.com/phonepe.com",
      category: "fintech",
    },
    {
      name: "Razorpay",
      logo: "https://logo.clearbit.com/razorpay.com",
      category: "fintech",
    },

    // Government/PSUs
    {
      name: "NABARD",
      logo: "https://logo.clearbit.com/nabard.org",
      category: "government",
    },
    {
      name: "SIDBI",
      logo: "https://logo.clearbit.com/sidbi.in",
      category: "government",
    },

    // Training Partners
    {
      name: "NIBM",
      logo: "https://careeradvicepoint.com/wp-content/uploads/2022/01/NIBM_logo.png",
      category: "training",
    },
    {
      name: "IIBF",
      logo: "https://logo.clearbit.com/iibf.org.in",
      category: "training",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Your Career Success Starts with{" "}
                <span className="text-indigo-600">Suji</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Premier Training & Placement Services for Banking, Finance & IT ,
              Pharma , Manufacturing Sectors
            </motion.p>

            {/* Partner Logos Grid */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-sm font-medium text-gray-500 mb-3">
                Trusted by leading companies
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {partnerLogos.map((partner) => (
                  <motion.div
                    key={partner.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center h-30"
                    onClick={() => {
                      navigate("/training-programs");
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 w-30 object-contain"
                      onError={({ currentTarget }) => {
                        currentTarget.src = `https://via.placeholder.com/100x50?text=${
                          partner.name.split(" ")[0]
                        }`;
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4">
                What are you looking for?
              </h3>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium"
                  onClick={() => {
                    navigate("/training-programs");
                  }}
                >
                  Placement Services (Candidate)
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium"
                  onClick={() => {
                    navigate("/contactus");
                  }}
                >
                  For Employers
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -right-10 -top-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Successful candidates in office"
                className="relative z-10 w-full h-auto rounded-xl shadow-xl object-cover"
                style={{ minHeight: "400px" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white shadow-md mt-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Successful Placements</p>
                <p className="text-xl font-bold">5000+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Partner Companies</p>
                <p className="text-xl font-bold">50+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Training Programs</p>
                <p className="text-xl font-bold">15+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-xl font-bold">Nashik</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

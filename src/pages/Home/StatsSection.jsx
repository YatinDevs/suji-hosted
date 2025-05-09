import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, CheckCircle } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  { value: 1000, suffix: "+", label: "Candidates Placed", icon: Users },
  {
    value: 50,
    suffix: "+",
    label: "Partner Companies",
    icon: ShieldCheck,
  },
  { value: 95, suffix: "%", label: "Placement Rate", icon: CheckCircle },
  { value: 10, suffix: "+", label: "Years of Experience", icon: Award },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px",
  });

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="text-blue-600 mb-3 flex justify-center">
                <stat.icon size={40} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2} delay={index * 0.2} />
                ) : (
                  <span>0</span>
                )}
                {stat.suffix}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

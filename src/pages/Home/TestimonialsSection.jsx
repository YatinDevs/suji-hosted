import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const clientTestimonials = [
  {
    name: "Rajesh Pawar",
    project: "Placed at Axis Bank",
    quote:
      "Suji Career helped me secure a position at Axis Bank within weeks of completing their training program.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    source: "Google",
  },
  {
    name: "Priya Deshmukh",
    project: "Placed at ICICI Bank",
    quote:
      "The interview preparation sessions were incredibly helpful. I got placed as a Relationship Manager at ICICI.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    source: "Google",
  },
  {
    name: "Amit Joshi",
    project: "Placed at HDFC Bank",
    quote:
      "Their industry connections are genuine. Got direct interview calls from multiple banks.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    source: "Trustpilot",
  },
  {
    name: "Neha Sharma",
    project: "Placed at Kotak Mahindra",
    quote:
      "The trainers have actual banking experience which made all the difference in my preparation.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    source: "Google",
  },
  {
    name: "Sanjay Gupta",
    project: "Placed at Bajaj Finance",
    quote:
      "From resume building to final placement, Suji Career supported me at every step.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    source: "Google",
  },
];

const TestimonialsSection = () => {
  const clientsRef = useRef(null);

  const scrollClients = (direction) => {
    if (clientsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      clientsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Success Stories
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from candidates who transformed their careers with our
            placement services
          </p>
        </motion.div>

        <div className="relative mt-8">
          <button
            onClick={() => scrollClients("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollClients("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={clientsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          >
            {clientTestimonials.map((client, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{client.name}</h4>
                      <p className="text-sm text-blue-600">{client.project}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">"{client.quote}"</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < client.rating ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          )}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {client.source}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://g.page/sujicareer"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Share Your Experience
            <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

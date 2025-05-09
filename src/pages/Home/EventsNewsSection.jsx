import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Newspaper } from "lucide-react";

const EventsNewsSection = () => {
  const [data, setData] = useState({
    upcomingEvents: [],
    achievements: [],
    newsUpdates: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const eventsRef = useRef(null);
  const newsRef = useRef(null);

  useEffect(() => {
    // Simulate API fetch with mock data
    const mockData = {
      upcomingEvents: [
        {
          title: "Banking Sector Recruitment Drive",
          date: "2023-06-20",
          description:
            "Open interviews with multiple banks for various positions",
          link: "#",
          isNew: true,
        },
        {
          title: "Finance Sector Training Batch",
          date: "2023-07-01",
          description: "New batch starting for finance sector job preparation",
          link: "#",
          isNew: false,
        },
      ],
      achievements: [
        {
          title: "1000+ Placements",
          description:
            "Successfully placed over 1000 candidates in top companies",
          completed: true,
        },
        {
          title: "New Corporate Tie-ups",
          description: "Added 5 new banking partners this quarter",
          completed: true,
        },
      ],
      newsUpdates: [
        {
          title: "Axis Bank Hiring Spree",
          date: "2023-05-25",
          summary:
            "Axis Bank planning to hire 200+ candidates in Nashik region",
          link: "#",
          isNew: true,
        },
        {
          title: "Suji Career Expansion",
          date: "2023-04-15",
          summary: "Now offering specialized IT sector placement services",
          link: "#",
          isNew: false,
        },
      ],
    };

    setData(mockData);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8 text-gray-500">
        Loading events and news...
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 my-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h3>
            <div className="h-[300px] overflow-y-auto pr-2">
              {data.upcomingEvents.length > 0 ? (
                data.upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <CalendarDays className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-lg font-medium text-gray-800">
                            {event.title}
                          </h4>
                          {event.isNew && (
                            <span className="text-xs ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                          {event.description}
                        </p>
                        <a
                          href={event.link}
                          className="text-blue-500 font-medium inline-flex items-center mt-2 hover:underline"
                        >
                          Register Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500">No upcoming events scheduled.</p>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <Newspaper className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                Industry News
              </h3>
            </div>
            <div className="h-[300px] overflow-y-auto pr-2">
              {data.newsUpdates.length > 0 ? (
                data.newsUpdates.map((news, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="mb-6 pb-6 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <Newspaper className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-lg font-medium text-gray-800">
                            {news.title}
                          </h4>
                          {news.isNew && (
                            <span className="text-xs ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              New
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          {new Date(news.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700 mt-2 leading-relaxed">
                          {news.summary}
                        </p>
                        <a
                          href={news.link}
                          className="text-purple-500 font-medium inline-flex items-center mt-2 hover:underline"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500">No recent news updates.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsNewsSection;

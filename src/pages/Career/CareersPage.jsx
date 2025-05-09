import { useState } from "react";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Edit,
  Trash2,
  Plus,
  Users,
  BookOpen,
  Check,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";

const CareersPage = () => {
  // Job data state
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Relationship Manager",
      bank: "Axis Bank",
      location: "Nashik",
      salary: "₹25,000 - ₹35,000",
      type: "Full-time",
      experience: "1-3 years",
      posted: "2023-05-15",
      description: "Handle customer relationships and sell banking products",
    },
    {
      id: 2,
      title: "Loan Officer",
      bank: "HDFC Bank",
      location: "Pune",
      salary: "₹20,000 - ₹30,000",
      type: "Full-time",
      experience: "Fresher",
      posted: "2023-06-01",
      description: "Evaluate loan applications and documentation",
    },
  ]);

  // Training programs data
  const trainingPrograms = [
    {
      name: "Banking Fundamentals",
      duration: "3 Months",
      outcome: "Prepared for 10+ bank roles",
      fee: "₹15,000",
      features: [
        "Basic banking operations",
        "Customer service training",
        "Certification",
      ],
    },
    {
      name: "Financial Services Certification",
      duration: "4 Months",
      outcome: "Placement in NBFCs & FinTech",
      fee: "₹18,000",
      features: [
        "Loan processing",
        "Financial products",
        "Regulatory compliance",
      ],
    },
  ];

  // Bank partners
  const bankPartners = [
    "Axis Bank",
    "ICICI Bank",
    "HDFC Bank",
    "Yes Bank",
    "Kotak Mahindra",
    "RBL Bank",
    "SBI Card",
    "AU Finance",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Banking & Finance Career
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get placed in top banks with our specialized training programs
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {bankPartners.slice(0, 5).map((bank) => (
              <span key={bank} className="bg-white/20 px-4 py-2 rounded-full">
                {bank}
              </span>
            ))}
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold text-lg">
            Explore Jobs <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Bank Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Placement Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {bankPartners.map((bank) => (
              <div
                key={bank}
                className="bg-gray-50 p-6 rounded-lg flex items-center justify-center"
              >
                <span className="font-medium text-gray-800">{bank}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50" id="jobs">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Job Openings
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.bank}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center">
                    <MapPin className="text-gray-500 mr-2" size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="text-gray-500 mr-2" size={16} />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-gray-500 mr-2" size={16} />
                    <span>Posted: {job.posted}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Job Description:</h4>
                  <p className="text-gray-600">{job.description}</p>
                </div>

                <div className="mt-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md flex items-center">
                    Apply Now <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white" id="training">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Training Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainingPrograms.map((program) => (
              <div
                key={program.name}
                className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-500"
              >
                <h3 className="text-xl font-bold mb-2">{program.name}</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Placement Roles:</span>
                    <span className="font-medium text-right">
                      {program.outcome}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Program Features:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between border-t pt-3 mt-3">
                    <span className="text-gray-600">Program Fee:</span>
                    <span className="font-bold text-blue-600">
                      {program.fee}
                    </span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-gray-50" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our 4-Step Placement Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Registration",
                desc: "Submit your details and career interests",
              },
              {
                step: "2",
                title: "Skill Assessment",
                desc: "Take our evaluation test",
              },
              {
                step: "3",
                title: "Training Program",
                desc: "Complete recommended course",
              },
              {
                step: "4",
                title: "Placement",
                desc: "Get placed with our partner companies",
              },
            ].map((step, index) => (
              <div key={step.step} className="relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="bg-white p-6 pt-12 rounded-lg shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                position: "Relationship Manager at HDFC Bank",
                quote:
                  "Suji Career's training helped me secure my dream job within 2 months of completing their program.",
              },
              {
                name: "Priya Patel",
                position: "Loan Officer at Axis Bank",
                quote:
                  "The practical knowledge I gained was directly applicable to my current role. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for more information about jobs and training programs
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <p>+91 9876543210</p>
              <p className="text-blue-200 text-sm mt-1">Mon-Sat, 10AM-6PM</p>
            </div>
            <div>
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <p>career@sujicareer.com</p>
              <p className="text-blue-200 text-sm mt-1">
                Response within 24 hours
              </p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <p>GH 02, Near New CBS</p>
              <p className="text-blue-200 text-sm mt-1">Thakkar Bazar-422002</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question:
                  "What are the eligibility criteria for your training programs?",
                answer:
                  "Most programs require minimum 12th pass qualification. Some advanced programs may require graduation.",
              },
              {
                question: "How long does the placement process take?",
                answer:
                  "Typically 2-4 months from registration to placement, depending on the program you choose.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

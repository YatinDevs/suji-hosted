import {
  Briefcase,
  Banknote,
  Laptop2,
  Clock,
  Building2,
  UserCheck,
} from "lucide-react";

export const servicesData = {
  "banking-placements": {
    title: "Banking Placements",
    description:
      "Get placed in top banks like Axis, ICICI, HDFC, Yes Bank and more with our specialized banking placement services.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
    aboutContent: {
      title: "Banking Placement Services",
      description: [
        "Suji Career provides exclusive placement opportunities in leading public and private sector banks across India.",
        "We have tie-ups with major banking institutions to provide direct recruitment opportunities for suitable candidates.",
        "Our banking placement services cover various roles including customer service executives, relationship managers, bank tellers, and more.",
      ],
      image:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    features: [
      "Direct recruitment in top banks",
      "Preparation guidance for banking interviews",
      "Documentation assistance",
      "Special focus on freshers",
      "Regular job updates",
    ],
    benefits: [
      "100% genuine job opportunities",
      "No hidden charges",
      "Career counseling",
      "Interview preparation",
      "Post-placement support",
    ],
    advisorTips: {
      title: "Tips for Banking Job Seekers",
      tips: [
        "Prepare basic banking terminology",
        "Focus on communication skills",
        "Be ready with all educational documents",
        "Dress professionally for interviews",
        "Be clear about your career goals",
      ],
    },
    regulations: {
      title: "Banking Recruitment Norms",
      items: [
        "Minimum education: 12th pass (some banks require graduation)",
        "Age limit: 18-28 years (varies by bank)",
        "Basic computer knowledge required",
        "Good communication skills essential",
      ],
    },
    faqs: {
      title: "Banking Placement FAQs",
      items: [
        {
          question: "What is the minimum qualification for banking jobs?",
          answer:
            "Most entry-level banking positions require at least 12th pass qualification, though some positions may require graduation.",
        },
        {
          question: "Is there any fee for placement services?",
          answer:
            "Our placement services are completely free for candidates. We earn through employer partnerships.",
        },
        {
          question: "How long does the placement process take?",
          answer:
            "Typically 2-4 weeks from registration to job offer, depending on bank recruitment cycles.",
        },
      ],
    },
    cta: {
      title: "Ready for a Banking Career?",
      description: "Register with us today and get placed in your dream bank",
      buttonText: "Apply Now",
      buttonLink: "/register",
    },
    sidebarData: {
      whyChooseUs: [
        "10+ years experience in banking placements",
        "Direct tie-ups with 25+ banks",
        "5000+ candidates placed",
        "Free career counseling",
      ],
      companyProfile: {
        description:
          "Suji Training and Placement Service is a leading placement agency with specialization in banking, finance and IT sectors.",
      },
      guidelines: [
        {
          label: "Banking Job Preparation Guide",
          link: "/resources/banking-guide",
        },
        { label: "Document Checklist", link: "/resources/document-checklist" },
        { label: "Interview Tips", link: "/resources/interview-tips" },
      ],
      testimonials: [
        {
          text: "Got placed in Axis Bank within 2 weeks of registering with Suji Career. Very professional service!",
          author: "Rahul Sharma, Customer Executive",
        },
        {
          text: "The training session before interviews was very helpful. Now working with HDFC Bank thanks to Suji.",
          author: "Priya Patel, Relationship Manager",
        },
      ],
      news: [
        {
          title: "ICICI Bank hiring 1000+ customer service staff",
          date: "15 May 2023",
        },
        {
          title: "New banking exam preparation batch starting",
          date: "1 June 2023",
        },
      ],
    },
  },
  "finance-placements": {
    title: "Finance Jobs",
    description:
      "Placement opportunities in leading finance companies like Bajaj Finance, HDB Finance, Shriram Finance and more.",
    icon: Banknote,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    aboutContent: {
      title: "Finance Sector Placements",
      description: [
        "We specialize in placing candidates in top NBFCs and finance companies across India.",
        "Our finance sector placements cover roles like loan officers, sales executives, credit analysts and more.",
        "Strong relationships with 50+ finance companies ensure regular job openings.",
      ],
      image:
        "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    features: [
      "Wide network of finance companies",
      "Both field and office job options",
      "Competitive salary packages",
      "Growth-oriented positions",
      "Regular job fairs",
    ],
    benefits: [
      "Quick placement process",
      "Salary negotiation support",
      "On-job training",
      "Career growth guidance",
      "Multiple job options",
    ],
    advisorTips: {
      title: "Finance Job Tips",
      tips: [
        "Highlight sales experience if any",
        "Be prepared for target-based questions",
        "Show willingness to work in field",
        "Understand basic finance concepts",
        "Be ready with local area knowledge",
      ],
    },
    faqs: {
      title: "Finance Jobs FAQs",
      items: [
        {
          question: "What salary can I expect in finance jobs?",
          answer:
            "Entry-level positions typically offer ₹15,000-₹25,000 per month plus incentives, varying by company and location.",
        },
        {
          question: "Is two-wheeler mandatory for finance jobs?",
          answer:
            "For field sales roles, most companies prefer candidates with their own two-wheeler for area coverage.",
        },
      ],
    },
    cta: {
      title: "Start Your Finance Career",
      description:
        "Apply now for exciting opportunities in leading finance companies",
      buttonText: "Register Today",
      buttonLink: "/register",
    },
    sidebarData: {
      whyChooseUs: [
        "Specialized in finance sector placements",
        "Direct company HR contacts",
        "Honest salary information",
        "Post-placement followup",
      ],
      companyProfile: {
        description:
          "We've placed over 3000 candidates in finance sector jobs with 90% retention rate.",
      },
      testimonials: [
        {
          text: "Got my first job at Bajaj Finance through Suji. The guidance helped me grow quickly in my career.",
          author: "Vikram Singh, Area Manager",
        },
      ],
    },
  },
  "it-placements": {
    title: "IT Placements",
    description:
      "Career opportunities in IT companies with focus on banking and finance sector IT requirements.",
    icon: Laptop2,
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    aboutContent: {
      title: "IT Placements for Banking/Finance Sector",
      description: [
        "Specialized IT placements focusing on banking and finance sector technology requirements.",
        "Opportunities in fintech companies, bank IT departments and financial software firms.",
        "We bridge the gap between technical skills and banking/finance domain knowledge.",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    features: [
      "Fintech specialization",
      "Banking software companies",
      "Technical + domain training",
      "Certification guidance",
      "Project implementation roles",
    ],
    benefits: [
      "Niche opportunities",
      "Higher salary potential",
      "Career growth path",
      "Stable industry",
      "Global exposure",
    ],
    faqs: {
      title: "IT Placements FAQs",
      items: [
        {
          question: "What technical skills are most in demand?",
          answer:
            "Core banking solutions, payment gateways, cybersecurity and data analytics skills are highly sought after.",
        },
      ],
    },
    cta: {
      title: "Launch Your IT Career in Banking/Finance",
      description:
        "Combine your technical skills with banking domain knowledge",
      buttonText: "Apply Now",
      buttonLink: "/register",
    },
    sidebarData: {
      whyChooseUs: [
        "Specialized in banking/finance IT roles",
        "Direct hiring partnerships with fintech firms",
        "Technical skill assessment",
        "Domain knowledge training",
      ],
      companyProfile: {
        description:
          "Our IT placement division focuses specifically on banking and finance technology roles.",
      },
      testimonials: [
        {
          text: "Suji helped me transition from general IT to banking software with their specialized training.",
          author: "Neha Gupta, Software Developer",
        },
      ],
    },
  },
  "parttime-jobs": {
    title: "Part-time Jobs",
    description:
      "Flexible part-time job opportunities in banking, finance and other sectors.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    aboutContent: {
      title: "Part-time Job Placements",
      description: [
        "We understand the need for flexible work options and provide genuine part-time opportunities.",
        "Special focus on college students, homemakers and professionals seeking additional income.",
        "All opportunities are verified for legitimacy and timely payments.",
      ],
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    features: [
      "Flexible timings",
      "Work from home options",
      "College-friendly schedules",
      "Short-term assignments",
      "Verified employers",
    ],
    benefits: [
      "Balance work and studies",
      "Gain work experience",
      "Supplement income",
      "No long-term commitment",
      "Try different roles",
    ],
    faqs: {
      title: "Part-time Jobs FAQs",
      items: [
        {
          question: "What kind of part-time jobs are available?",
          answer:
            "Data entry, telecalling, field survey, promotional events, content writing and more.",
        },
      ],
    },
    cta: {
      title: "Find Flexible Work Options",
      description: "Explore part-time opportunities that fit your schedule",
      buttonText: "Browse Jobs",
      buttonLink: "/part-time-jobs",
    },
    sidebarData: {
      whyChooseUs: [
        "Verified part-time employers only",
        "Flexibility-focused opportunities",
        "Student-friendly options",
        "No hidden terms",
      ],
      companyProfile: {
        description:
          "We carefully screen all part-time opportunities to ensure legitimacy and fair treatment.",
      },
      testimonials: [
        {
          text: "The part-time data entry job helped me earn while completing my studies. Perfect balance!",
          author: "Anjali Mehta, Student",
        },
      ],
    },
  },
  "govtcontract-jobs": {
    title: "Government Contract Jobs",
    description: "Contractual positions in government sectors and PSUs",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    aboutContent: {
      title: "Government Contract Placements",
      description: [
        "Access to contractual positions in various government departments and public sector units.",
        "Temporary but stable employment opportunities with government benefits.",
        "Pathway to potential permanent positions in government sector.",
      ],
      image:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    features: [
      "Government sector experience",
      "Stable contractual periods",
      "Transparent hiring process",
      "Proper documentation",
      "Legal contract support",
    ],
    benefits: [
      "Government workplace exposure",
      "Timely salary payments",
      "Potential for extension",
      "Official work experience",
      "Networking opportunities",
    ],
    faqs: {
      title: "Government Contract Jobs FAQs",
      items: [
        {
          question: "What documents are required for government contract jobs?",
          answer:
            "Typically you'll need educational certificates, ID proof, address proof, and sometimes caste certificate if applicable.",
        },
      ],
    },
    cta: {
      title: "Explore Government Opportunities",
      description: "Apply for contractual positions in government departments",
      buttonText: "View Openings",
      buttonLink: "/govt-contract-jobs",
    },
    sidebarData: {
      whyChooseUs: [
        "Verified government contracts",
        "Proper documentation support",
        "Transparent terms",
        "Follow-up on payments",
      ],
      testimonials: [
        {
          text: "Got a 2-year contract with a PSU through Suji. The process was smooth and transparent.",
          author: "Sanjay Verma, Office Assistant",
        },
      ],
    },
  },
  "company-placements": {
    title: "Company Placements",
    description: "Direct placements in corporate companies across industries",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    aboutContent: {
      title: "Corporate Placements",
      description: [
        "Direct recruitment opportunities with leading corporate houses.",
        "Wide range of industries including manufacturing, services, retail and more.",
        "Both entry-level and experienced positions available.",
      ],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    features: [
      "Diverse industry options",
      "Direct company HR contacts",
      "Salary benchmarking",
      "Career path guidance",
      "Regular corporate drives",
    ],
    benefits: [
      "Direct company hiring",
      "Competitive salaries",
      "Career growth potential",
      "Professional work environment",
      "Employee benefits",
    ],
    faqs: {
      title: "Corporate Placement FAQs",
      items: [
        {
          question: "Do you help with resume preparation for corporate jobs?",
          answer:
            "Yes, we provide free resume building assistance tailored to corporate job requirements.",
        },
      ],
    },
    cta: {
      title: "Find Your Corporate Opportunity",
      description:
        "Connect with leading companies through our placement services",
      buttonText: "Register Now",
      buttonLink: "/corporate-placements",
    },
    sidebarData: {
      whyChooseUs: [
        "Direct HR contacts",
        "Industry-specific placement",
        "Salary benchmarking",
        "Interview preparation",
      ],
      testimonials: [
        {
          text: "Suji's corporate network helped me find the perfect role matching my skills and expectations.",
          author: "Amit Joshi, Sales Executive",
        },
      ],
    },
  },
};

export const servicesMenu = {
  label: "SERVICES",
  submenu: [
    { label: "Company Placements", path: "/services/company-placements" },
    { label: "Banking Placements", path: "/services/banking-placements" },
    { label: "Finance Jobs", path: "/services/finance-placements" },
    { label: "IT Placements", path: "/services/it-placements" },
    { label: "Govt Contract Jobs", path: "/services/govtcontract-jobs" },
    { label: "Part Time Jobs", path: "/services/parttime-jobs" },
  ],
};

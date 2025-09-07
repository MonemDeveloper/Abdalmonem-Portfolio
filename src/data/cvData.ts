export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
  avatar: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'language';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Abdalmonem Badwi",
  title: "Full-Stack Developer (Mobile/Backend)",
  location: "Al Riyadh, KSA",
  email: "abdalmone1994@gmail.com",
  phone: "+966–570 517 735",
  linkedin: "https://linkedin.com/in/abdalmonem-badwi",
  github: "https://github.com/abdalmonem-badwi",
  website: "https://abdalmonem-portfolio.com",
  summary: "Experienced Full-Stack Developer with 8+ years of expertise in backend development, mobile applications, and modern web technologies. Currently serving as Backend Developer at Clean Life, specializing in NestJS, TypeScript, and enterprise-grade solutions. Proven track record in developing scalable applications, payment systems, and real-time platforms across multiple industries.",
  avatar: "/WhatsApp Image 2025-08-10 at 11.16.55 PM copy copy.jpeg"
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Backend Developer",
    company: "Clean Life",
    location: "Al-Riyadh, KSA",
    startDate: "January 2025",
    endDate: "Present",
    current: true,
    description: [
      "Developed customer loyalty and cashback programs using NestJS, enhancing customer satisfaction and engagement",
      "Improved the booking system by integrating advanced features and upfront online payment options, increasing efficiency and convenience",
      "Contributed to overall company productivity by delivering reliable backend solutions aligned with business needs"
    ],
    technologies: ["NestJS", "TypeScript", "Backend Development", "Payment Integration", "Customer Loyalty Programs"]
  },
  {
    id: "2",
    title: "Software Developer and Website Optimizer",
    company: "Q8 LEDs",
    location: "Dubai, UAE",
    startDate: "April 2024",
    endDate: "November 2024",
    current: false,
    description: [
      "Developed and enhanced website features to improve functionality and user experience",
      "Diagnosed and resolved technical issues to ensure smooth website performance and uptime",
      "Implemented SEO strategies to increase website visibility and search engine ranking",
      "Collaborated with team members to identify areas for improvement and optimize the overall site structure and content"
    ],
    technologies: ["JavaScript", "Node.js", "SEO", "Website Optimization", "Frontend Development"]
  },
  {
    id: "3",
    title: "Technical Supervisor",
    company: "Minnesota",
    location: "Khartoum, Sudan",
    startDate: "July 2022",
    endDate: "September 2023",
    current: false,
    description: [
      "Formulated plans for improving procedures, training and processes",
      "Analyzed technical requirements to assess risks and identify key functionalities",
      "Created comprehensive test plans with defined scope and clear objectives",
      "Monitored the development and testing for the Flutter Mobile app (E-commerce) to ensure alignment with business objectives and planning for future app enhancements"
    ],
    technologies: ["Flutter", "E-commerce", "Project Management", "Testing", "Mobile Development"]
  },
  {
    id: "4",
    title: "Software Developer",
    company: "Anadol Emlak",
    location: "Istanbul, Turkey",
    startDate: "May 2021",
    endDate: "May 2022",
    current: false,
    description: [
      "Involved in all aspects of Mobile app life cycle from research and planning to deployment and post-launch support",
      "Performed and developed real-time service for real-time app and API",
      "Developed mobile applications with high precision based on requirements and business needs"
    ],
    technologies: ["Mobile Development", "Real-time Applications", "API Development", "Android", "Flutter"]
  },
  {
    id: "5",
    title: "Software Developer",
    company: "Modern Tech Centre",
    location: "Khartoum, Sudan",
    startDate: "January 2019",
    endDate: "May 2021",
    current: false,
    description: [
      "Wrote strong encrypted code using strong encryption algorithm",
      "Dealt with different types of devices such as POS devices for E-payment (Aisino and Telpo)"
    ],
    technologies: ["Android", "Java", "Kotlin", "POS Systems", "E-payment", "Encryption", "Aisino", "Telpo"]
  },
  {
    id: "6",
    title: "Software Developer and Project Leader",
    company: "Freelancer",
    location: "Khartoum, Sudan",
    startDate: "September 2016",
    endDate: "Intermittent",
    current: false,
    description: [
      "Collected requirements from client and discussed opportunities, challenges, and seriousness of idea",
      "Analyzed and designed data and discussed details and challenges with colleagues",
      "Led and motivated talented project teams, achieving targets within stipulated deadlines",
      "Wrote clean, clear and well-tested code for Mobile (Native + Cross platform apps with Flutter)",
      "Applied various techniques to locate bugs in applications in efficient manner"
    ],
    technologies: ["Android", "Flutter", "Project Management", "System Analysis", "Mobile Development", "Leadership"]
  },
  {
    id: "7",
    title: "Teaching Assistant",
    company: "Al-Neelain University and (ETC, Afag) Centres",
    location: "Khartoum, Sudan",
    startDate: "September 2017",
    endDate: "January 2019",
    current: false,
    description: [
      "Instructor and Teaching Assistant who qualified some competencies in developing mobile applications at Al-Neelain University and some training centres"
    ],
    technologies: ["Teaching", "Mobile Development", "Android", "Training", "Education"]
  }
];

export const skills: Skill[] = [
  // Technical Skills - Most Important
  { name: "NestJS", level: 95, category: "technical" },
  { name: "Node.js", level: 95, category: "technical" },
  { name: "TypeScript", level: 90, category: "technical" },
  { name: "JavaScript", level: 95, category: "technical" },
  { name: "Android Development", level: 95, category: "technical" },
  { name: "Java", level: 90, category: "technical" },
  { name: "Kotlin", level: 88, category: "technical" },
  { name: "Flutter", level: 85, category: "technical" },
  { name: "Angular", level: 85, category: "technical" },
  { name: "React", level: 80, category: "technical" },
  { name: "HTML/CSS", level: 88, category: "technical" },
  { name: "MongoDB", level: 88, category: "technical" },
  { name: "PostgreSQL", level: 85, category: "technical" },
  { name: "Docker", level: 80, category: "technical" },
  { name: "Socket.IO", level: 85, category: "technical" },
  { name: "Payment Integration", level: 88, category: "technical" },
  { name: "POS Systems", level: 85, category: "technical" },
  { name: "Git", level: 90, category: "technical" },
  { name: "RESTful APIs", level: 92, category: "technical" },
  { name: "Real-time Systems", level: 90, category: "technical" },
  
  // Soft Skills - Exactly 10
  { name: "Problem Solving", level: 95, category: "soft" },
  { name: "System Architecture", level: 95, category: "soft" },
  { name: "Project Leadership", level: 90, category: "soft" },
  { name: "Team Collaboration", level: 90, category: "soft" },
  { name: "Time Management", level: 88, category: "soft" },
  { name: "Agile/Scrum", level: 85, category: "soft" },
  { name: "Technical Mentoring", level: 85, category: "soft" },
  { name: "Client Communication", level: 88, category: "soft" },
  { name: "Critical Thinking", level: 90, category: "soft" },
  { name: "Adaptability", level: 87, category: "soft" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Clean Life Booking System",
    description: "Revolutionary booking platform with integrated customer loyalty programs, cashback rewards, and seamless payment processing. Built with NestJS and TypeScript for enterprise-grade performance and scalability.",
    technologies: ["NestJS", "TypeScript", "Payment Integration", "Customer Loyalty", "Booking System", "Backend Development"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Merchant E-payment Application",
    description: "Enterprise-grade electronic payment solution supporting Aisino and Telpo POS devices with military-grade encryption and comprehensive security protocols for financial transactions.",
    technologies: ["Android", "Java", "Kotlin", "POS Integration", "Encryption", "Aisino", "Telpo", "Security"],
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "3",
    title: "Ayda Pay - Money Transfer App",
    description: "Next-generation money transfer platform with real-time processing, biometric authentication, and advanced fraud detection systems for secure cross-border transactions.",
    technologies: ["Flutter", "Node.js", "Real-time", "Security", "Mobile Development", "Biometric Auth"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Garanti Driver - Taxi Application",
    description: "Comprehensive ride-sharing ecosystem with real-time GPS tracking, dynamic pricing algorithms, and integrated payment systems connecting passengers and drivers seamlessly.",
    technologies: ["Android", "Node.js", "PHP", "Real-time", "API Development", "GPS Tracking", "Mobile Development"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor's Degree with Honors - Information Technology",
    institution: "Al Neelain University",
    location: "Khartoum, Sudan",
    startDate: "November 2011",
    endDate: "May 2016",
    gpa: "3.8/4.0",
    description: "Comprehensive study in Information Technology with specialized focus on software engineering, system architecture, database design, and network security. Graduated with honors, demonstrating excellence in academic performance and practical application of technical concepts."
  },
  {
    id: "2",
    degree: "Advanced Network Administration Certificate",
    institution: "Data Centre of Al Neelain University",
    location: "Khartoum, Sudan",
    startDate: "August 2015",
    endDate: "October 2015",
    description: "Intensive professional certification program covering network infrastructure, data center operations, server management, and cybersecurity protocols. Hands-on training with enterprise-grade equipment and real-world scenarios."
  }
];

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "Node.js Advanced Development",
    issuer: "Technical Development Institute",
    date: "2023"
  },
  {
    id: "2",
    name: "TypeScript Professional Developer",
    issuer: "JavaScript Certification Board",
    date: "2022"
  },
  {
    id: "3",
    name: "Angular Framework Certification",
    issuer: "Angular Community",
    date: "2022"
  },
  {
    id: "4",
    name: "Android Certified Developer",
    issuer: "Google Developers",
    date: "2021"
  },
  {
    id: "5",
    name: "Flutter Development Certification",
    issuer: "Flutter Community",
    date: "2021"
  }
];

export const services: Service[] = [
  {
    icon: "Code",
    title: "Full-Stack Development",
    description: "Developing complete web applications using Node.js, TypeScript, Angular, and modern JavaScript technologies"
  },
  {
    icon: "Smartphone",
    title: "Android Applications",
    description: "Developing high-performance native Android applications using Java and Kotlin with 7+ years of experience"
  },
  {
    icon: "Zap",
    title: "Flutter Applications",
    description: "Developing cross-platform applications using Flutter with outstanding user experience and performance"
  },
  {
    icon: "Database",
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, real-time features, and database management"
  },
  {
    icon: "Cloud",
    title: "Real-time Applications",
    description: "Developing real-time applications using Socket.IO and modern communication technologies"
  },
  {
    icon: "Users",
    title: "Electronic Payment Systems",
    description: "Developing secure electronic payment solutions with POS device support like Aisino and Telpo"
  }
];
// ============================================================
// Portfolio Constants — Shaik Shahid Shariff
// ============================================================

export const PERSONAL = {
  name: "Shaik Shahid Shariff",
  shortName: "Shahid",
  initials: "SS",
  roles: [
    "Flutter Developer",
    "Mobile App Developer",
    "Software Engineer",
    "CS Undergraduate",
  ],
  tagline: "Building Elegant Mobile Experiences",
  bio: "Motivated Computer Science undergraduate with 2+ years of experience specializing in cross-platform mobile application development. I craft pixel-perfect, performant mobile apps using Flutter & Firebase — from real-time tracking systems to ML-powered diagnostics.",
  location: "Rajahmundry, Andhra Pradesh, India",
  email: "shaikshahidshariff@gmail.com",
  linkedin: "https://www.linkedin.com/in/shaik-shahid-shariff-/",
  github: "https://github.com/Skshahidshariff",
  githubUsername: "Skshahidshariff",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
};

export const STATS = [
  { label: "Years Experience", value: "2+", suffix: "" },
  { label: "Projects Built", value: "10+", suffix: "" },
  { label: "Certifications", value: "4", suffix: "" },
  { label: "ML Accuracy", value: "99", suffix: "%" },
];

export const SKILLS = [
  {
    category: "Mobile & Frameworks",
    icon: "Smartphone",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Flutter", level: 92 },
      { name: "Dart", level: 90 },
      { name: "Android Studio", level: 85 },
    ],
  },
  {
    category: "Languages",
    icon: "Code2",
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "HTML/CSS", level: 78 },
    ],
  },
  {
    category: "Backend & Database",
    icon: "Database",
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Firebase", level: 88 },
      { name: "REST APIs", level: 85 },
      { name: "SQL", level: 78 },
      { name: "Firebase Realtime DB", level: 85 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Machine Learning", level: 72 },
      { name: "CNN", level: 70 },
      { name: "Image Processing", level: 68 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "Wrench",
    color: "from-rose-500 to-red-400",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 82 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "Flutter Developer Intern",
    company: "Technical Hub",
    period: "2023 – 2024",
    type: "Internship",
    description:
      "Developed production-ready Flutter applications and collaborated directly with clients to deliver high-quality mobile experiences.",
    highlights: [
      "Developed multiple Flutter applications from concept to production deployment",
      "Integrated REST APIs for seamless data communication",
      "Implemented Google Maps API for location-based features",
      "Integrated GitHub API for developer-centric features",
      "Built responsive, modern UIs following Material Design principles",
      "Collaborated with clients to gather requirements and iterate on designs",
    ],
    tech: ["Flutter", "Dart", "REST APIs", "Google Maps API", "GitHub API", "Firebase"],
  },
];

export const PROJECTS = [
  {
    id: "fitness-club",
    title: "Fitness Club App",
    description:
      "A comprehensive fitness companion app offering personalized workout plans, exercise video library, and adaptive recommendations — all wrapped in a sleek, minimal UI.",
    longDescription:
      "Built with Flutter, this app delivers 50+ workout plans and 100+ exercise videos with a clean, motivating interface. Features intelligent personalized recommendations and fully responsive design optimized for all screen sizes.",
    features: [
      "50+ curated workout plans",
      "100+ HD exercise tutorial videos",
      "Personalized AI recommendations",
      "Modern minimal UI/UX",
      "Responsive across all devices",
      "Offline content support",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    category: "Mobile App",
    color: "from-blue-600 via-purple-600 to-cyan-500",
    icon: "Dumbbell",
    github: "https://github.com/Skshahidshariff",
    demo: null,
    highlights: ["50+ Plans", "100+ Videos", "99% Uptime"],
    year: "2023",
  },
  {
    id: "car-tracking",
    title: "College Car Tracking App",
    description:
      "Real-time vehicle tracking platform for college transportation with admin dashboard, driver module, live location sharing, and comprehensive fleet analytics.",
    longDescription:
      "A full-stack mobile solution featuring role-based authentication for admins, drivers, and students. Integrates Google Maps for live tracking with real-time location updates, pie chart analytics for vehicle management, and a comprehensive admin dashboard.",
    features: [
      "Real-time GPS vehicle tracking",
      "Role-based authentication (Admin/Driver/Student)",
      "Interactive admin dashboard",
      "Google Maps integration",
      "Pie chart fleet analytics",
      "Vehicle management system",
    ],
    tech: ["Flutter", "Firebase", "Google Maps", "Realtime DB", "Dart"],
    category: "Mobile App",
    color: "from-emerald-600 via-teal-500 to-cyan-400",
    icon: "MapPin",
    github: "https://github.com/Skshahidshariff",
    demo: null,
    highlights: ["Real-time Tracking", "Multi-role Auth", "Analytics Dashboard"],
    year: "2024",
  },
  {
    id: "flutterverse",
    title: "FlutterVerse",
    description:
      "A thriving developer community app for Flutter enthusiasts — featuring 200+ curated resources, code sharing, tutorials, and Firebase-powered real-time interactions.",
    longDescription:
      "FlutterVerse is the go-to Flutter developer hub. Built with Firebase Authentication and Realtime Database, it offers 200+ Flutter resources, powerful search, tutorial collections, and a collaborative code-sharing environment.",
    features: [
      "200+ Flutter resources library",
      "Firebase Authentication",
      "Real-time Database integration",
      "Powerful search functionality",
      "Tutorial collections",
      "Community code sharing",
    ],
    tech: ["Flutter", "Firebase", "REST APIs", "Realtime DB", "Dart"],
    category: "Community Platform",
    color: "from-purple-600 via-violet-500 to-indigo-400",
    icon: "Globe",
    github: "https://github.com/Skshahidshariff",
    demo: null,
    highlights: ["200+ Resources", "Real-time Sync", "Community Driven"],
    year: "2024",
  },
  {
    id: "ecg-analyzer",
    title: "ECG Report Analyzer",
    description:
      "ML-powered ECG classification system using Convolutional Neural Networks achieving 99% prediction accuracy — automating cardiac diagnosis through advanced image processing.",
    longDescription:
      "A Machine Learning solution leveraging CNN architecture for automated ECG report analysis. Processes ECG images through a trained neural network to classify cardiac conditions with an impressive 99% accuracy rate, enabling faster and more reliable automated diagnosis.",
    features: [
      "CNN-based ECG classification",
      "99% prediction accuracy",
      "Automated cardiac diagnosis",
      "Advanced image processing",
      "Multi-class condition detection",
      "Fast inference pipeline",
    ],
    tech: ["Machine Learning", "CNN", "Python", "Image Processing"],
    category: "AI / ML",
    color: "from-rose-600 via-red-500 to-orange-400",
    icon: "Heart",
    github: "https://github.com/Skshahidshariff",
    demo: null,
    highlights: ["99% Accuracy", "CNN Architecture", "Automated Diagnosis"],
    year: "2024",
  },
];

export const CERTIFICATIONS = [
  {
    title: "ServiceNow Certified System Administrator",
    issuer: "ServiceNow",
    icon: "Shield",
    color: "from-green-500 to-emerald-400",
    description: "Certified expertise in ServiceNow platform administration and configuration.",
    year: "2024",
  },
  {
    title: "ServiceNow Certified Application Developer",
    issuer: "ServiceNow",
    icon: "Code2",
    color: "from-blue-500 to-cyan-400",
    description: "Advanced certification in developing custom applications on the ServiceNow platform.",
    year: "2024",
  },
  {
    title: "Java Programming Certification",
    issuer: "Industry Standard",
    icon: "Coffee",
    color: "from-orange-500 to-amber-400",
    description: "Certified proficiency in Java programming, OOP principles, and application development.",
    year: "2023",
  },
  {
    title: "C Programming Certification",
    issuer: "Industry Standard",
    icon: "Terminal",
    color: "from-purple-500 to-violet-400",
    description: "Certified expertise in C programming, data structures, and systems programming.",
    year: "2023",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech Computer Science and Engineering",
    institution: "Aditya Engineering College",
    location: "Andhra Pradesh, India",
    period: "2022 – 2026",
    cgpa: "7.54",
    status: "Pursuing",
    highlights: [
      "Specialization in Mobile App Development",
      "Machine Learning Research Projects",
      "ServiceNow Dual Certification",
      "Active in technical competitions",
    ],
  },
];

export const TECH_STACK_ICONS = [
  { name: "Flutter", color: "#54C5F8" },
  { name: "Dart", color: "#00B4AB" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Java", color: "#ED8B00" },
  { name: "Python", color: "#3776AB" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Android", color: "#3DDC84" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Postman", color: "#FF6C37" },
  { name: "SQL", color: "#4479A1" },
];

export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const COMMAND_ITEMS = [
  { label: "Go to About", href: "#about", icon: "User" },
  { label: "Go to Skills", href: "#skills", icon: "Code2" },
  { label: "Go to Experience", href: "#experience", icon: "Briefcase" },
  { label: "Go to Projects", href: "#projects", icon: "FolderOpen" },
  { label: "Go to Certifications", href: "#certifications", icon: "Award" },
  { label: "Go to Education", href: "#education", icon: "GraduationCap" },
  { label: "Go to Contact", href: "#contact", icon: "Mail" },
  { label: "Download Resume", href: "/resume.pdf", icon: "Download" },
  { label: "GitHub Profile", href: "https://github.com/Skshahidshariff", icon: "Github" },
  { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/shaik-shahid-shariff-/", icon: "Linkedin" },
  { label: "Send Email", href: "mailto:shaikshahidshariff@gmail.com", icon: "Send" },
];

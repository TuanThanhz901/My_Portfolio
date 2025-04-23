export type SkillItem = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
};

export const skills: SkillItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    iconName: "Layout",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "SASS/SCSS",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Building robust server-side applications",
    iconName: "Server",
    technologies: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
  },
  {
    id: 3,
    title: "Database Management",
    description: "Working with various database systems",
    iconName: "Database",
    technologies: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "SQLite",
      "Supabase",
    ],
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications",
    iconName: "Smartphone",
    technologies: [
      "React Native",
      "Flutter",
      "Mobile-First Design",
      "Android Native",
      "Progressive Web Apps",
      "App Store Optimization",
  
    ],
  },
  {
    id: 5,
    title: "Machine Learning",
    description: "Building intelligent systems with data-driven models and deep learning techniques.",
    iconName: "BrainCircuit", // Gợi ý icon khác thay vì "Smartphone"
    technologies: [
      "Scikit-learn",
      "TensorFlow / PyTorch",
      "Computer Vision",
      "Natural Language Processing",
    ],
  },
  {
    id: 6,
    title: "Programming Languages",
    description: "Proficient in multiple programming languages",
    iconName: "Code",
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    id: 7,
    title: "Cloud Services",
    description: "Deploying and managing applications in the cloud",
    iconName: "Cloud",
    technologies: ["AWS", "Google Cloud", "Vercel","Render", "Docker","Odoo"],
  },
  {
    id: 8,
    title: "Security",
    description: "Implementing security best practices",
    iconName: "Shield",
    technologies: [
      "Authentication",
      "Authorization",
      "Data Encryption",
      "HTTPS",
      "Input Validation",
    ],
  },
  {
    id: 9,
    title: "DevOps",
    description: "Streamlining development and deployment processes",
    iconName: "Terminal",
    technologies: ["Git", "CI/CD", "GitHub Actions", "Docker"],
  },
  {
    id: 10,
    title: "Soft Skills",
    description: "Essential non-technical abilities",
    iconName: "Lightbulb",
    technologies: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Time Management",
    ],
  },
];

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  date: string;
  role: string;
};
export const allProjects: ProjectItem[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    longDescription:
      "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
    image: "/ecommerce.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
    liveUrl: "https://ecom-bice.vercel.app/",
    githubUrl: "#",
    date: "January 2024",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Fashion Recommendation System Website",
    description:
      "A fashion recommendation web using deep learning, visual search, and graph-based user modeling.",
    longDescription:
      "This project is a fashion recommendation web application built with Flask. It leverages YOLOv5 and MobileNetV2 for image-based feature extraction and object detection. FAISS is used for fast and efficient similarity search among fashion items. Additionally, Graph Convolutional Networks (GCNs) are integrated to model complex user-item interactions and significantly improve the recommendation performance.",
    image: "/fashionRS.jpg",
    tags: ["Flask", "YOLOv5", "MobileNetV2", "FAISS", "HTML5", "CSS","JS"],
    liveUrl: "#",
    githubUrl: "https://github.com/TuanThanhz901/Fashion_Recommendation_System",
    date: "December 2024",
    role: "Deep Learning",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website to showcase projects and skills with a modern design.",
    longDescription:
      "This portfolio website was designed to showcase my projects and skills in a visually appealing way. It features smooth animations, responsive design, and a contact form. The website was built with Next.js and styled with Tailwind CSS.",
    image: "/portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    liveUrl: "https://tuanthanh-portfolio.vercel.app/",
    githubUrl: "https://github.com/TuanThanhz901/My_Portfolio",
    date: "April 2025",
    role: "Designer & Developer",
  },
    {
    id: 4,
    title: "EMAX - Learning English App",
    description:
      "A cross-platform English learning app built with Flutter, featuring real-time chat, quizzes, flashcards, and Google login.",
    longDescription:
      "EMAX is a cross-platform mobile application developed using Flutter and Dart, designed to support English learners through interactive exercises and community features. Key highlights include Google Sign-In authentication, real-time chat using WebSocket, English-Vietnamese dictionary with flashcard learning, ranking challenges, and Firebase Realtime Database for synchronization. The app promotes engaging and social learning with a user-friendly interface and role-based content access.",
    image: "/Emax.png",
    tags: ["Flutter", "Dart", "Firebase", "WebSocket", "Mobile App"],
    liveUrl: "#", // Thay bằng link demo thật nếu có
    githubUrl: "https://github.com/TuanThanhz901/Flutter-Learning-English-App", // Thay bằng repo thật nếu có
    date: "May 2024",
    role: "Mobile App Developer",
  }
  ,
  // {
  //   id: 5,
  //   title: "E-Commerce Website",
  //   description:
  //     "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
  //   longDescription:
  //     "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
  //   image: "/ecommerce.jpg",
  //   tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   date: "January 2023",
  //   role: "Full Stack Developer",
  // },
  // {
  //   id: 6,
  //   title: "E-Commerce Website",
  //   description:
  //     "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
  //   longDescription:
  //     "This project is a complete e-commerce solution built with Next.js and MongoDB. It features product listings, search functionality, shopping cart, user authentication, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
  //   image: "/ecommerce.jpg",
  //   tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Redux"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   date: "January 2023",
  //   role: "Full Stack Developer",
  // },
];

// Featured projects for home page
export const featuredProjects = allProjects.slice(0, 2);

// Featured skills for home page
export const featuredSkills = skills.slice(0, 3);

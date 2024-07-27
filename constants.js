export const METADATA = {
  author: "Khairul Umam",
  title: "Portofolio | Khairul Umam",
  description:
    "Khairul Umam is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Khairul Umam",
    "Frontend Engineer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Khairul Umam Portfolio",
  ].join(", "),
  image:
    "",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I'm Sofware engineer",
  "I build things for the apps",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: khairulumam950@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/khairul-umam-a55594249/",
  },
  {
    name: "github",
    url: "https://github.com/Umam1210",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    "vite",
    "firebase",
    "figma",
    "rust",
    "golang",
    "php",
    "docker",
    "python",
    "java"
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "antdesign",
    "laravel",
    "bootstrap",
    "svelte",
    "vue",
    "astro",
    "springboot"
  ],
  databases: ["mysql", "mongodb", "postgresql"],
  other: ["git",],
};

export const PROJECTS = [
  {
    name: "Bazi Calculator",
    image: "/projects/bazi.png",
    blurImage: "/projects/bazi.png",
    description: "Bazi is a Chinese astrological method that analyzes a person's fate based on their date and time of birth.",
    gradient: ["#2E86C1", "#CACFD2"],
    url: "https://chillcalendar.com/",
    tech: ["react", "laravel", "tailwindcss", "typescript"],
  },
  {
    name: "Auxonode",
    image: "/projects/auxonode.png",
    blurImage: "/projects/auxonode.png",
    description: "Auxonode is a vpn application",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "in developing",
    tech: ["javascript", "laravel", "php", "tailwindcss"],
  },
  {
    name: "Chat bot katherine",
    image: "/projects/katherine.png",
    blurImage: "/projects/katherine.png",
    description:
      "chat bot apps for healthcare",
    gradient: ["#000066", "#6699FF"],
    url: "in developing",
    tech: ["svelte", "typescript", "python", 'docker'],
  },
  {
    name: "Armed Chat",
    image: "/projects/armed.png",
    blurImage: "/projects/armed.png",
    description: "app for ultra-secret chats",
    gradient: ["#142D46", "#2E4964"],
    url: "in developing",
    tech: ["html", "tailwindcss"],
  },
  {
    name: "Security Operation Center",
    image: "/projects/soc.png",
    blurImage: "/projects/soc.png",
    description: "App to monitor and manage security operations",
    gradient: ["#063555", "#e80a0a"],
    url: "in developing",
    tech: ["react", "javascript", "tailwindcss", "golang", "rust"],
  },
  {
    name: "AI care Monitaring transaction",
    image: "/projects/wallet.png",
    blurImage: "/projects/wallet.png",
    description: "app to monitor and manage AI care finances",
    gradient: ["#0d898f", "#788e8f"],
    url: "in developing",
    tech: ["react", "tailwindcss", "typescript", "golang"],
  },
  {
    name: "AI care Merchant App",
    image: "/projects/merchant.png",
    blurImage: "/projects/merchant.png",
    description: "app for AI care sales",
    gradient: ["#142D46", "#2E4964"],
    url: "in developing",
    tech: ["react", "tailwindcss", "typescript", "golang"],
  }
];


export const WORK_CONTENTS = {
  WHITEBOX: [
   {
    title: "Whitebox",
    description: "Whitebox is a 360° creative and technology agency specializing in digital solutions, branding, and marketing.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Elevating brands through innovation and creativity
      </div>
    ),
  },
  {
    title: "Our Services",
    description: "Whitebox offers a range of services including web development, app development, branding, digital marketing, and more.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Comprehensive digital solutions for your business
      </div>
    ),
  },
  {
    title: "Our Projects",
    description: "Explore our portfolio showcasing a variety of projects across different industries, reflecting our expertise and creativity.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Delivering excellence in every project
      </div>
    ),
  },
  {
    title: "Our Team",
    description: "Meet our team of experts dedicated to providing innovative and effective solutions tailored to your business needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        A team of professionals driving success
      </div>
    ),
  },
  {
    title: "Frontend Engineer",
    description: "As a Frontend Engineer at Whitebox, I contribute to creating seamless and engaging digital experiences for our clients.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Crafting intuitive and responsive user interfaces
      </div>
    ),
  },
  ],
  DIGITALSEKURITIINDONESIA: [
   {
    title: "Digital Sekuriti Indonesia",
    description: "Digital Sekuriti is a company that provides digital security solutions and data protection for various businesses.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Safeguarding your digital world with advanced technology
      </div>
    ),
  },
  {
    title: "Our Services",
    description: "Digital Sekuriti offers a range of services including security consulting, security software development, security audits, and cybersecurity training.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Comprehensive digital security solutions for your business
      </div>
    ),
  },
  {
    title: "Our Projects",
    description: "Explore our portfolio showcasing various projects across different industries, reflecting our expertise in tailored security solutions.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Excellence in every digital security project
      </div>
    ),
  },
  {
    title: "Our Team",
    description: "Meet our team of experts dedicated to providing innovative and effective security solutions tailored to your business needs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Professionals driving your success in digital security
      </div>
    ),
  },
  {
    title: "Software Engineer",
    description: "As a Software Engineer at Digital Sekuriti, I contribute to the development of innovative digital security solutions, ensuring optimal data protection for our clients.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white px-4">
        Building and developing cutting-edge security solutions
      </div>
    ),
  },
  ]
};

export const GTAG = "";

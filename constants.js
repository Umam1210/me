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
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
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
    gradient: ["#142D46", "#2E4964"],
    url: "in developing",
    tech: ["react", "javascript", "tailwindcss", "golang", "rust"],
  },
  {
    name: "AI care Monitaring transaction",
    image: "/projects/wallet.png",
    blurImage: "/projects/wallet.png",
    description: "app to monitor and manage AI care finances",
    gradient: ["#142D46", "#2E4964"],
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
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";

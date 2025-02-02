import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";

export const HERO_CONTENT = `I am a Full Stack Developer with expertise in React, Node.js, Express.js, MongoDB, TailwindCSS, and more. With over a year of experience, I specialize in building scalable, high-performance web applications. My goal is to create innovative solutions that enhance user experiences, drive business growth, and solve complex problems.`;

export const ABOUT_TEXT = `I am a Full Stack Developer with expertise in HTML, CSS, TailwindCSS, React, Node.js, Express.js, MySQL, MongoDB, Redux, Socket.io, JWT, and more. I am passionate about building scalable, high-performance web applications and continuously seek to solve complex problems with innovative solutions. With hands-on experience in both front-end and back-end technologies, I specialize in creating seamless and user-friendly digital experiences. I thrive in collaborative environments, am committed to learning new technologies, and contribute to open-source projects. Outside of development, I enjoy exploring emerging tech, refining my skills, and staying active.`;

export const INTERNSHIP = [
  {
    year: "Nov-2024 - Feb-2025",
    role: "Full Stack Developer",
    company: "ToysPresso Pvt Ltd",
    description: ` Enhanced the platform with an AI Chatbot powered by OpenAI, enabling natural language interactions and increasing user engagement by 75%.
     Added Voice Assistance for seamless interaction with the AI Chatbot, significantly improving accessibility and user experience.
     Utilized NVIDIA Omniverse to convert 2D images into 3D models, enhancing the platform's visual and interactive capabilities by 38%.
     Developed real-time chat functionality using Socket.io, improving user communication by 47% and enabling seamless interaction between users and sellers.
     Implemented live page features with MediaSoup, boosting real-time user interactions by 60%, ensuring seamless live streaming for users and sellers.`,
    technologies: ["JavaScript", "React.js", "OpenAI", "MongoDB", "NVIDIA Omniverse", "Socket.io", "MediaSoup"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce",
    image: project4,
    description: ` Built a serverless e-commerce platform with Upstash Ioredis for authentication, Stripe for seamless payments, and real-time purchasing.
     Included an admin panel for creating, updating, and managing products, including featured items.
     Ensured secure transactions, scalable performance, and an enhanced user shopping experience.`,
    link: "https://github.com/Shivamup51/E-Commerce.git",
    technologies: ["React.js", "TailwindCSS", "Express.js", "Node.js", "MongoDB", "IoRedis", "Stripe"],
  },
  {
    title: "Chat-App",
    image: project1,
    description: ` Developed a feature-rich chat application with real-time messaging using Socket.IO, enhancing communication by 90%.
     Integrated read receipts for a 50% improved user experience.
     Utilized MongoDB for data storage and implemented JWT-based authentication for secure sessions.
     Designed RESTful APIs with Express.js for user and messaging management.`,
    link: "https://github.com/Shivamup51/CHAT_APP.git",
    technologies: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "Socket.io"],
  },
  {
    title: "Vibe-Nest",
    image: project2,
    description: ` Developed a video streaming platform offering TV shows, movies, and personalized content, increasing user engagement by 60%.
     Integrated features like search history and favorites management, improving content discovery by 40%.
     Utilized modern web technologies with robust authentication and authorization, reducing unauthorized access by 57%.`,
    link: "https://github.com/Shivamup51/Vibe.git",
    technologies: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "TMDB API Key"],
  },
  {
    title: "Webpage-ScreenShotter",
    image: project3,
    description: ` Webpage Screenshotter is a web application that allows users to capture multiple high-resolution screenshots of any website by providing a URL.
    The tool ensures that UI elements are clear and visible, making it useful for AI vision models, archiving content, or sharing snapshots.`,
    link: "https://github.com/Shivamup51/Webpage-ScreenShotter.git",
    technologies: ["React.js", "TailwindCSS", "Express", "Node.js", "Puppeteer", "Local/AWS S3 Storage"],
  },
];

export const CONTACT = {
  title: "Contact",
  subtitle: "Feel free to reach out to me for any questions or opportunities!",
  address: "RKGIT College, Ghaziabad, U.P, 201003",
  phoneNo: "+91 7297977115",
  email: "shivamupadhyay2868@gmail.com"
};

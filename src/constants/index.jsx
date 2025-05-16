import project1 from "../assets/projects/spotifycloneproject.png";
import project2 from "../assets/projects/todolistproject.png";
import project3 from "../assets/projects/Tndproject.png";

export const HERO_CONTENT = `I am a passionate developer looking forward to accept frontend projects. I have been interested and fascinated by the tech field since I was a college student and seeing others project used to bring shimmers in my eyes, especially Web-Development.`;

export const ABOUT_TEXT =
  {
    "About Me": "A Sophomore at Delhi Technological Univeristy",
    Achievements :""
    
  }
;

export const EXPERIENCES = [
  {
    year: "OCT 2024 - Nov 2024",
    role: "Frontend Developer Intern",
    company: "Sponsogram",
    description: `Actively contributed to improving the user experience by fixing various UI/UX bugs, optimizing existing code, and implementing responsive design enhancements. Refactored reusable components to improve performance and maintainability. Assisted in debugging and resolving cross-browser compatibility issues, ensuring a smooth and consistent experience across devices.`,
    technologies: ["React.js", "Next.js", "Typescript", "MongoDB"],
  },
  {
    year: "Sep 2024 - Nov 2024",
    role: "Web-Dev Intern",
    company: "DTU USIP",
    description: `Collaborated with a team of developers and designers to enhance the user interface of the DTU Department of International Affairs website. Implemented design changes to improve accessibility, responsiveness, and overall aesthetics. Developed front-end components to ensure better performance and compatibility across different devices. Assisted in debugging, testing, and deploying updates to the website, ensuring a seamless experience for students and faculty members.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Truth & Dare Minigame",
    image: project3,
    description:
      "An application made just for fun & enjoy a game of Truth or Dare with friends. This project helped me sharpen my concepts of backend using node.js & express.js aswell working with Restful APIs.",
    technologies: ["React","TailwindCSS", "Express.js", "Restful API"],
  },
  {
    title: "Todo-List App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Firebase"],
  },
  {
    title: "Spotify Clone",
    image: project1,
    description:
      "A fully Functional but non-responsive spotify music player clone. Understood the concepts of making a website functional using Javascript. A good beginner project I made while sharpening my concepts of DOM in Javascript.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "New Delhi",
  phoneNo: "+91 9650461689 ",
  email: "jangrahiten.dev@gmail.com",
};

import project1 from "../assets/projects/spotifycloneproject.png";
import project2 from "../assets/projects/todolistproject.png";
import project3 from "../assets/projects/Tndproject.png";

export const HERO_CONTENT = `I am a passionate developer looking forward to accept frontend projects. I have been interested and fascinated by the tech field since I was a college student and seeing others project used to bring shimmers in my eyes, especially Web-Development.`;

export const ABOUT_TEXT =
  {
    "About Me": "Hi, I'm <strong>Hiten Jangra</strong> — a second-year Electrical Engineering student at Delhi Technological University (DTU) with a deep passion for technology. I thrive in the world of code, often losing track of time while building, learning, and experimenting. I'm always eager to explore emerging tech, sharpen my skills, and take on exciting challenges that push my limits.",
    Hobbies : "Beyond coding, I'm someone who believes in a well-rounded lifestyle. I consistently <strong>hit the Gym</strong> to stay active, and I've been <strong>playing Football</strong> since High School — it's my favorite way to recharge and stay competitive. I also enjoy expressing my creativity through <strong>video editing and graphic design</strong>, where I'm at an intermediate level. And when the moment calls for it, I pick up the <strong>Guitar</strong> — I may not be a pro, but I know how to set the mood with a few chords.",
    "Achievements & Experiences": "While I haven't snagged many hackathon wins yet, I've actively participated in several, each one helping me grow as a developer and expand my network. These events have taught me more than just code — from rapid problem-solving to effective teamwork under pressure.  Every experience has shaped my journey, and I'm always looking forward to what’s next."
    
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

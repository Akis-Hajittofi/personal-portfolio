import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import tms1 from "../public/screenshots/tms-tickets.png";
import mazeGame1 from "../public/screenshots/3d-maze-game-main.png";
import yuniConnect1 from "../public/screenshots/yuni-connect-home.png";

export const projects = [
  {
    id: 1,
    title: "Quiz App",
    shortDescription:
      "A fun way to put your knowledge to test featuring a typing quiz",
    description: `Quiz App is a fun way to put your knowledge to test featuring a typing quiz. Can you name all 50 US States? Or all gen 1 Pokémon? ...and more! I originally made this project at the end of my bootcamp course for my personal project after deciding to create a game and scrapping my initial idea of a wiki. In pursuit of creating fun experiences, later on I developed a 3D Maze Game.

    Initially, the code was badly formatted and since then I've completely revamped it. My future ideas for this include adding more types of quizzes such as a drag & drop history timeline quiz (e.g. History of Nintendo consoles), multiple choice and 'this or that' along with leaderboards and other enhancements.`,
    tools: ["React.js", "Tailwind CSS", "Vite", "React Router", "Lucide Icons"],
    image: quizApp1,
    gitHub: "https://github.com/Akis-Hajittofi/quiz-app",
    website: "https://quiz-app-akis.netlify.app",
  },
  {
    id: 2,
    title: "Ticket Management System",
    shortDescription:
      "A system designed to efficiently handle support ticket requests within an organization. Built in Next JS.",
    tools: ["Next.js", "Shadcn UI", "Radix UI", "Tailwind CSS", "Lucide Icons"],
    description: `This project started from aiming to on develop something that is widely used across companies. The application is a system designed to efficiently handle support ticket requests within an organisation. Furthermore, I realised that I must start learning how to properly use component UI libraries. I chose Shadcn UI because of it's excellent integration with Tailwind CSS and its simple ready-to-use setup in my code.`,
    image: tms1,
    gitHub: "https://github.com/Akis-Hajittofi/ticket-management-system",
    website: "https://ticket-ms.vercel.app/tickets",
  },
  {
    id: 3,
    title: "Yuni Connect",
    shortDescription: "Recruitment platform connecting students to employers.",
    description: "Recruitment platform connecting students to employers.",
    tools: [
      "React.js",
      "Daisy UI",
      "React Beautiful DnD",
      "RTK Query",
      "React Redux",
      "Formik",
      "Yup",
      "React Router",
      "Vite",
      "Lucide Icons",
    ],
    image: yuniConnect1,
  },
  {
    id: 4,
    title: "3d Maze Game",
    shortDescription:
      "Maze game with 3d graphics made using React Three Fiber, featuring enemies, shooting, scores etc.",
    description:
      "Maze game with 3d graphics made using React Three Fiber, featuring enemies, shooting, scores etc.",
    tools: [
      "React Three/Fiber",
      "React Three/Rapier",
      "React Three/Drei",
      "React Spring/Three",
      "React Redux",
      "Zustand",
    ],
    image: mazeGame1,
    website: "https://3d-maze-game.netlify.app/",
  },
];

export const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "RTK Query",
  "JavaScript",
  "HTML",
  "CSS",
  "Agile",
  "Wireframing",
];
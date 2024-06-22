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
    shortDescription:
      "Recruitment platform connecting students to employers. Agile collaboration with backend engineers (FastAPI/Postgres)",
    description: `As a frontend developer on a four-person agile team, I played a key role in building Yuni Connect, a recruitment platform aimed at empowering university graduates with their job search. The idea behind this platform is to solve the common problem that graduates face: Uncertainty upon graduation or even whilst in studies, with what's the best steps to take and how to prepare well. Collaborating with the backend team that's using Python and Postgres has enabled me to deepen my understanding of data-fetching and caching methodologies, through the use of RTK Query, as well as broader data structures.

One of my key contributions is an intuitive drag & drop board for easy application tracking, making use of the React DnD library. This itself proved very challenging because I faced a lot of problems with updating the state correctly and synchronising the changes in the database. This happened because the items had positional index which was used to send to the database to save the order of the items. The algorithm was incorrectly updating the positional index, which on page reload will have a different order. Thus, the solution was to fix the for loop which was responsible for updating the positional index.

Soon AI features will be worked on where students can prepare for interviews and a career path analyzer to provide more clarity in what paths are available for their degree and to learn about other paths if they wish to change. The combination of these services makes Yuni Connect more than just a job listing site.

`,
    tools: [
      "React.js",
      "Daisy UI",
      "React Beautiful DnD",
      "RTK Query",
      "Docker",
      "React Redux",
      "Formik",
      "Yup",
      "React Router",
      "Vite",
      "Lucide Icons",
    ],
    image: yuniConnect1,
    website: "https://yuniconnect.com",
  },
  {
    id: 4,
    title: "3d Maze Game",
    shortDescription:
      "Maze game with 3d graphics made using React Three Fiber, featuring enemies, shooting, scores etc.",
    description: `Third-person maze game with 3d graphics featuring featuring moving enemies, HP, coins and a shooting weapon. The aim of the game is to find your way out of the maze without getting killed. The initial idea of this project started after working on my Quiz App. I wanted to create another fun experience but with the challenge of something completely different to what I've ever done before: graphics. After carrying out extensive research, it came to my surprise how easy it is to make a game in 3d in React and tools within Three.js.

One of the biggest challenges to this project was the calculations, specifically the positioning in the 3d space. For example: Making a room in position x:0 and z:0 was very simple but when it came to replicating the same room in different locations with different sizes on the canvas, I had issues with doors and walls not being placed connected properly (e.g. some walls sticking out). It took a lot of diagaming to understand the logic properly and came up with some functions to calculate offsets.

NOTE: If you try the live demo, please minimise the window to reduce lag.

CONTROLS:
Movement: Use the WASD keys to move your character.
Shift: Press and hold the Shift key to run.
Space: Press the Spacebar to jump.
Mouse click: Click the mouse button to shoot.
Q: Hold the Q key to switch to first-person view.`,
    tools: [
      "React Three/Fiber",
      "React Three/Rapier",
      "React Three/Drei",
      "React Spring/Three",
      "React Redux",
      "Zustand",
    ],
    image: mazeGame1,
    gitHub: "https://github.com/Akis-Hajittofi/3d-maze-game",
    website: "https://3d-maze-game-akis.vercel.app/",
  },
];

export const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Daisy UI / Shadcn",
  "RTK Query",
  "Docker",
  "JavaScript",
  "HTML",
  "CSS",
  "Agile",
  "Wireframing",
];

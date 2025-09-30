import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import tms1 from "../public/screenshots/tms-tickets.png";
import mazeGame1 from "../public/screenshots/3d-maze-game-main.png";
import yuniConnect1 from "../public/screenshots/yuni-connect-home.png";
import AlMumininCentral from "../public/screenshots/Al-Muminin-Central.png";

export const projects = [
  {
    id: 1,
    title: "Quiz App",
    shortDescription:
      "A fun way to put your knowledge to test featuring a typing quiz",
    description: (
      <div className="w-full text-xl font-light whitespace-pre-line">
        <p>Quiz App is a fun way to put your knowledge to test featuring a typing quiz. Can you name all 50 US States? Or all gen 1 Pokémon? ...and more!</p>
         <h2 className="text-2xl font-[850] mt-10 mb-3">From Static Site to Fullstack Application</h2>
        {`Originally this application was static, only using frontend technologies. Then, I self-taught myself TypeScript and MySQL, choosing this project as a learning playground, realizing the potential with paginated leaderboards and user accounts. To meet industry standards and challenge myself, I hosted the MySQL database on AWS EC2. Tackling the AWS ecosystem proved to be a significant challenge, involving many configurations but ultimately, incredibly rewarding and a key learning experience.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">User flow & Authentication</h2>
        {`Upon entering the homepage, the user is shown all the available quizzes. If they are not signed in (checked via a function from Clerk Authentication), a modal appears displaying the benefits such as participating in the leaderboards; with an option to play as a guest to make it easy to play a quiz. The Sign In / Sign Up form is conveniently provided by Clerk's prebuilt components, and once the sign up or sign in is complete, the user is taken to the relevant URL.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Gameplay & Score Submission</h2>
        {`A quiz ends when the timer runs out, the user ends the game, or the maximum score is reached.  On the results screen, the user can see what they got correct and what they missed. If the user is logged in, the score is automatically submitted if their score is higher than their top score which is checked in the controller of my Express application by fist sending an SQL command to check if the user's new score is higher than the top score which if this passes, the database is queried again to update the score.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Leaderboards & Paginaion</h2>
        {`The leaderboards will display the initial page of results retrieved from the database. Users can navigate through subsequent pages using numbered links or a 'show more' button. Selecting 'show more' triggers an API request for the next set of results, which are then appended to the current view, and the pagination state updates dynamically, for a smooth browsing experience.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Tech Stack & Hosting</h2>
        {`Behind the scenes, the backend is organized with a clear separation of concerns: Express routes handle incoming requests, while controllers manage logic like score validation and database interactions. Middleware is used to enforce authentication where needed. The API, hosted on Railway, is designed to support efficient pagination and score submission, with SQL queries tailored to update user data only when necessary. The backend is written in TypeScript and connects to a MySQL database hosted on AWS EC2. The frontend, built with React and deployed on Vercel, communicates with the backend via RESTful endpoints.`}
      </div>
    ),
    tools: [
      "TypeScript",
      "MySQL",
      "Express",
      "AWS",
      "React.js",
      "Tailwind",
      "Vite",
      "Clerk Auth",
      "React Router",
      "Lucide Icons",
    ],
    image: quizApp1,
    gitHub: "https://github.com/Akis-Hajittofi/quiz-app",
    website: "https://quizapp.phanakishajittofi.dev/",
  },
  {
    id: 2,
    title: "Al Muminin Central",
    shortDescription:
      "Site for the youth project in my local community, with custom event booking system",
    description: (
      <div className="w-full text-xl font-light whitespace-pre-line">
        <p>A website designed to facilitate community engagement and ticketing for the youth project in my local area.</p>
         <h2 className="text-2xl font-[850] mt-10 mb-3">Origins</h2>
        {`Content coming soon.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Stripe integration</h2>
        {`Content coming soon.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Firebase integration</h2>
        {`Content coming soon.`}
        {/* <h2 className="text-2xl font-[850] mt-10 mb-3">Leaderboards & Paginaion</h2>
        {`The leaderboards will display the initial page of results retrieved from the database. Users can navigate through subsequent pages using numbered links or a 'show more' button. Selecting 'show more' triggers an API request for the next set of results, which are then appended to the current view, and the pagination state updates dynamically, for a smooth browsing experience.`}
        <h2 className="text-2xl font-[850] mt-10 mb-3">Tech Stack & Hosting</h2>
        {`Behind the scenes, the backend is organized with a clear separation of concerns: Express routes handle incoming requests, while controllers manage logic like score validation and database interactions. Middleware is used to enforce authentication where needed. The API, hosted on Railway, is designed to support efficient pagination and score submission, with SQL queries tailored to update user data only when necessary. The backend is written in TypeScript and connects to a MySQL database hosted on AWS EC2. The frontend, built with React and deployed on Vercel, communicates with the backend via RESTful endpoints.`} */}
      </div>
    ),
    tools: [
      "Firebase Firestore/storage/auth",
      "Stripe",
      "Vercel serverless API",
      "TypeScript",
      "React.js",
      "Tailwind",
      "Vite",
    ],
    image: AlMumininCentral,
    website: "https://www.almuminincentral.com",
  },
  {
    id: 3,
    title: "Ticket Management System",
    shortDescription:
      "A system designed to efficiently handle support ticket requests within an organization. Built in Next JS.",
    tools: ["Next.js", "Shadcn UI", "Radix UI", "Tailwind", "Lucide Icons"],
    description: `This project started from aiming to on develop something that is widely used across companies. The application is a system designed to efficiently handle support ticket requests within an organisation. Furthermore, I realised that I must start learning how to properly use component UI libraries. I chose Shadcn UI because of it's excellent integration with Tailwind CSS and its simple ready-to-use setup in my code.`,
    image: tms1,
    gitHub: "https://github.com/Akis-Hajittofi/ticket-management-system",
    website: "https://tms.phanakishajittofi.dev/tickets",
  },
  {
    id: 4,
    title: "Yuni Connect",
    shortDescription:
      "Recruitment platform connecting students to employers. Agile collaboration with backend engineers (FastAPI/Postgres)",
    description: (
      <div className="w-full text-xl font-light whitespace-pre-line">
        {`As a frontend developer on a four-person agile team, I played a key role in building Yuni Connect, a recruitment platform aimed at empowering university graduates with their job search. The idea behind this platform is to solve the common problem that graduates face: Uncertainty upon graduation or even whilst in studies, with what's the best steps to take and how to prepare well. Collaborating with the backend team that's using Python and Postgres has enabled me to deepen my understanding of data-fetching and caching methodologies, through the use of RTK Query, as well as broader data structures.

One of my key contributions is an intuitive drag & drop board for easy application tracking, making use of the React DnD library. This itself proved very challenging because I faced a lot of problems with updating the state correctly and synchronising the changes in the database. This happened because the items had positional index which was used to send to the database to save the order of the items. The algorithm was incorrectly updating the positional index, which on page reload will have a different order. Thus, the solution was to fix the for loop which was responsible for updating the positional index.`}
        <iframe
          className="rounded-2xl my-10 mx-auto w-full"
          height="350"
          src="https://www.youtube.com/embed/chsXoTM2AHw?si=rG-9uYxvqzDqxP8D"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {`Soon AI features will be worked on where students can prepare for interviews and a career path analyzer to provide more clarity in what paths are available for their degree and to learn about other paths if they wish to change. The combination of these services makes Yuni Connect more than just a job listing site.`}
      </div>
    ),
    tools: [
      "React.js",
      "React Beautiful DnD",
      "Docker",
      "RTK Query",
      "Daisy UI",
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
    id: 5,
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
      "Redux",
      "React Three/Fiber",
      "React Three/Rapier",
      "React Three/Drei",
      "React Spring/Three",
      "Zustand",
    ],
    image: mazeGame1,
    gitHub: "https://github.com/Akis-Hajittofi/3d-maze-game",
    website: "https://3dmazegame.phanakishajittofi.dev/",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "AWS",
  "Express",
  "Tailwind",
  "Daisy UI / Shadcn",
  "Redux",
  "Docker",
  "HTML",
  "CSS",
  "Agile",
  "Wireframing",
];

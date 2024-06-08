import Image from "next/image";
import profilePic from "../public/me.jpg";
import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import tms1 from "../public/screenshots/tms-tickets.png";
import mazeGame1 from "../public/screenshots/3d-maze-game-main.png";
import Card from "./Card";
import Divider from "./Divider";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Quiz App",
      shortDescription:
        "A fun way to put your knowledge to test featuring a typing quiz",
      image: quizApp1,
      gitHub: "https://github.com/Akis-Hajittofi/quiz-app",
      website: "https://quiz-app-akis.netlify.app",
    },
    {
      id: 2,
      title: "Ticket Management System",
      shortDescription:
        "A system designed to efficiently handle support ticket requests within an organization. Built in Next JS.",
      image: tms1,
      gitHub: "https://github.com/Akis-Hajittofi/ticket-management-system",
      website: "https://ticket-ms.vercel.app/tickets",
    },
    {
      id: 3,
      title: "Yuni Connect",
      shortDescription:
        "Recruitment platform connecting students to employers.",
    },
    {
      id: 5,
      title: "3d Maze Game",
      shortDescription:
        "Maze game with 3d graphics made using React Three Fiber, featuring enemies, shooting, scores etc.",
      image: mazeGame1,
      website: "https://3d-maze-game.netlify.app/",
    },
  ];
  return (
    <main className="flex flex-col justify-between w-full sm:w-3/5 mx-auto">
      <div className="w-full bg-base-100 text-base-content">
        <div className="w-full gap-5 flex flex-wrap justify-start px-14 py-40">
          <div className="w-36 h-36">
            <Image
              src={profilePic}
              alt={"Picture of me"}
              className="rounded-full"
            />
          </div>
          <div className="">
            <h1 className="text-7xl sm:text-8xl  font-[1000]">
              {`Hello, I'm Phanakis`}
              <span className="text-primary">.</span>
            </h1>
            <p className="text-5xl font-thin mb-4">
              I'm a{" "}
              <span className="text-primary font-extrabold ">
                Full Stack Developer
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-light w-full sm:p-0 sm:max-w-[1000px] sm:min-w-[600px]">
              I turn complexity into simplicity, harnessing the power of elegant
              design in React & Tailwind. I have experience from working in a
              variety of projects. Also graduated from a Web-Dev bootcamp.{" "}
            </p>
            <button className="btn btn-wide btn-primary text-lg my-4">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-base-200 flex flex-col items-start text-base-content p-4">
        <Divider text="Projects" />

        <div className="flex flex-wrap gap-4">
          {projects.map((project) => (
            <Card
              title={project.title}
              shortDecription={project.shortDescription}
              image={project.image}
              gitHub={project.gitHub}
              website={project.website}
              key={project.id}
            />
          ))}
        </div>
        {/* <Divider text="Contact" /> */}
        <h2 className="text-7xl sm:text-8xl font-[1000] self-center m-8">
          Contact<span className="text-primary">.</span>
        </h2>
      </div>
    </main>
  );
}






















































































































































































































































































































































































































































































































































































































































































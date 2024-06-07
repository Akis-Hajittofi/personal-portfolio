import Image from "next/image";
import profilePic from "../public/me.jpg";
import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import tms1 from "../public/screenshots/tms-tickets.png";
import Card from "./Card";

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
      website: "https://ticket-ms.vercel.app",
    },
    {
      id: 3,
      title: "Yuni Connect",
      shortDescription:
        "A recruitment platform connecting students to employers.",
      gitHub: "",
      website: "",
    },
  ];
  return (
    <main className="flex flex-col justify-between mx-auto">
      <div className="w-full p-5 flex flex-col justify-center items-center bg-base-200">
        <div className="w-full sm:w-1/2 text-center flex flex-col items-center justify-center p-6">
          <div className="w-40 h-40 mb-3">
            <Image
              src={profilePic}
              alt={"Picture of me"}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col w-full items-center space-y-3">
            <p className="text-4xl font-sans font-extrabold ">
              Hello World! I am Phanakis Hajittofi
            </p>
            <p className="text-lg w-full sm:p-0 sm:max-w-[550px] sm:min-w-[600px]">
              I turn complexity into simplicity, harnessing the power elegant
              design in React & Tailwind. I have experience from working in a
              variety of projects. Also graduated from a Web-Dev bootcamp.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-base-100 flex flex-col items-center text-base-content p-5">
        <h2 className="text-xl font-semibold p-4">PORTFOLIO</h2>
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
      </div>
    </main>
  );
}

















































































































































































































































































































































































































































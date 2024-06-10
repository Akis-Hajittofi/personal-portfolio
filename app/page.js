import Image from "next/image";
import profilePic from "../public/me.jpg";
import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import tms1 from "../public/screenshots/tms-tickets.png";
import mazeGame1 from "../public/screenshots/3d-maze-game-main.png";
import yuniConnect1 from "../public/screenshots/yuni-connect-home.png";
import Card from "./Card";
import Divider from "./Divider";
import { Mail } from "lucide-react";
import Link from "next/link";

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
      image: yuniConnect1,
    },
    {
      id: 4,
      title: "3d Maze Game",
      shortDescription:
        "Maze game with 3d graphics made using React Three Fiber, featuring enemies, shooting, scores etc.",
      image: mazeGame1,
      website: "https://3d-maze-game.netlify.app/",
    },
  ];
  const skills = [
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
  return (
    <main className="flex flex-col w-full sm:w-4/5 md:w-11/12 lg:w-[1000px] mx-auto px-6 space-y-16">
      <div className="w-full text-base-content py-40 pb-0 sm:pb-16 ">
        <div className="w-full gap-5 flex flex-wrap justify-start ">
          <div className="w-36 h-36">
            <Image
              src={profilePic}
              alt={"Picture of me"}
              className="rounded-full"
            />
          </div>
          <div className="">
            <h1 className="text-7xl lg:text-8xl font-[1000]">
              {`Hello, I'm Phanakis`}
              <span className="text-primary">.</span>
            </h1>
            <p className="text-5xl font-thin mb-4">
              I'm a{" "}
              <span className="text-primary font-extrabold ">
                Frontend Developer
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-light w-fit lg:p-0 lg:max-w-[800px]">
            I turn complexity into simplicity, harnessing the power of elegant
            design in React & Tailwind. I have experience from working in a
            variety of projects. Also graduated from a Web-Dev bootcamp.
          </p>
          <Link href="#contact">
            <button className="btn btn-wide btn-primary text-lg my-4">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <div className="space-y-32">
        <div
          id="about"
          className="scroll-mt-32 text-base-content w-full space-y-2"
        >
          <Divider text="About" />
          <div className="flex flex-wrap w-full text-xl font-light space-y-7 sm:space-y-0">
            <div className="space-y-6 md:w-8/12">
              <p>
                I'm Phanakis, also known as <em>Akis</em>. I'm passionate about
                creating intuitive and engaging interfaces that simplify complex
                tasks. I leverage the power of React and Tailwind CSS to bring
                designs to life, ensuring they are both visually appealing and
                user-friendly.
              </p>
              <p>
                After completing a comprehensive bootcamp a year ago, I have
                recently re-immersed myself in web development, actively honing
                my skills and expanding my knowledge. In the past two months, I
                have gained valuable experience, particularly in RTK Query, and
                going in-depth with all the tools that React offers. I'm eager
                to kickstart my career in frontend development and am actively
                seeking opportunities to collaborate with a talented team.
              </p>
            </div>
            <div className="md:w-4/12 md:pl-5">
              <h2 className="text-2xl font-[850] mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <div
                    className="font-semibold w-fit bg-neutral text-neutral-content rounded-full px-2 "
                    key={index}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="projects" className="scroll-mt-32 text-base-content w-fit">
          <Divider text="Projects" />
          <div className="flex flex-wrap gap-8 py-2 justify-center">
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

        <div
          className="flex flex-col text-2xl w-full self-center items-center space-y-5 text-center font-light"
          id="contact"
        >
          <h2 className="text-7xl lg:text-8xl font-[1000] w-full text-center">
            Contact<span className="text-primary">.</span>
          </h2>
          <p className="sm:w-2/3">
            Seeking a new opportunity. Send me an email and let's connect! You
            can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/phanakis-hajittofi/"
              target="_blank"
            >
              <span className="text-primary">LinkedIn</span>
            </Link>
            .
          </p>

          <Link href="mailto:phanakishajittofi@gmail.com">
            <span className="inline-flex items-center font-semibold hover:text-primary hover:brightness-100 brightness-125">
              <Mail className="mr-3" size={26} />
              <span>phanakishajittofi@gmail.com</span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}






















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































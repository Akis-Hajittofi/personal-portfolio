/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import profilePic from "../public/me.jpg";
import Card from "./Card";
import Divider from "./Divider";
import { Mail } from "lucide-react";
import Link from "next/link";
import { projects, skills } from "./data";
import RevealAnimation from "./RevealAnimation";
import { useEffect, useState } from "react";

export default function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const [homeInfo, setHomeInfo] = useState(null);

  useEffect(() => {
    const fetchHomeInfo = async () => {
      try {
        const response = await fetch(`${api}/home`);
        if (!response.ok) {
          throw new Error("Failed to home info");
        }
        const data = await response.json();
        setHomeInfo(data);
      } catch (error) {
        console.error("Error fetching home info:", error);
      }
    };
    fetchHomeInfo();
  }, []);

  if (!homeInfo) {
    return <div>Data is loading...</div>;
  }

  return (
    <main className=" flex flex-col w-full h-full lg:w-[1000px] space-y-16">
      <div className="w-full text-base-content pt-12 pb-0 sm:pb-16 ">
        <div className="w-full gap-5 flex flex-wrap justify-start ">
          <RevealAnimation>
            <div className="w-36 h-36">
              <Image
                src={profilePic}
                alt={"Picture of me"}
                className="rounded-full"
              />
            </div>
          </RevealAnimation>

          <div className="">
            <RevealAnimation>
              <h1 className="text-7xl lg:text-8xl font-[1000]">
                {`Hello, I'm Phanakis`}
                <span className="text-primary">.</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation>
              <p className="text-5xl font-thin mb-4">
                I'm a{" "}
                <span className="text-primary font-extrabold ">
                  Full Stack Developer
                </span>
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="flex flex-col">
          <RevealAnimation>
            <p className="text-2xl font-light w-fit lg:p-0 lg:max-w-[800px]">
              {homeInfo.bannerDescription}
            </p>
          </RevealAnimation>

          <RevealAnimation>
            {" "}
            <Link href="#contact">
              <button className="btn btn-wide btn-primary text-lg my-4">
                Contact Me
              </button>
            </Link>
          </RevealAnimation>
        </div>
      </div>
      <div className="space-y-32">
        <div
          id="about"
          className="scroll-mt-32 text-base-content w-full space-y-2"
        >
          <Divider text="About" />
          <div className="flex flex-wrap w-full text-xl font-light space-y-7 sm:space-y-0">
            <div className="md:w-8/12">
              <RevealAnimation>
                <div className=" flex flex-col space-y-7">
                  {homeInfo?.aboutInfo.split("\n\n").map((para, index) => (
                    <RevealAnimation key={index}>
                      <p>{para}</p>
                    </RevealAnimation>
                  ))}
                </div>
              </RevealAnimation>
            </div>

            <div className="md:w-4/12 md:pl-5">
              <RevealAnimation>
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
              </RevealAnimation>
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
                techstack={project.tools}
                key={project.id}
              />
            ))}
          </div>
        </div>

        <div
          className="flex flex-col h-fit pb-14 text-2xl w-full items-center space-y-5 text-center font-light"
          id="contact"
        >
          <RevealAnimation>
            <h2 className="text-7xl lg:text-8xl font-[1000] w-full text-center">
              Contact<span className="text-primary">.</span>
            </h2>
          </RevealAnimation>
          <div className="sm:w-2/3">
            <RevealAnimation>
              <p className="">
                Seeking a new opportunity. Send me an email and let's connect!
                You can also find me on{" "}
                <Link
                  href="https://www.linkedin.com/in/phanakis-hajittofi/"
                  target="_blank"
                >
                  <span className="text-primary">LinkedIn</span>
                </Link>
                .
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation>
            <Link href="mailto:phanakishajittofi@gmail.com">
              <span className="text-xl sm:text-2xl inline-flex items-center font-semibold hover:text-primary hover:brightness-100 brightness-125">
                <Mail className="mr-2" size={26} />
                <span>phanakishajittofi@gmail.com</span>
              </span>
            </Link>
          </RevealAnimation>
        </div>
      </div>
    </main>
  );
}








































































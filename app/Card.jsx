import { ChevronRight, Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RevealAnimation from "./RevealAnimation";

function Card({ title, shortDecription, image, gitHub, website, techstack }) {
  return (
    <div className="flex flex-col w-full  md:w-[420px] ">
      <div className="">
        <figure className="">
          <Image
            src={image}
            alt={`${title} screenshot`}
            className="object-cover object-top h-72 border border-gray-200 shadow-sm rounded-xl"
          />
        </figure>
      </div>
      <div className="pt-3 space-y-2 items-start text-start">
        <RevealAnimation>
          <div className="flex flex-row mb-1">
            <div className="divider divider-start divider-neutral text-2xl font-[850] m-1 h-fit w-full pr-2 ">
              <span className={`${title.length > 16 && "text-wrap"}`}>
                {title}
              </span>
            </div>
            <div className="flex flex-row space-x-3">
              {gitHub && (
                <Link
                  className="self-center hover:brightness-150"
                  href={gitHub}
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current "
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              )}
              {website && (
                <Link
                  className="self-center hover:brightness-150"
                  href={website}
                  target="_blank"
                >
                  <SquareArrowOutUpRight size={26} className="self-center" />
                </Link>
              )}
            </div>
          </div>

          {techstack.slice(0, 4).map((item, index, arr) => (
            <div
              className="p-0 text-lg font-semibold text-primary inline-flex items-center"
              key={index}
            >
              {item}
              {index !== arr.length - 1 && <>&nbsp;-&nbsp;</>}
            </div>
          ))}
        </RevealAnimation>
        <RevealAnimation>
          <span className="text-xl font-light">
            {shortDecription}
            <Link
              href={`/projects/${title.split(" ").join("-").toLowerCase()}`}
            >
              <span className="p-0 text-xl font-semibold text-primary inline-flex items-center pl-2 border-b-2 border-transparent hover:border-primary hover:cursor-pointer">
                Learn More
                <ChevronRight />
              </span>
            </Link>
          </span>
        </RevealAnimation>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { projects } from "../../data";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

function page({ params }) {
  const [project] = projects.filter(
    (project) =>
      project.title.toLowerCase() ===
      params.project.split("-").join(" ").toLowerCase()
  );
  return (
    <div className="flex flex-col sm:w-4/5 mx-auto text-base-content space-y-20 mb-10 scroll-mt-56">
      <h1 className="text-6xl md:text-7xl font-[1000] w-full text-center">
        {project.title}
        <span className="text-primary">.</span>
      </h1>
      <div className="flex flex-wrap gap-10 md:gap-0 w-full space-y-5 md:space-y-0">
        <div className="md:w-8/12">
          <div className="w-full text-xl font-light whitespace-pre-line">
            {project?.description}
          </div>
        </div>

        <div className="w-full min-w-[300px] md:w-4/12 md:pl-5 space-y-8">
          <div>
            <h2 className="text-2xl font-[850] mb-4 mt-5">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tools?.map((skill, index) => (
                <div
                  className="font-semibold text-xl w-fit bg-neutral text-neutral-content rounded-full px-2 "
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {(project.gitHub || project.website) && (
            <div className="pb-20">
              <h2 className="text-2xl font-[850] mb-4">Links</h2>
              <div className="flex flex-row space-x-3 text-lg">
                {project.gitHub && (
                  <Link href={project.gitHub} target="_blank">
                    <button className="btn btn-secondary w-44 text-lg min-w-40">
                      <svg
                        className="w-6 h-6 fill-current "
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span className="pl-2">Source Code</span>
                    </button>
                  </Link>
                )}
                {project.website && (
                  <Link href={project.website} target="_blank">
                    <button className="btn btn-accent text-lg min-w-40">
                      <SquareArrowOutUpRight
                        size={24}
                        className="self-center"
                      />
                      Live Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;

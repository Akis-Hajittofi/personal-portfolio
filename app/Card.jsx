import Image from "next/image";
import React from "react";
import quizApp1 from "../public/screenshots/Quiz-App-Home.png";
import Link from "next/link";

function Card({ title, shortDecription, image, gitHub, website }) {
  //   const handleClick = (url) => {};
  return (
    <div className="card w-full sm:w-96 shadow-xl sm:hover:shadow-2xl sm:hover:scale-105 transition-all sm:duration-300 hover:cursor-pointer">
      <div className="">
        <figure className="px-7 pt-7">
          <Image
            src={image}
            alt={`${title} screenshot`}
            className="object-cover object-top h-72 rounded-xl"
          />
        </figure>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{shortDecription}</p>
        <div className="card-actions">
          {gitHub && (
            <a href={gitHub} target="_blank">
              <button className="btn btn-neutral">GitHub</button>
            </a>
          )}
          <button className="btn btn-primary">Project Info</button>

          {website && (
            <a href={website} target="_blank">
              <button className="btn btn-secondary">Live Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Card({ title, shortDecription, image, gitHub, website }) {
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
      <div className="py-5 space-y-1 items-start text-start">
        <h2 className="text-2xl font-[850]">{title}</h2>
        <span className="text-xl font-light ">
          {shortDecription}
          <span className="p-0 text-xl font-semibold text-primary inline-flex items-center pl-2 border-b-2 border-transparent hover:border-primary hover:cursor-pointer">
            Learn More
            <ChevronRight />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Card;

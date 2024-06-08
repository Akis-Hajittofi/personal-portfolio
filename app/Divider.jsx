import React from "react";

function Divider({ text }) {
  return (
    <div className="flex flex-row w-full p-4 space-x-8">
      <h2 className="w-fit text-5xl sm:text-6xl font-[1000]">
        {text}
        <span className="text-primary">.</span>
      </h2>
      <div className="divider w-full self-center divider-neutral pr-0 sm:pr-5"></div>
    </div>
  );
}

export default Divider;

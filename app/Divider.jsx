import React from "react";

function Divider({ text }) {
  return (
    <div className="divider w-full divider-start divider-neutral text-5xl sm:text-6xl font-[1000] pb-16">
      <p className="mr-2 ">
        {text}
        <span className="text-primary">.</span>
      </p>
    </div>
  );
}

export default Divider;

import React from "react";
import RevealAnimation from "./RevealAnimation";

function Divider({ text }) {
  return (
    <div className="divider w-full divider-start divider-neutral text-5xl sm:text-6xl font-[1000] pb-14">
      <div className="mr-2 ">
        <RevealAnimation>
          {text}
          <span className="text-primary">.</span>
        </RevealAnimation>
      </div>
    </div>
  );
}

export default Divider;

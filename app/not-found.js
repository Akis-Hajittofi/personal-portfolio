import React from "react";

function NotFound() {
  return (
    <div className="w-full">
      <h1 className="text-6xl sm:text-7xl font-[1000] text-center mb-2">
        404 Not Found<span className="text-primary">.</span>
      </h1>
      <p className="text-2xl font-light text-center">
        The page you were looking for could not be found
      </p>
    </div>
  );
}

export default NotFound;

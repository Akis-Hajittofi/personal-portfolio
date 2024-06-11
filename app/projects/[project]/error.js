"use client";
import Link from "next/link";
import React from "react";

function error() {
  return (
    <div className="w-full">
      <h1 className="text-6xl sm:text-7xl font-[1000] text-center mb-2">
        Project Not Found<span className="text-primary">.</span>
      </h1>
      <p className="text-2xl font-light text-center">
        Please check the URL or visit{" "}
        <span className="text-primary">
          <Link href="/#projects">projects</Link>
        </span>
        . Still no success? Try Checking my{" "}
        <span className="text-primary">
          <Link href="https://github.com/Akis-Hajittofi/">GitHub</Link>
        </span>{" "}
        to see if it is available there.
      </p>
    </div>
  );
}

export default error;

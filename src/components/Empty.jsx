import React from "react";
import imgSrc from "../assets/no-projects.png";

export default function Empty({ handleOpenNewProject }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="h-20 w-20 m-8 " src={imgSrc} alt="image" />
      <h1 className="text-xl font-bold text-amber-950 mb-6">
        No Project Selected
      </h1>
      <h2 className="text-gray-500 mb-6 font-medium ">
        Select a Project or get started with a new one
      </h2>
      <button
        className="text-gray-400 h-12 w-48 rounded-md mt-2  bg-amber-950 hover:bg-amber-900"
        onClick={handleOpenNewProject}
      >
        Create a new Project
      </button>
    </div>
  );
}

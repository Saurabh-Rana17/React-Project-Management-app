import React, { useState } from "react";

export default function Sidebar({
  onOpenNewForm,
  projectArray = [],
  handleSelectedProject,
  selected,
}) {
  return (
    <>
      <div className="w-64 flex-shrink">
        <div
          id="docs-sidebar"
          className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60]  bg-black border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  rounded-tr-xl w-64 flex-auto mt-6   "
        >
          <p
            className=" px-6 flex-none text-xl font-semibold dark:text-white text-white uppercase m-3"
            aria-label="Brand"
          >
            your projects
          </p>
          <button
            className="bg-slate-700 w-36 h-10 text-gray-400 m-4 rounded-md hover:bg-slate-600 hover:text-slate-200 mb-8 "
            onClick={onOpenNewForm}
          >
            + Add Project
          </button>

          <ul className="space-y-1.5">
            {projectArray.map((item) => {
              return (
                <li key={item.title}>
                  <button
                    id={item.title}
                    onClick={() => handleSelectedProject(item.title)}
                    className={`flex mx-4 box-border w-52 items-center gap-x-3.5 py-2 px-2.5  text-gray-400 rounded-lg hover:text-gray-200 font-medium text-base ${
                      selected == item.title
                        ? "bg-slate-800 text-slate-200"
                        : ""
                    } `}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

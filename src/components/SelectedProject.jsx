import React, { useRef, useState } from "react";
import moment from "moment";

import ToDo from "./ToDo";

export default function SelectedProject({
  selected,
  projectArray = [],
  setIsEmpty,
  isEmpty,
}) {
  function handleDelete() {
    let index = 0;
    for (let i = 0; i < projectArray.length; i++) {
      if (projectArray[i].title == selected) {
        index = i;
        break;
      }
    }
    let spliced = projectArray.splice(index, 1);
    setIsEmpty(true);
  }

  return (
    <div>
      {projectArray.map((item) => {
        if (item.title == selected) {
          let date = moment(item.dueDate).format("MMM Do YY"); // Dec 16th 23

          return (
            <div key={item.title} className="pl-20 w-3/4 ">
              <button
                onClick={handleDelete}
                className="float-right bg-red-600 h-9 p-2 rounded-xl text-white"
              >
                Delete
              </button>
              <h1 className="text-3xl font-bold mb-4 text-gray-800 ">
                {item.title}
              </h1>
              <p className="mb-4 text-gray-500 font-medium">{date}</p>
              <pre>
                <p className="mb-4 text-gray-800">{item.description}</p>
              </pre>
              <hr className="h-0.5 bg-gray-400" />
            </div>
          );
        }
      })}
      {!isEmpty && <ToDo projectArray={projectArray} selected={selected} />}
    </div>
  );
}

import React from "react";

let taskList = [];
export default function ToDo() {
  return (
    <div className="pl-20 w-3/4">
      <p className="my-6 text-3xl font-bold text-slate-900">Tasks</p>
      <input
        className="mr-4 mb-6 bg-gray-300 h-9 w-72 rounded-md p-2  focus:border-4 focus:border-blue-600 focus:border-solid focus:outline-none"
        type="text"
      />
      <button>Add Task</button>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur</li>
        <li> aliquam omnis beatae quo ea!</li>
      </ul>
    </div>
  );
}

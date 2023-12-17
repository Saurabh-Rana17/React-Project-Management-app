import React, { useRef, useState } from "react";

export default function ToDo() {
  const [list, setList] = useState(["Lorem ipsum", "aliquam omnis"]);
  let task = useRef("");
  let newTask;
  function handleAddTask() {
    newTask = task.current.value;
    setList((prev) => {
      let tempList = [...prev, newTask];
      return tempList;
    });
    task.current.value = "";
  }
  console.log(list);

  return (
    <div className="pl-20 w-3/4">
      <p className="my-6 text-3xl font-bold text-slate-900">Tasks</p>
      <input
        ref={task}
        className="mr-4 mb-6 bg-gray-300 h-9 w-72 rounded-md p-2  focus:border-4 focus:border-blue-600 focus:border-solid focus:outline-none"
        type="text"
      />
      <button
        onClick={handleAddTask}
        className=" bg-slate-800 hover:bg-slate-400 hover:text-black h-9 p-2 rounded-xl text-white"
      >
        Add Task
      </button>
      <ul>
        {list.map((item) => {
          return (
            <li
              className="bg-slate-400 h-10 p-2 m-2 rounded-lg text-slate-100"
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

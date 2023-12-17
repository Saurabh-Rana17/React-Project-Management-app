import React, { useRef, useState } from "react";

export default function ToDo({ projectArray = [], selected }) {
  const [updated, setUpdated] = useState(false);
  if (updated) {
    setUpdated(false);
  }
  let task = useRef("");
  let newTask;
  function handleAddTask() {
    newTask = task.current.value;
    for (let i = 0; i < projectArray.length; i++) {
      if (projectArray[i].title == selected) {
        projectArray[i].taskList.push(newTask);
        setUpdated(true);
        break;
      }
    }
    task.current.value = "";
  }

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

      {projectArray.map((item) => {
        if (item.title == selected) {
          return (
            <ul key={Math.random()}>
              {item.taskList.map((task) => {
                return <li key={task}>{task} </li>;
              })}
            </ul>
          );
          // <li key={item.title}>{item.taskList[0]} </li>;
        }
      })}
    </div>
  );
}

// <li
//   className="bg-slate-400 h-10 p-2 m-2 rounded-lg text-slate-100"
//   key={item}
// >
//   {item}
// </li>

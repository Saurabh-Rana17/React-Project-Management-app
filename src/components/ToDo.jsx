import React, { useRef, useState } from "react";

export default function ToDo({ projectArray, selected }) {
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
  function handleClear(task) {
    //
    let index = -1;
    for (let i = 0; i < projectArray.length; i++) {
      if (projectArray[i].title == selected) {
        for (let j = 0; j < projectArray[i].taskList.length; j++) {
          index += 1;
          if (projectArray[i].taskList[j] == task) {
            let spliced = projectArray[i].taskList.splice(j, 1);
            setUpdated(true);
            break;
          }
        }
      }
    }
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
            <>
              {item.taskList.length == 0 ? (
                <p className="text-slate-500">No task added yet</p>
              ) : null}
              <ul key={Math.random()}>
                {item.taskList.map((task) => {
                  return (
                    <li
                      className="bg-slate-300 text-black h-10 p-2  m-0 rounded-sm text-lg "
                      key={task}
                    >
                      {task}
                      <button
                        onClick={() => handleClear(task)}
                        className="float-right mr-4 hover:text-red-500"
                      >
                        Clear
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        }
      })}
    </div>
  );
}

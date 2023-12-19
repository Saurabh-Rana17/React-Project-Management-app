import React, { useRef } from "react";
import Modal from "./Modal";

const NewProjectForm = function ({ setOpenNewForm, setIsEmpty, projectArray }) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();
  let dialog = useRef();

  function handleSave() {
    title = title.current.value;
    description = description.current.value;
    dueDate = dueDate.current.value;

    if (
      title.trim() == "" ||
      description.trim() == "" ||
      dueDate.trim() == ""
    ) {
      dialog.current.open();
      return;
    }

    projectArray.push({
      title,
      description,
      dueDate,
      taskList: [],
    });
    setIsEmpty(true);

    setOpenNewForm(false);
    console.log(projectArray);
  }

  function handleCancel() {
    setOpenNewForm(false);
    setIsEmpty(true);
  }

  return (
    <>
      <Modal ref={dialog} handleCancel={handleCancel} btncaption="Close">
        <h1 className="bg-red-600 text-white text-2xl p-2 text-center">
          Invalid value
        </h1>
        <span className="text-slate-700 m-6">
          <p className="m-6">Oops ... look like you forget to enter value.</p>
          <p className="m-6">
            Please make sure you provide valid value for each input field.
          </p>
        </span>
        <hr className="h-0.5 bg-red-400" />
      </Modal>
      <div className="pl-20 w-3/4">
        <div className="h-8">
          <button
            onClick={handleSave}
            className="float-right bg-black text-white h-10 w-20 rounded-md ml-4 hover:bg-green-600 hover:text-white hover:outline-green-800"
          >
            Save
          </button>
          <button
            className="float-right h-10 w-20 font-medium hover:text-red-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        <p className=" uppercase mt-10 mb-1 font-semibold text-slate-600">
          Title
        </p>
        <input
          ref={title}
          required
          className="bg-gray-300 text-slate-700 w-full h-10 rounded-md focus:outline-none focus:border-b-4 focus:text-slate-700 p-1 focus:border-slate-700 border-b-slate-400 border-b-4"
          type="text"
          name=""
          id=""
        />
        <p className="uppercase text-slate-600 font-semibold mt-6 mb-1">
          Description
        </p>
        <textarea
          required
          ref={description}
          className="bg-gray-300 text-slate-700 w-full rounded-md focus:border-b-4 focus:outline-none p-1 focus:border-slate-700 border-b-slate-400 border-b-4"
          name=""
          id=""
          rows="4"
        ></textarea>
        <p className="uppercase text-slate-600 font-semibold mt-4">Due Date</p>
        <input
          required
          ref={dueDate}
          className="bg-gray-300 mt-1 w-full h-10 rounded-md p-2 text-slate-700 
        focus:outline-none focus:border-b-4 focus:border-slate-700 border-b-slate-400 border-b-4"
          type="date"
          name=""
          id=""
        />
      </div>
    </>
  );
};

export default NewProjectForm;

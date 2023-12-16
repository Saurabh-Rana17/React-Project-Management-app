import React from "react";
import Empty from "./Empty";
import NewProjectForm from "./NewProjectForm";

export default function Mainsection({
  handleOpenNewProject,
  isEmpty,
  openNewForm,
}) {
  return (
    <div className=" flex-auto mt-16  ">
      {isEmpty && <Empty handleOpenNewProject={handleOpenNewProject} />}
      {openNewForm && <NewProjectForm />}
    </div>
  );
}

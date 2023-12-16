import React from "react";
import Empty from "./Empty";
import NewProjectForm from "./NewProjectForm";

const Mainsection = function ({
  handleOpenNewProject,
  isEmpty,
  openNewForm,
  setOpenNewForm,
  setIsEmpty,
  projectArray,
}) {
  return (
    <div className=" flex-auto mt-16  ">
      {isEmpty && <Empty handleOpenNewProject={handleOpenNewProject} />}
      {openNewForm && (
        <NewProjectForm
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
          projectArray={projectArray}
        />
      )}
    </div>
  );
};

export default Mainsection;

import React from "react";
import Empty from "./Empty";
import NewProjectForm from "./NewProjectForm";
import SelectedProject from "./SelectedProject";

const Mainsection = function ({
  handleOpenNewProject,
  isEmpty,
  openNewForm,
  setOpenNewForm,
  setIsEmpty,
  projectArray,
  selected,
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
      {selected && (
        <SelectedProject
          setIsEmpty={setIsEmpty}
          selected={selected}
          projectArray={projectArray}
        />
      )}
    </div>
  );
};

export default Mainsection;

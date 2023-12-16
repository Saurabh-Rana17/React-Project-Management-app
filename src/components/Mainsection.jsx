import React, { forwardRef } from "react";
import Empty from "./Empty";
import NewProjectForm from "./NewProjectForm";

const Mainsection = forwardRef(function (
  {
    handleOpenNewProject,
    isEmpty,
    openNewForm,
    setOpenNewForm,
    setIsEmpty,
    handleSave,
  },
  ref
) {
  return (
    <div className=" flex-auto mt-16  ">
      {isEmpty && <Empty handleOpenNewProject={handleOpenNewProject} />}
      {openNewForm && (
        <NewProjectForm
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
          handleSave={handleSave}
          ref={ref}
        />
      )}
    </div>
  );
});

export default Mainsection;

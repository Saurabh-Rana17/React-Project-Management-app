import React, { forwardRef } from "react";
import Empty from "./Empty";
import NewProjectForm from "./NewProjectForm";

const Mainsection = forwardRef(function (
  { handleOpenNewProject, isEmpty, openNewForm, setOpenNewForm, setIsEmpty },
  ref
) {
  return (
    <div className=" flex-auto mt-16  ">
      {isEmpty && <Empty handleOpenNewProject={handleOpenNewProject} />}
      {openNewForm && (
        <NewProjectForm
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
        />
      )}
    </div>
  );
});

export default Mainsection;

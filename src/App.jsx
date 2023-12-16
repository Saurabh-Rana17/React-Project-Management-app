import { useState } from "react";
import Mainsection from "./components/Mainsection";
import Sidebar from "./components/Sidebar";

const projectArray = [];

function App() {
  const [openNewForm, setOpenNewForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  const [selected, setSelected] = useState("");
  function handleSelectedProject(title) {
    setSelected(title);
    setIsEmpty(false);
  }

  function handleOpenNewProject() {
    setOpenNewForm(true);
    setIsEmpty(false);
  }

  return (
    <>
      <div className="flex flex-row">
        <Sidebar
          onOpenNewForm={handleOpenNewProject}
          projectArray={projectArray}
          setIsEmpty={setIsEmpty}
          handleSelectedProject={handleSelectedProject}
        />
        <Mainsection
          handleOpenNewProject={handleOpenNewProject}
          isEmpty={isEmpty}
          openNewForm={openNewForm}
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
          projectArray={projectArray}
        />
      </div>
    </>
  );
}

export default App;

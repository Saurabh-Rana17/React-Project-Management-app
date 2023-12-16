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
    setOpenNewForm(false);
  }

  function handleOpenNewProject() {
    setOpenNewForm(true);
    setIsEmpty(false);
    setSelected("");
  }

  return (
    <>
      <div className="flex flex-row">
        <Sidebar
          onOpenNewForm={handleOpenNewProject}
          projectArray={projectArray}
          setIsEmpty={setIsEmpty}
          handleSelectedProject={handleSelectedProject}
          selected={selected}
        />
        <Mainsection
          handleOpenNewProject={handleOpenNewProject}
          isEmpty={isEmpty}
          openNewForm={openNewForm}
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
          projectArray={projectArray}
          selected={selected}
        />
      </div>
    </>
  );
}

export default App;

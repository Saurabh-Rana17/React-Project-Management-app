import { useState } from "react";
import Mainsection from "./components/Mainsection";
import Sidebar from "./components/Sidebar";

function App() {
  const [openNewForm, setOpenNewForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  function handleOpenNewProject() {
    setOpenNewForm(true);
    setIsEmpty(false);
  }

  return (
    <>
      <div className="flex flex-row">
        <Sidebar onOpenNewForm={handleOpenNewProject} />
        <Mainsection
          handleOpenNewProject={handleOpenNewProject}
          isEmpty={isEmpty}
          openNewForm={openNewForm}
        />
      </div>
    </>
  );
}

export default App;

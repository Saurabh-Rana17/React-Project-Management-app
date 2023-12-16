import { useRef, useState } from "react";
import Mainsection from "./components/Mainsection";
import Sidebar from "./components/Sidebar";

const projectArray = [];

function App() {
  const [openNewForm, setOpenNewForm] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  // let title = useRef("");
  // let description = useRef("");
  // let dueDate = useRef("");
  // let ref = {
  //   title,
  //   description,
  //   dueDate,
  // };

  // function handleSave() {
  //   title = title.current.value;
  //   description = description.current.value;
  //   dueDate = dueDate.current.value;
  //   projectArray.push({
  //     title,
  //     description,
  //     dueDate,
  //   });
  //   setIsEmpty(true);

  //   console.log(projectArray);
  //   setOpenNewForm(false);
  // }

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
          setOpenNewForm={setOpenNewForm}
          setIsEmpty={setIsEmpty}
          // handleSave={handleSave}
          projectArray={projectArray}
        />
      </div>
    </>
  );
}

export default App;

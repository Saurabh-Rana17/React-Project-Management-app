import Mainsection from "./components/Mainsection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Mainsection />
      </div>
    </>
  );
}

export default App;

import DragActionArea from "./components/DragActionArea";
import Header from "./components/Header";
import PlaygroundArea from "./components/PlaygroundArea";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 gap-2 m-2">
        <Sidebar />
        <DragActionArea />
        <PlaygroundArea />
      </div>
    </>
  );
}

export default App;

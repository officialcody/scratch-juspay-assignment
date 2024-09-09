import { DragDropContext } from "react-beautiful-dnd";
import DragActionArea from "./components/DragActionArea";
import Header from "./components/Header";
import PlaygroundArea from "./components/PlaygroundArea";
import Sidebar from "./components/Sidebar";

function App() {
  const handleOnDragEndActions = () => {};

  const handleOnDragEndSprites = () => {};
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 gap-2 m-2">
        <DragDropContext onDragEnd={handleOnDragEndActions}>
          <Sidebar />
          <DragActionArea />
        </DragDropContext>
        <DragDropContext onDragEnd={handleOnDragEndSprites}>
          <PlaygroundArea />
        </DragDropContext>
      </div>
    </>
  );
}

export default App;

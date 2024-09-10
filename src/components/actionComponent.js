import Repeat from "./controlActions/Repeat";
import Goto from "./motionActions/Goto";
import MoveX from "./motionActions/MoveX";
import MoveY from "./motionActions/MoveY";
import Turn from "./motionActions/Turn";

function getActionComponent(spriteKey, actionId, droppedData, draggable) {
  switch (spriteKey) {
    case "MOVEX":
      return (
        <MoveX
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
          draggable={draggable}
        />
      );
    case "TURN":
      return (
        <Turn
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
          draggable={draggable}
        />
      );
    case "MOVEY":
      return (
        <MoveY
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
          draggable={draggable}
        />
      );
    case "GOTO":
      return (
        <Goto
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
          draggable={draggable}
        />
      );
    case "REPEAT":
      return (
        <Repeat
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
          draggable={draggable}
        />
      );
    default:
      return null;
  }
}
export default getActionComponent;

import Repeat from "./controlActions/Repeat";
import Goto from "./motionActions/Goto";
import MoveX from "./motionActions/MoveX";
import MoveY from "./motionActions/MoveY";
import Turn from "./motionActions/Turn";

function getActionComponent(spriteKey, actionId, droppedData) {
  switch (spriteKey) {
    case "MOVEX":
      return (
        <MoveX
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
        />
      );
    case "TURN":
      return (
        <Turn key={actionId} componentId={actionId} droppedData={droppedData} />
      );
    case "MOVEY":
      return (
        <MoveY
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
        />
      );
    case "GOTO":
      return (
        <Goto key={actionId} componentId={actionId} droppedData={droppedData} />
      );
    case "REPEAT":
      return (
        <Repeat
          key={actionId}
          componentId={actionId}
          droppedData={droppedData}
        />
      );
    default:
      return null;
  }
}
export default getActionComponent;

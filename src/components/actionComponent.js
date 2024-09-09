import Goto from "./motionActions/Goto";
import MoveX from "./motionActions/MoveX";
import MoveY from "./motionActions/MoveY";
import Turn from "./motionActions/Turn";

function getActionComponent(spriteKey, componentId) {
  switch (spriteKey) {
    case "MOVEX":
      return <MoveX componentId={componentId} />;
    case "TURN":
      return <Turn componentId={componentId} />;
    case "MOVEY":
      return <MoveY componentId={componentId} />;
    case "GOTO":
      return <Goto componentId={componentId} />;
    default:
      return null;
  }
}
export default getActionComponent;

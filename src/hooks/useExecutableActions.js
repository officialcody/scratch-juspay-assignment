import { useSelector } from "react-redux";
import { setSpriteAngle } from "../redux/slices/SpriteSlice";
import { useDispatch } from "react-redux";
import { setActions } from "../redux/slices/ActionSlice";
import { REPEAT } from "../utils/app.constants";

const useExecutableActions = () => {
  const sprite = useSelector((store) => store.sprite);
  const action = useSelector((store) => store.action);

  const dispatch = useDispatch();

  const moveXBySteps = (steps) => {
    const currentSprite = document.getElementById(sprite.active);

    let left = currentSprite.offsetLeft;
    currentSprite.style.position = "relative";
    currentSprite.style.left = left + steps + "px";
  };

  const moveYBySteps = (steps) => {
    const activeSprite = document.getElementById(sprite.active);

    let top = activeSprite.offsetTop;
    activeSprite.style.position = "relative";
    activeSprite.style.top = top + steps + "px";
  };

  const turnByDegrees = (angle) => {
    const el = document.getElementById(sprite.active);
    const sprite_angle = sprite.sprites.find((x) => x.id === sprite.active);
    if (sprite_angle) {
      el.style.transform = `rotate(${sprite_angle.angle + angle}deg)`;
      dispatch(setSpriteAngle({ angle: sprite_angle.angle + angle }));
    }
  };

  const gotoPosition = (positionX, positionY) => {
    const activeSprite = document.getElementById(sprite.active);
    activeSprite.style.position = "relative";
    activeSprite.style.left = positionX + "px";
    activeSprite.style.top = positionY + "px";
  };

  const repeatAllActions = async (times) => {
    const actionsWithoutRepeat = action.actions.filter(
      (action) => action.droppedData.actionType !== REPEAT
    );
    let actions = [...actionsWithoutRepeat];
    for (let i = 0; i < times - 1; i++) {
      actions.push(...actionsWithoutRepeat);
    }
    const playButton = document.getElementById("play-btn");

    const createActions = await dispatch(setActions(actions));
    createActions && playButton.click();
  };

  return {
    sprite,
    moveXBySteps,
    moveYBySteps,
    turnByDegrees,
    gotoPosition,
    repeatAllActions,
  };
};

export default useExecutableActions;

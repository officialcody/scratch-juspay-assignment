import { useSelector } from "react-redux";
import { setBoundingRect, setSpriteAngle } from "../redux/slices/SpriteSlice";
import { useDispatch } from "react-redux";
import { GOTO, MOVEX, MOVEY, REPEAT, TURN } from "../utils/app.constants";

const useExecutableAnimations = () => {
  const sprite = useSelector((store) => store.sprite);

  const dispatch = useDispatch();

  const moveXBySteps = (steps, spriteId) => {
    const currentSpriteContainer = document.getElementById(spriteId);
    let left = currentSpriteContainer.offsetLeft;
    currentSpriteContainer.style.left = left + steps + "px";
    const rect = currentSpriteContainer.getBoundingClientRect();
    dispatch(
      setBoundingRect({
        currentSprite: spriteId,
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      })
    );
  };

  const moveYBySteps = (steps, spriteId) => {
    const activeSprite = document.getElementById(spriteId);
    const rect = activeSprite.getBoundingClientRect();

    let top = activeSprite.offsetTop;
    activeSprite.style.top = top + steps + "px";
    dispatch(
      setBoundingRect({
        currentSprite: spriteId,
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      })
    );
  };

  const turnByDegrees = (angle, spriteId) => {
    const el = document.getElementById(spriteId);
    const sprite_angle = sprite.sprites.find((x) => x.id === spriteId);
    if (sprite_angle) {
      el.style.transform = `rotate(${sprite_angle.angle + angle}deg)`;
      dispatch(setSpriteAngle({ angle: sprite_angle.angle + angle }));
    }
  };

  const gotoPosition = (positionX, positionY, spriteId) => {
    const activeSprite = document.getElementById(spriteId);
    const rect = activeSprite.getBoundingClientRect();
    activeSprite.style.left = positionX + "px";
    activeSprite.style.top = positionY + "px";

    dispatch(
      setBoundingRect({
        currentSprite: spriteId,
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
      })
    );
  };

  const getRepeatAnimations = (times) => {
    const currentSprite = sprite.sprites.find((sp) => sp.id === sprite.active);
    const animationsWithoutRepeat = currentSprite.animations.filter(
      (animation) => animation.actionType !== REPEAT
    );

    let animations = [];
    for (let i = 0; i < times - 1; i++) {
      animations = [...animations, ...animationsWithoutRepeat];
    }

    return animations;
  };

  const executeAnimations = (animations, spriteId) => {
    animations.forEach((animation) => {
      switch (animation.actionType) {
        case MOVEX:
          moveXBySteps(animation.inputValue, spriteId);
          break;
        case MOVEY:
          moveYBySteps(animation.inputValue, spriteId);
          break;
        case TURN:
          turnByDegrees(animation.inputValue, spriteId);
          break;
        case GOTO:
          gotoPosition(animation.inputX, animation.inputY, spriteId);
          break;
        case REPEAT: {
          const animations = getRepeatAnimations(animation.inputValue);
          executeAnimations(animations, spriteId);
          break;
        }
        default:
          break;
      }
    });
  };

  return {
    sprite,
    moveXBySteps,
    moveYBySteps,
    turnByDegrees,
    gotoPosition,
    executeAnimations,
  };
};

export default useExecutableAnimations;

import React from "react";
import { useSelector } from "react-redux";
import useExecutableActions from "../hooks/useExecutableActions";
import { GOTO, MOVEX, MOVEY, REPEAT, TURN } from "../utils/app.constants";
import { useDispatch } from "react-redux";
import { setAnimations } from "../redux/slices/SpriteSlice";

const Header = () => {
  const sprite = useSelector((store) => store.sprite);
  const action = useSelector((store) => store.action);
  const dispatch = useDispatch();

  const {
    moveXBySteps,
    moveYBySteps,
    turnByDegrees,
    gotoPosition,
    repeatAllActions,
  } = useExecutableActions();

  const handleOnPlay = (spriteId) => {
    const currentSprite = sprite.sprites.find((sp) => sp.id === spriteId);
    currentSprite.animations.forEach((animation) => {
      if (animation.actionType === MOVEX) {
        moveXBySteps(animation.inputValue, spriteId);
      } else if (animation.actionType === MOVEY) {
        moveYBySteps(animation.inputValue, spriteId);
      } else if (animation.actionType === TURN) {
        turnByDegrees(animation.inputValue, spriteId);
      } else if (animation.actionType === GOTO) {
        gotoPosition(animation.inputX, animation.inputY, spriteId);
      } else if (animation.actionType === REPEAT) {
        repeatAllActions(animation.inputValue);
      }
    });
  };

  const handlePlayAll = async () => {
    const addAnimations = await dispatch(
      setAnimations({ actions: action.actions })
    );
    addAnimations &&
      sprite.sprites.forEach((sprite) => {
        handleOnPlay(sprite.id);
      });
  };

  return (
    <header className="text-gray-600 body-font bg-gray-200">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-2xl font-bold">Scratch Clone App</span>
        </a>
        <div className="flex w-full justify-end">
          <button
            id="play-btn"
            className="bg-green-600 text-white p-2 rounded-lg justify-self-end mx-2"
            onClick={() => handleOnPlay(sprite.active)}
          >
            Play
          </button>
          {sprite && sprite.sprites.length > 1 && (
            <button
              id="play-sprites"
              className="bg-green-600 text-white p-2 rounded-lg justify-self-end mx-2"
              onClick={handlePlayAll}
            >
              Play All Sprites
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

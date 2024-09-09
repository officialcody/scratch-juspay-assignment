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

  const handleOnPlay = (sprite) => {
    action.actions.forEach((activity) => {
      const { droppedData } = activity;
      if (droppedData.actionType === MOVEX) {
        moveXBySteps(droppedData.inputValue, sprite);
      } else if (droppedData.actionType === MOVEY) {
        moveYBySteps(droppedData.inputValue, sprite);
      } else if (droppedData.actionType === TURN) {
        turnByDegrees(droppedData.inputValue, sprite);
      } else if (droppedData.actionType === GOTO) {
        gotoPosition(droppedData.inputX, droppedData.inputY, sprite);
      } else if (droppedData.actionType === REPEAT) {
        repeatAllActions(droppedData.inputValue);
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
            className="bg-green-600 text-white p-2 rounded-lg justify-self-end"
            onClick={() => handleOnPlay(sprite.active)}
          >
            Play
          </button>
          <button
            id="play-sprites"
            className="bg-green-600 text-white p-2 rounded-lg justify-self-end"
            onClick={handlePlayAll}
          >
            Play All Sprites
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import useExecutableActions from "../hooks/useExecutableActions";
import { GOTO, MOVEX, MOVEY, REPEAT, TURN } from "../utils/app.constants";

const Header = () => {
  const action = useSelector((store) => store.action);
  const {
    moveXBySteps,
    moveYBySteps,
    turnByDegrees,
    gotoPosition,
    repeatAllActions,
  } = useExecutableActions();

  const handleOnPlay = (event) => {
    action.actions.forEach((activity, index) => {
      const { droppedData } = activity;
      if (droppedData.actionType === MOVEX) {
        setTimeout(() => {
          moveXBySteps(droppedData.inputValue);
        }, (index + 1) * 1000);
      } else if (droppedData.actionType === MOVEY) {
        setTimeout(() => {
          moveYBySteps(droppedData.inputValue);
        }, (index + 1) * 1000);
      } else if (droppedData.actionType === TURN) {
        setTimeout(() => {
          turnByDegrees(droppedData.inputValue);
        }, (index + 1) * 1000);
      } else if (droppedData.actionType === GOTO) {
        setTimeout(() => {
          gotoPosition(droppedData.inputX, droppedData.inputY);
        }, (index + 1) * 1000);
      } else if (droppedData.actionType === REPEAT) {
        setTimeout(() => {
          repeatAllActions(droppedData.inputValue);
        }, (index + 1) * 1000);
      }
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
            onClick={handleOnPlay}
          >
            Play
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

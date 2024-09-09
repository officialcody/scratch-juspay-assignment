import React, { useState } from "react";
import { useSelector } from "react-redux";

const MoveY = ({ actionId, droppedData }) => {
  const sprite = useSelector((store) => store.sprite);
  const [steps, setSteps] = useState(droppedData ? droppedData.inputValue : 10);

  const handleClick = () => {
    const activeSprite = document.getElementById(sprite.active);

    let top = activeSprite.offsetTop;
    activeSprite.style.position = "relative";
    activeSprite.style.top = top + steps + "px";
  };

  const handleOnDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        actionType: "MOVEY",
        inputValue: steps,
      })
    );
  };

  return (
    <button
      id={actionId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => handleClick()}
      draggable
      onDragStart={handleOnDragStart}
    >
      Move Y
      <input
        type="number"
        className="remove-arrow text-black text-center w-8 mx-1 rounded-lg px-2"
        value={steps}
        onChange={(e) => setSteps(parseInt(e.target.value))}
      />
      steps
    </button>
  );
};
export default MoveY;

import React, { useState } from "react";
import useExecutableActions from "../../hooks/useExecutableActions";
import { useSelector } from "react-redux";

const MoveY = ({ actionId, droppedData, draggable }) => {
  const sprite = useSelector((store) => store.sprite);
  const { moveYBySteps } = useExecutableActions();
  const [steps, setSteps] = useState(droppedData ? droppedData.inputValue : 10);

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
      onClick={() => moveYBySteps(steps, sprite.active)}
      draggable={draggable}
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

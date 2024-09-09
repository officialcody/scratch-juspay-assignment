import React, { useState } from "react";
import useExecutableActions from "../../hooks/useExecutableActions";
import { useSelector } from "react-redux";

const MoveX = ({ actionId, droppedData }) => {
  const sprite = useSelector((store) => store.sprite);
  const { moveXBySteps } = useExecutableActions();
  const [steps, setSteps] = useState(droppedData ? droppedData.inputValue : 10);

  const handleOnDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        actionType: "MOVEX",
        inputValue: steps,
      })
    );
  };

  return (
    <button
      id={actionId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => moveXBySteps(steps, sprite.active)}
      draggable
      onDragStart={handleOnDragStart}
    >
      Move X
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

export default MoveX;

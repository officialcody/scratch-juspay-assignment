import React, { useState } from "react";
import useExecutableAnimations from "../../hooks/useExecutableAnimations";
import { useSelector } from "react-redux";

const Turn = ({ actionId, droppedData, draggable }) => {
  const sprite = useSelector((store) => store.sprite);
  const { turnByDegrees } = useExecutableAnimations();

  const [angle, setAngle] = useState(droppedData ? droppedData.inputValue : 15);

  const handleOnDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        actionType: "TURN",
        inputValue: angle,
      })
    );
  };

  return (
    <div
      id={actionId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => turnByDegrees(angle, sprite.active)}
      draggable={draggable}
      onDragStart={handleOnDragStart}
    >
      Turn
      <input
        className="remove-arrow text-black text-center w-8 mx-1 rounded-lg px-2"
        type="number"
        value={angle}
        onChange={(e) => setAngle(parseInt(e.target.value))}
      />
      degrees
    </div>
  );
};

export default Turn;

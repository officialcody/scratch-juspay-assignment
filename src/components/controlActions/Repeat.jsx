import React, { useState } from "react";
import useExecutableActions from "../../hooks/useExecutableActions";

const Repeat = ({ actionId, droppedData }) => {
  const { repeatAllActions } = useExecutableActions();
  const [repeatNumber, setRepeatNumber] = useState(
    droppedData ? droppedData.inputValue : 10
  );

  const handleOnDragStart = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        actionType: "REPEAT",
        inputValue: repeatNumber,
      })
    );
  };

  return (
    <button
      id={actionId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => repeatAllActions(repeatNumber)}
      draggable
      onDragStart={handleOnDragStart}
    >
      Repeat
      <input
        type="number"
        className="remove-arrow text-black text-center w-8 mx-1 rounded-lg px-2"
        value={repeatNumber}
        onChange={(e) => setRepeatNumber(parseInt(e.target.value))}
      />
      times
    </button>
  );
};

export default Repeat;

import React, { useState } from "react";
import useExecutableAnimations from "../../hooks/useExecutableAnimations";
import { useSelector } from "react-redux";

const Repeat = ({ actionId, droppedData, draggable }) => {
  const sprite = useSelector((store) => store.sprite);
  const { executeAnimations } = useExecutableAnimations();
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

  const handleOnClickRepeat = (event) => {
    const currentSprite = sprite.sprites.find((sp) => sp.id === sprite.active);

    if (currentSprite.animations.length < 1) {
      return;
    }
    executeAnimations(currentSprite.animations, currentSprite.id);
  };

  return (
    <button
      id={actionId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={handleOnClickRepeat}
      draggable={draggable}
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

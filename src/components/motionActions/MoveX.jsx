import React, { useState } from "react";
import { useSelector } from "react-redux";

const MoveX = ({ componentId }) => {
  const sprite = useSelector((store) => store.sprite);
  const [steps, setSteps] = useState(10);

  const handleClick = () => {
    const currentSprite = document.getElementById(sprite.active);

    let left = currentSprite.offsetLeft;
    currentSprite.style.position = "relative";
    currentSprite.style.left = left + steps + "px";
  };

  return (
    <button
      id={componentId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => handleClick()}
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

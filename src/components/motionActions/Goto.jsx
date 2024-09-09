import React, { useState } from "react";
import { useSelector } from "react-redux";

const Goto = ({ componentId }) => {
  const sprite = useSelector((store) => store.sprite);

  const [positionX, setPositionX] = useState(10);
  const [positionY, setPositionY] = useState(10);

  const gotoPosition = () => {
    const activeSprite = document.getElementById(sprite.active);
    activeSprite.style.position = "relative";
    activeSprite.style.left = positionX + "px";
    activeSprite.style.top = positionY + "px";
  };

  return (
    <button
      id={componentId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => gotoPosition()}
    >
      Go to X:
      <input
        className="remove-arrow text-black text-center w-8 mx-1 rounded-lg px-2"
        type="number"
        value={positionX}
        onChange={(e) => {
          setPositionX(parseInt(e.target.value));
        }}
      />
      Y:
      <input
        className="remove-arrow text-black text-center w-8 mx-1 rounded-lg px-2"
        type="number"
        value={positionY}
        onChange={(e) => {
          setPositionY(parseInt(e.target.value));
        }}
      />
    </button>
  );
};

export default Goto;

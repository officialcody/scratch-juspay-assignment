import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSpriteAngle } from "../../redux/slices/SpriteSlice";
import { useSelector } from "react-redux";

const Turn = ({ actionId, droppedData }) => {
  const [angle, setAngle] = useState(droppedData ? droppedData.inputValue : 15);
  const sprite = useSelector((store) => store.sprite);
  const dispatch = useDispatch();

  const handleClick = () => {
    const el = document.getElementById(sprite.active);
    const sprite_angle = sprite.sprites.find((x) => x.id === sprite.active);
    if (sprite_angle) {
      el.style.transform = `rotate(${sprite_angle.angle + angle}deg)`;
      dispatch(setSpriteAngle({ angle: sprite_angle.angle + angle }));
    }
  };

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
      onClick={() => handleClick()}
      draggable
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

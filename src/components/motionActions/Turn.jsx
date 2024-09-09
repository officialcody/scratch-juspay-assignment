import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSpriteAngle } from "../../redux/slices/SpriteSlice";
import { useSelector } from "react-redux";

const Turn = ({ componentId }) => {
  const [angle, setAngle] = useState(15);
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

  return (
    <div
      id={componentId}
      className="bg-blue-600 p-2 m-2 text-white rounded-lg flex justify-center"
      onClick={() => handleClick()}
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

import React from "react";
import CatSprite from "../sprites/CatSprite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSprite, setActiveSprite } from "../redux/slices/SpriteSlice";

const PlaygroundArea = () => {
  const sprite = useSelector((store) => store.sprite);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col col-span-2">
        <div className="bg-gray-100 p-4 rounded-lg  relative overflow-hidden w-full h-[70%]">
          <div className="absolute">
            {sprite.sprites.map((sprite, index) => (
              <CatSprite
                spriteId={sprite.id}
                onClick={() => dispatch(setActiveSprite({ id: sprite.id }))}
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          Active Sprite: {sprite.active}
          <button
            className="bg-blue-500 rounded-lg p-2 text-white w-full"
            onClick={() => dispatch(addSprite())}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaygroundArea;

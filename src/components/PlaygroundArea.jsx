import React, { useRef, useState } from "react";
import CatSprite from "../sprites/CatSprite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addSprite,
  setActiveSprite,
  setSpritePosition,
} from "../redux/slices/SpriteSlice";

const PlaygroundArea = () => {
  const sprite = useSelector((store) => store.sprite);
  const dispatch = useDispatch();

  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);

    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current.getBoundingClientRect();

    let newX = e.clientX - container.left - offset.x;
    let newY = e.clientY - container.top - offset.y;

    newX = Math.max(0, Math.min(newX, container.width - 100));
    newY = Math.max(0, Math.min(newY, container.height - 100));

    dispatch(setSpritePosition({ x: newX, y: newY }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAddSprite = (event) => {
    const prevSprites = sprite.sprites.length;
    dispatch(addSprite({ prev: prevSprites }));
  };

  return (
    <>
      <div className="flex flex-col col-span-2">
        <div className="bg-gray-100 p-4 rounded-lg overflow-hidden w-full h-[60%]">
          <div
            className="relative w-full h-full"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {sprite.sprites.map((sprite, index) => (
              <CatSprite
                key={"sprite-" + sprite.id}
                spriteId={sprite.id}
                index={index}
                position={sprite.position}
                onClick={() => dispatch(setActiveSprite({ id: sprite.id }))}
                onMouseDown={handleMouseDown}
              />
            ))}
          </div>
        </div>
        <div className="w-full text-center flex flex-col justify-center">
          <h1 className="text-xl p-2 my-2">Active Sprite: {sprite.active}</h1>
          <button
            className="bg-blue-500 rounded-lg p-2 text-white w-36 mx-auto"
            onClick={handleAddSprite}
          >
            Add
          </button>
          <h1 className="text-xl p-2 my-2">
            Total Sprites: {sprite.sprites.length}
          </h1>
        </div>
      </div>
    </>
  );
};

export default PlaygroundArea;

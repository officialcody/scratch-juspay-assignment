import React, { useRef, useState } from "react";
import CatSprite from "../sprites/CatSprite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSprite, setActiveSprite } from "../redux/slices/SpriteSlice";

const PlaygroundArea = () => {
  const sprite = useSelector((store) => store.sprite);
  const dispatch = useDispatch();

  const containerRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
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

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div className="flex flex-col col-span-2">
        <div className="bg-gray-100 p-4 rounded-lg overflow-hidden w-full h-[70%]">
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
                position={position}
                onClick={() => dispatch(setActiveSprite({ id: sprite.id }))}
                onMouseDown={handleMouseDown}
              />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          Active Sprite: {sprite.active}
          <button
            className="bg-blue-500 rounded-lg p-2 text-white w-full"
            onClick={() => dispatch(addSprite())}
          >
            Add
          </button>
          Total Sprites: {sprite.sprites.length}
        </div>
      </div>
    </>
  );
};

export default PlaygroundArea;

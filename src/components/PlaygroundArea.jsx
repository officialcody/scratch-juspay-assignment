import React, { useEffect, useRef, useState } from "react";
import CatSprite from "../sprites/CatSprite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addSprite,
  setActiveSprite,
  setBoundingRect,
  setSpriteOffest,
  setSpritePosition,
  swapSpriteAnimations,
} from "../redux/slices/SpriteSlice";
import { isColliding } from "../utils/app.constants";

const PlaygroundArea = () => {
  const sprite = useSelector((store) => store.sprite);
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);

    const rect = e.target.getBoundingClientRect();

    dispatch(
      setSpriteOffest({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    );
    dispatch(
      setBoundingRect({
        currentSprite: sprite.active,
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
      })
    );
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentSprite = sprite.sprites.find((sp) => sp.id === sprite.active);
    const container = containerRef.current.getBoundingClientRect();

    let newX = e.clientX - container.left - currentSprite.offset.x;
    let newY = e.clientY - container.top - currentSprite.offset.y;

    newX = Math.max(0, Math.min(newX, container.width - 100));
    newY = Math.max(0, Math.min(newY, container.height - 100));

    dispatch(setSpritePosition({ x: newX, y: newY }));
    dispatch(
      setBoundingRect({
        currentSprite: currentSprite.id,
        top: container.top,
        left: container.left,
        bottom: container.bottom,
        right: container.right,
      })
    );
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleAddSprite = (event) => {
    const prevSprites = sprite.sprites.length;
    dispatch(addSprite({ prev: prevSprites }));
  };

  useEffect(() => {
    const checkCollisions = (sprites) => {
      for (let i = 0; i < sprites.length; i++) {
        for (let j = i + 1; j < sprites.length; j++) {
          const div1 = document.getElementById(sprites[i].id);
          const div2 = document.getElementById(sprites[j].id);
          if (isColliding(div1, div2)) {
            const collide = dispatch(
              swapSpriteAnimations({
                sprite1Id: sprites[i].id,
                sprite2Id: sprites[j].id,
              })
            );
            collide && clearInterval(intervalId);
          }
        }
      }
    };
    const intervalId = setInterval(() => {
      if (sprite.sprites.length > 1) {
        checkCollisions(sprite.sprites);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [sprite.sprites]);

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
            onMouseDown={handleMouseDown}
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

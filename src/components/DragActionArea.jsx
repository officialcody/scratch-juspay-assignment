import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import getActionComponent from "./actionComponent";
import { setSpriteAnimation } from "../redux/slices/SpriteSlice";

const DragActionArea = () => {
  const sprite = useSelector((store) => store.sprite);

  const activeSpriteAnimations = useMemo(() => {
    const activeSprite = sprite.sprites.find((sp) => sp.id === sprite.active);
    return activeSprite.animations;
  }, [sprite]);

  const dispatch = useDispatch();

  const handleOnDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const droppedData = JSON.parse(data);
    dispatch(setSpriteAnimation({ ...droppedData }));
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg flex flex-col col-span-2"
      onDrop={handleOnDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <h1 className="text-2xl font-bold text-center my-2">
        Drag Animations here
      </h1>
      {activeSpriteAnimations &&
        activeSpriteAnimations.map((act, index) =>
          getActionComponent(
            act.actionType,
            `${act.actionType}-${index}`,
            act,
            false
          )
        )}
    </div>
  );
};

export default DragActionArea;

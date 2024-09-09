import React from "react";
import CatSprite from "../sprites/CatSprite";

const PlaygroundArea = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg col-span-2 relative overflow-hidden">
      <div className="absolute">
        <CatSprite />
      </div>
    </div>
  );
};

export default PlaygroundArea;

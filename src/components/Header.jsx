import React from "react";
import { useSelector } from "react-redux";
import useExecutableAnimations from "../hooks/useExecutableAnimations";

const Header = () => {
  const sprite = useSelector((store) => store.sprite);
  const { executeAnimations } = useExecutableAnimations();

  const handleOnPlay = (spriteId) => {
    const currentSprite = sprite.sprites.find((sp) => sp.id === spriteId);
    if (currentSprite.animations.length < 1) {
      return;
    }
    if (sprite.sprites.length === 1) {
      executeAnimations(currentSprite.animations, currentSprite.id);
    } else {
      sprite.sprites.forEach((sp) => {
        executeAnimations(sp.animations, sp.id);
      });
    }
  };

  return (
    <header className="text-gray-600 body-font bg-gray-200">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-2xl font-bold">Scratch Clone App</span>
        </a>
        <div className="flex w-full justify-end">
          <button
            id="play-btn"
            className="bg-green-600 text-white p-2 rounded-lg justify-self-end mx-2"
            onClick={() => handleOnPlay(sprite.active)}
          >
            Play
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

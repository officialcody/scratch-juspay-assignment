import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <span className="ml-3 text-2xl font-bold">Scratch Clone App</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

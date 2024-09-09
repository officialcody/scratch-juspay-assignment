import React from "react";

const ActionCategories = () => {
  return (
    <div className="w-full bg-gray-200 h-[100vh] text-center py-2 rounded-s-lg border-r-2 border-r-gray-900">
      <div className="font-bold text-xl p-2">Actions</div>
      <nav className="p-4">
        <button className="w-16 h-16 border-2 border-black border-solid rounded-md bg-white my-4">
          <a href="#motion">Motion</a>
        </button>
        <button className="w-16 h-16 border-2 border-black border-solid rounded-md bg-white my-4">
          <a href="#controls"> Controls</a>
        </button>
      </nav>
    </div>
  );
};

export default ActionCategories;

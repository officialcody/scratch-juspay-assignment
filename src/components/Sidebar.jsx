import React, { useState } from "react";
import { ACTION_CATEGORIES } from "../utils/app.constants";
import getActionComponent from "./actionComponent";

const Sidebar = () => {
  const [actionCategory, setActionCategory] = useState("motion");
  return (
    <div className="grid grid-cols-3">
      <div className="w-full bg-gray-200 h-screen text-center py-2 rounded-s-lg border-r-2 border-r-gray-900">
        <div className="font-bold text-xl p-2">Actions</div>
        <nav className="p-4">
          {Object.keys(ACTION_CATEGORIES).map((category, index) => (
            <button
              key={category + index}
              className="w-16 h-16 border-2 border-black border-solid rounded-md bg-white my-4"
              onClick={(event) => setActionCategory(category)}
            >
              <button>{category}</button>
            </button>
          ))}
        </nav>
      </div>
      <div className="w-full h-full bg-slate-200 col-span-2 flex flex-col rounded-e-lg">
        <h1 className="text-xl font-bold text-wrap text-center p-2">
          Animation Options
        </h1>
        {ACTION_CATEGORIES[actionCategory].map((action, index) =>
          getActionComponent(action, `${action}-${index}`, null, true)
        )}
      </div>
    </div>
  );
};

export default Sidebar;

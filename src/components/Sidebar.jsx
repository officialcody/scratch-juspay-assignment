import React from "react";
import ActionCategories from "./ActionCategories";
import ActionOptions from "./ActionOptions";

const Sidebar = () => {
  return (
    <div className="grid grid-cols-3">
      <ActionCategories />
      <ActionOptions />
    </div>
  );
};

export default Sidebar;

import React from "react";

const ActionOptions = ({ moveXByUnits, moveYByUnits, turnByDegrees }) => {
  return (
    <div className="w-full h-full bg-slate-200 col-span-2 flex flex-col rounded-e-lg">
      <h1 className="text-xl font-bold text-wrap text-center p-2">
        Animation Options
      </h1>
    </div>
  );
};

export default ActionOptions;

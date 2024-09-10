import React from "react";
import { useSelector } from "react-redux";
import { addAction } from "../redux/slices/ActionSlice";
import { useDispatch } from "react-redux";
import getActionComponent from "./actionComponent";

const DragActionArea = () => {
  const action = useSelector((store) => store.action);
  const dispatch = useDispatch();

  const handleOnDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const droppedData = JSON.parse(data);
    dispatch(addAction({ droppedData: droppedData }));
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
      {action &&
        action.actions.map((act, index) =>
          getActionComponent(
            act.droppedData.actionType,
            `${act.droppedData.actionType}-${index}`,
            act.droppedData,
            false
          )
        )}
    </div>
  );
};

export default DragActionArea;

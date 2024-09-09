import { configureStore } from "@reduxjs/toolkit";
import SpriteReducer from "./slices/SpriteSlice";
import ActionReducer from "./slices/ActionSlice";

const appStore = configureStore({
  reducer: {
    sprite: SpriteReducer,
    action: ActionReducer,
  },
});

export default appStore;

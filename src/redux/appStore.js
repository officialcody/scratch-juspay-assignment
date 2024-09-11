import { configureStore } from "@reduxjs/toolkit";
import SpriteReducer from "./slices/SpriteSlice";

const appStore = configureStore({
  reducer: {
    sprite: SpriteReducer,
  },
});

export default appStore;

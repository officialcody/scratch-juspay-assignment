import { createSlice } from "@reduxjs/toolkit";

const SpriteSlice = createSlice({
  name: "sprite",
  initialState: {
    sprites: [{ id: "catSprite", angle: 0 }],
    active: "catSprite",
  },
  reducers: {
    addSprite: (state, action) => {
      let spriteArray = state.sprites;
      spriteArray.push({
        id: `sprite${state.sprites.length}`,
        angle: 0,
      });
      state.sprites = spriteArray;
    },
    setActiveSprite: (state, action) => {
      state.active = action.payload.id;
    },
    setSpriteAngle: (state, action) => {
      let spritesArray = state.sprites;
      let current_sprite = spritesArray.find(
        (sprite) => sprite.id === state.active
      );
      let current_sprite_index = spritesArray.findIndex(
        (sprite) => sprite.id === state.active
      );
      if (current_sprite_index > -1) {
        current_sprite.angle = action.payload.angle;
        state.sprites[current_sprite_index] = current_sprite;
      }
    },
  },
});

export const { addSprite, setSpriteAngle, setActiveSprite } =
  SpriteSlice.actions;

export default SpriteSlice.reducer;

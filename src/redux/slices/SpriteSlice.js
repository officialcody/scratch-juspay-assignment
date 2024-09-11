import { createSlice } from "@reduxjs/toolkit";

const SpriteSlice = createSlice({
  name: "sprite",
  initialState: {
    sprites: [
      { id: "catSprite", position: { x: 0, y: 0 }, angle: 0, animations: [] },
    ],
    active: "catSprite",
  },
  reducers: {
    addSprite: (state, action) => {
      let spriteArray = state.sprites;
      spriteArray.push({
        id: `sprite${state.sprites.length}`,
        angle: 0,
        animations: [],
        position: { x: 0, y: action.payload.prev * 110 },
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
    setSpriteAnimation: (state, action) => {
      let spritesArray = state.sprites;
      let current_sprite = spritesArray.find(
        (sprite) => sprite.id === state.active
      );
      let current_sprite_index = spritesArray.findIndex(
        (sprite) => sprite.id === state.active
      );
      if (current_sprite_index > -1) {
        current_sprite.animations = [
          ...current_sprite.animations,
          action.payload,
        ];
        state.sprites[current_sprite_index] = current_sprite;
      }
    },
    setSpritePosition: (state, action) => {
      let spritesArray = state.sprites;
      let current_sprite = spritesArray.find(
        (sprite) => sprite.id === state.active
      );
      let current_sprite_index = spritesArray.findIndex(
        (sprite) => sprite.id === state.active
      );
      if (current_sprite_index > -1) {
        current_sprite.position = { x: action.payload.x, y: action.payload.y };
        state.sprites[current_sprite_index] = current_sprite;
      }
    },
  },
});

export const {
  addSprite,
  setSpriteAngle,
  setActiveSprite,
  setSpriteAnimation,
  setSpritePosition,
} = SpriteSlice.actions;

export default SpriteSlice.reducer;

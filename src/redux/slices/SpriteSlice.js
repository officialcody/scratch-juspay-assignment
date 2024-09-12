import { createSlice } from "@reduxjs/toolkit";

const SpriteSlice = createSlice({
  name: "sprite",
  initialState: {
    sprites: [
      {
        id: "catSprite",
        position: { x: 0, y: 0 },
        angle: 0,
        offset: { x: 0, y: 0 },
        animations: [],
        boundingRect: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
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
        position: { x: action.payload.prev * 10, y: action.payload.prev * 110 },
        offset: { x: 0, y: 0 },
        boundingRect: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
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
    setSpriteOffest: (state, action) => {
      let spritesArray = state.sprites;
      let current_sprite = spritesArray.find(
        (sprite) => sprite.id === state.active
      );
      let current_sprite_index = spritesArray.findIndex(
        (sprite) => sprite.id === state.active
      );
      if (current_sprite_index > -1) {
        current_sprite.offset = { x: action.payload.x, y: action.payload.y };
        state.sprites[current_sprite_index] = current_sprite;
      }
    },
    setBoundingRect: (state, action) => {
      let spritesArray = state.sprites;
      let current_sprite = spritesArray.find(
        (sprite) => sprite.id === action.payload.currentSprite
      );
      let current_sprite_index = spritesArray.findIndex(
        (sprite) => sprite.id === action.payload.currentSprite
      );
      if (current_sprite_index > -1) {
        current_sprite.boundingRect = {
          top: action.payload.top,
          bottom: action.payload.bottom,
          left: action.payload.left,
          right: action.payload.right,
        };
        state.sprites[current_sprite_index] = current_sprite;
      }
    },
    swapSpriteAnimations: (state, action) => {
      const sprite1 = state.sprites.find(
        (sp) => sp.id === action.payload.sprite1Id
      );
      const sprite1Index = state.sprites.findIndex(
        (sp) => sp.id === action.payload.sprite1Id
      );
      const sprite2 = state.sprites.find(
        (sp) => sp.id === action.payload.sprite2Id
      );
      const sprite2Index = state.sprites.findIndex(
        (sp) => sp.id === action.payload.sprite2Id
      );
      if (sprite1Index > -1 && sprite2Index > -1) {
        let temp = sprite1.animations;
        sprite1.animations = sprite2.animations;
        sprite2.animations = temp;
        state.sprites[sprite1Index] = sprite1;
        state.sprites[sprite2Index] = sprite2;
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
  setSpriteOffest,
  setBoundingRect,
  swapSpriteAnimations,
} = SpriteSlice.actions;

export default SpriteSlice.reducer;

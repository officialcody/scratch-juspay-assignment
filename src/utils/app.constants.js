// motion animations
export const MOVEX = "MOVEX";
export const MOVEY = "MOVEY";
export const TURN = "TURN";
export const GOTO = "GOTO";

// control animation
export const REPEAT = "REPEAT";

export const ACTION_CATEGORIES = {
  motion: [MOVEX, MOVEY, TURN, GOTO],
  control: [REPEAT],
};

export function isColliding(div1, div2) {
  const rect1 = div1.getBoundingClientRect();
  const rect2 = div2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

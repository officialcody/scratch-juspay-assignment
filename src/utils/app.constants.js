// motion actions
export const MOVEX = "MOVEX";
export const MOVEY = "MOVEY";
export const TURN = "TURN";
export const GOTO = "GOTO";

// control action
export const REPEAT = "REPEAT";

export const ACTION_CATEGORIES = {
  motion: [MOVEX, MOVEY, TURN, GOTO],
  control: [REPEAT],
};

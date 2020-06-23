import { SET_FULL_GRID } from "../types/mainTypes";

export const setFullGrid = (rows, cols) => async (dispatch) => {
  try {
    const fullGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    dispatch({ type: SET_FULL_GRID, payload: fullGrid });
  } catch (err) {
    console.log(err.message);
  }
};

import { SET_FULL_GRID, UPDATE_FULL_GRID, CLICKED } from "../types/mainTypes";

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

export const updateGrid = (row, col) => async (dispatch) => {
  try {
    await dispatch({ type: UPDATE_FULL_GRID, payload: { row, col } });
    await dispatch({ type: CLICKED, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

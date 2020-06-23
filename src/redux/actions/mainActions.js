import {
  SET_FULL_GRID,
  UPDATE_FULL_GRID,
  RELOAD_GRID,
  SEED_GRID,
} from "../types/mainTypes";

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
    await dispatch({ type: RELOAD_GRID, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

export const seedGrid = (rows, cols) => async (dispatch) => {
  try {
    const seedGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          seedGrid[i][j] = true;
        }
      }
    }
    await dispatch({ type: SEED_GRID, payload: seedGrid });
    await dispatch({ type: RELOAD_GRID, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

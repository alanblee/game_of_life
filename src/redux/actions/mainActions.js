import {
  SET_FULL_GRID,
  UPDATE_FULL_GRID,
  RELOAD_GRID,
  SEED_GRID,
  START_GAME,
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

export const nextStep = (gridArr, rows, cols) => async (dispatch) => {
  try {
    let copyGrid = arrayClone(gridArr);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let count = 0;
        if (i > 0) if (gridArr[i - 1][j]) count++;
        if (i > 0 && j > 0) if (gridArr[i - 1][j - 1]) count++;
        if (i > 0 && j < cols - 1) if (gridArr[i - 1][j + 1]) count++;
        if (j < cols - 1) if (gridArr[i][j + 1]) count++;
        if (j > 0) if (gridArr[i][j - 1]) count++;
        if (i < rows - 1) if (gridArr[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (gridArr[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < cols - 1) if (gridArr[i + 1][j + 1]) count++;
        if (gridArr[i][j] && (count < 2 || count > 3)) copyGrid[i][j] = false;
        if (!gridArr[i][j] && count === 3) copyGrid[i][j] = true;
      }
    }
    await dispatch({ type: START_GAME, payload: copyGrid });
    dispatch({ type: RELOAD_GRID, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

const arrayClone = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

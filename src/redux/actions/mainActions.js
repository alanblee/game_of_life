import {
  SET_FULL_GRID,
  UPDATE_FULL_GRID,
  RELOAD_GRID,
  SEED_GRID,
  PLAY_GAME,
  PAUSE_GAME,
  SET_LINE,
} from "../types/mainTypes";

export const setFullGrid = (rows, cols) => async (dispatch) => {
  try {
    const fullGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    await dispatch({ type: SET_FULL_GRID, payload: fullGrid });
    return fullGrid;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateGrid = (row, col) => async (dispatch) => {
  try {
    await dispatch({ type: UPDATE_FULL_GRID, payload: { row, col } });
    dispatch({ type: PAUSE_GAME, payload: null });
    // await dispatch({ type: RELOAD_GRID, payload: null });
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

export const setLine = (rows, cols) => async (dispatch) => {
  try {
    const mid = Math.floor(rows / 2);
    const lineGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    for (let i = mid; i < mid + 1; i++) {
      for (let j = 0; j < cols; j++) {
        lineGrid[i][j] = true;
      }
    }
    await dispatch({ type: SET_LINE, payload: lineGrid });
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
    await dispatch({ type: PLAY_GAME, payload: copyGrid });
    await dispatch({ type: RELOAD_GRID, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

export const pauseGame = () => async (dispatch) => {
  try {
    dispatch({ type: PAUSE_GAME, payload: null });
  } catch (err) {
    console.log(err.message);
  }
};

const arrayClone = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

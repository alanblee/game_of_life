import { createReducer } from "./reducerUtil";
import {
  GET_GENERATIONS,
  SET_FULL_GRID,
  UPDATE_FULL_GRID,
  RELOAD_GRID,
  SEED_GRID,
} from "../types/mainTypes";

const initialState = {
  generations: 0,
  fullGrid: [],
  clicked: false,
};

const getGen = (state = initialState, payload) => {
  return {
    ...state,
  };
};

const setGrid = (state = initialState, payload) => {
  if (payload) {
    return {
      ...state,
      fullGrid: payload,
    };
  }
};

const getGrid = (state = initialState, payload) => {
  return { ...state, clicked: !state.clicked };
};
const updateGrid = (state = initialState, payload) => {
  for (let i = 0; i < state.fullGrid.length; i++) {
    for (let j = 0; j < state.fullGrid[i].length; j++) {
      if (payload.row === i && payload.col === j) {
        state.fullGrid[i][j] = !state.fullGrid[i][j];
      }
    }
  }
  if (payload) {
    return {
      ...state,
      fullGrid: state.fullGrid,
      clicked: true,
    };
  }
};

const seedGrid = (state = initialState, payload) => {
  return {
    ...state,
    fullGrid: payload,
  };
};
export default createReducer(initialState, {
  [GET_GENERATIONS]: getGen,
  [SET_FULL_GRID]: setGrid,
  [UPDATE_FULL_GRID]: updateGrid,
  [RELOAD_GRID]: getGrid,
  [SEED_GRID]: seedGrid,
});

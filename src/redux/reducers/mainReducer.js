import { createReducer } from "./reducerUtil";
import {
  GET_GENERATIONS,
  SET_FULL_GRID,
  UPDATE_FULL_GRID,
  RELOAD_GRID,
  SEED_GRID,
  PLAY_GAME,
  PAUSE_GAME,
} from "../types/mainTypes";

const initialState = {
  generations: 0,
  fullGrid: [],
  clicked: false,
  newGame: true,
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
      newGame: false,
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
      clicked: false,
    };
  }
};

const seedGrid = (state = initialState, payload) => {
  return {
    ...state,
    fullGrid: payload,
    clicked: true,
  };
};

const playGame = (state = initialState, payload) => {
  return {
    ...state,
    fullGrid: [...payload],
    generations: (state.generations += 1),
    clicked: true,
  };
};

const pauseGame = (state = initialState, payload) => {
  return {
    ...state,
    clicked: false,
  };
};
export default createReducer(initialState, {
  [GET_GENERATIONS]: getGen,
  [SET_FULL_GRID]: setGrid,
  [UPDATE_FULL_GRID]: updateGrid,
  [RELOAD_GRID]: getGrid,
  [SEED_GRID]: seedGrid,
  [PLAY_GAME]: playGame,
  [PAUSE_GAME]: pauseGame,
});

import { createReducer } from "./reducerUtil";
import { GET_GENERATIONS, SET_FULL_GRID } from "../types/mainTypes";

const initialState = {
  generations: 0,
  fullGrid: [],
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
export default createReducer(initialState, {
  [GET_GENERATIONS]: getGen,
  [SET_FULL_GRID]: setGrid,
});

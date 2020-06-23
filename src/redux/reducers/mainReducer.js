import { createReducer } from "./reducerUtil";
import { GET_GENERATIONS } from "../types/mainTypes";

const initialState = {
  generations: 0,
};

const getGen = (state = initialState, payload) => {
  return {
    ...state,
  };
};

export default createReducer(initialState, {
  [GET_GENERATIONS]: getGen,
});

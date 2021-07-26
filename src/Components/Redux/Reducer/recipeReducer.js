import { ActionTypes } from "../Action/ActionType";

const initialState = {
  recipies: [],
};

export const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RECIPIES:
      return {
        ...state,
        recipies: payload,
      };

    default:
      return state;
  }
};

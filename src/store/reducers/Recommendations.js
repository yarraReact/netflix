import {
  ADD_TO_RECOMMENDATIONS,
  REMOVE_FROM_RECOMMENDATIONS,
  REQUEST_SUCCEEDED
} from "../actions";

const initialState = [];

export const addToRecommendations = payload => ({
  type: ADD_TO_RECOMMENDATIONS,
  payload
});

export const removeFromRecommendations = payload => ({
  type: REMOVE_FROM_RECOMMENDATIONS,
  payload
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCEEDED:
      return payload.recommendations;
    case ADD_TO_RECOMMENDATIONS:
      return [...state, payload];
    case REMOVE_FROM_RECOMMENDATIONS:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

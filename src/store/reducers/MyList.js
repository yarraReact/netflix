import {
  ADD_TO_MYLIST,
  REMOVE_FROM_MYLIST,
  REQUEST_SUCCEEDED
} from "../actions";

const initialState = [];

export const requestSucceeded = payload => ({
  type: REQUEST_SUCCEEDED,
  payload
});

export const addToMyList = payload => ({
  type: ADD_TO_MYLIST,
  payload
});

export const removeFromMyList = payload => ({
  type: REMOVE_FROM_MYLIST,
  payload
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_SUCCEEDED:
      return payload.mylist;
    case ADD_TO_MYLIST:
      return [...state, payload];
    case REMOVE_FROM_MYLIST:
      return state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

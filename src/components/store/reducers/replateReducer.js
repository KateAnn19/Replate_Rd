import {
  DELETE_PICKUP_START,
  DELETE_PICKUP_SUCCESS,
  DELETE_PICKUP_FAILURE,
} from "../actions";

export const initialState = {
  isFetching: false,
  pickups: [],
  error: "",
};

export const replateReducer = (state = initialState, action) => {
  console.log("in replate reducer", state);
  console.log("in replate reducer action", action);
  switch (action.type) {
    case DELETE_PICKUP_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_PICKUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pickups: state.pickups.filter((p) => p.id !== action.payload),
      };
    case DELETE_PICKUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

import axios from "axios";
import {axiosWithAuth} from "../../../utils/axiosWithAuth";

export const DELETE_PICKUP_START = "DELETE_PICKUP_START";
export const DELETE_PICKUP_SUCCESS = "DELETE_PICKUP_SUCCESS";
export const DELETE_PICKUP_FAILURE = "DELETE_PICKUP_FAILURE";

export const deletePickup = (id) => {
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return (dispatch) => {
    dispatch({ type: DELETE_PICKUP_START });
    // then make the async call
    axiosWithAuth()
      .delete(`pickups/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_PICKUP_SUCCESS, payload: id });
      })
      .catch((err) => {
        dispatch({ type: DELETE_PICKUP_FAILURE, payload: err });
      });
  };
};

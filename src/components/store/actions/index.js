import axios from "axios";
import { axiosWithAuth } from "../../../utils/axiosWithAuth";

export const GET_BUSPROFDETAILS_START = "GET_BUSPROFDETAILS_START";
export const GET_BUSPROFDETAILS_SUCCESS = "GET_BUSPROFDETAILS_SUCCESS";
export const GET_BUSPROFDETAILS_FAILURE = "GET_BUSPROFDETAILS_FAILURE";

export const DELETE_BUSPROFILE_START = "DELETE_BUSPROFILE_START";
export const DELETE_BUSPROFILE_SUCCESS = "DELETE_BUSPROFILE_SUCCESS";
export const DELETE_BUSPROFILE_FAILURE = "DELETE_BUSPROFILE_FAILURE";



export const DELETE_PICKUP_START = "DELETE_PICKUP_START";
export const DELETE_PICKUP_SUCCESS = "DELETE_PICKUP_SUCCESS";
export const DELETE_PICKUP_FAILURE = "DELETE_PICKUP_FAILURE";


export const GET_VOLPROFDETAILS_START = "GET_VOLPROFDETAILS_START";
export const GET_VOLPROFDETAILS_SUCCESS = "GET_VOLPROFDETAILS_SUCCESS";
export const GET_VOLPROFDETAILS_FAILURE = "GET_VOLPROFDETAILS_FAILURE";

export const DELETE_VOLPROFILE_START = "GET_VOLPROFILE_START";
export const DELETE_VOLPROFILE_SUCCESS = "GET_VOLPROFILE_SUCCESS";
export const DELETE_VOLPROFILE_FAILURE = "GET_VOLPROFILE_FAILURE";

export const POST_LOGIN_CREDENTIALS_START = "POST_LOGIN_CREDENTIALS_START";
export const POST_LOGIN_CREDENTIALS_SUCCESS = "POST_LOGIN_CREDENTIALS_SUCCESS";
export const POST_LOGIN_CREDENTIALS_FAILURE = "POST_LOGIN_CREDENTIALS_FAILURE";

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

export const getBusProfData = () => {
  return (dispatch) => {
    dispatch({ type: GET_BUSPROFDETAILS_START });
    // then make the async call
    axiosWithAuth()
      .get("donors")
      .then((res) => {
        console.log("Inside Get", res);
        dispatch({ type: GET_BUSPROFDETAILS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_BUSPROFDETAILS_FAILURE, payload: err });
      });
  };
}

export const deleteBusProf = () => {
  //delete profile
  return dispatch => {
    dispatch({type: DELETE_BUSPROFILE_START});
    axiosWithAuth()
    .delete("donors")
    .then((res) => {
      dispatch({ type: DELETE_BUSPROFILE_SUCCESS});
    })
    .catch(err => {
      dispatch({type: DELETE_BUSPROFILE_FAILURE, payload: err});
  })
  }
};
 


export const getVolProfData = () => {
  return (dispatch) => {
    dispatch({ type: GET_VOLPROFDETAILS_START });
    // then make the async call
    axiosWithAuth()
      .get("volunteers")
      .then((res) => {
        console.log("Inside Get", res);
        dispatch({ type: GET_VOLPROFDETAILS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_VOLPROFDETAILS_FAILURE, payload: err });
      });
  };
};


export const deleteVolProf = () => {
  //delete profile
  return dispatch => {
    dispatch({type: DELETE_VOLPROFILE_START});
    axiosWithAuth()
    .delete("volunteers")
    .then((res) => {
      dispatch({ type: DELETE_VOLPROFILE_SUCCESS});
    })
    .catch(err => {
      dispatch({type: DELETE_VOLPROFILE_FAILURE, payload: err});
  })
  }
};

export const login = (loginInfo) => {
  //delete profile
  console.log("here is login info", loginInfo)
  return dispatch => {
    dispatch({type: POST_LOGIN_CREDENTIALS_START});
    axiosWithAuth()
    .post("auth/login", loginInfo)
    .then((res) => {
      console.log("THIS IS RESPONSE",res)
      dispatch({ type: POST_LOGIN_CREDENTIALS_SUCCESS, payload: res.data.token});
    })
    .catch(err => {
      dispatch({type: POST_LOGIN_CREDENTIALS_FAILURE, payload: err});
  })
  }
};


// const login = (e) => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post("auth/login", loginInfo)
//     .then((res) => {
//       console.log(res)
//       localStorage.setItem("token", res.data.token);
//       console.log(localStorage.getItem("token"))
//       //if volunteer push to volunteer profile
//       //if business push to business profile
//       // eslint-disable-next-line no-lone-blocks
      
//       // eslint-disable-next-line no-lone-blocks
//       {loginInfo.role === 'business' ? push("/business-profile") : push("/volunteer-profile")} //we will want to push to volunteer page if volunteer and donor page if donor
      
//     })
//     .catch((err) => console.log(loginInfo.error));
// };
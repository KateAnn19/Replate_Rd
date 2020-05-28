import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import { connect } from "react-redux";

import { deletePickup } from "../store/actions";

import EditPickup from "./editPickup";

//styles
import "../styles/pickups.css";

const date = require("moment");

function Business({ data, update, deletePickup }) {
  const [pickups, setPickups] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPickup, setPickupToEdit] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const { push, go } = useHistory();

  const editPickup = (pickup) => {
    setIsEditing(true);
    setPickupToEdit(pickup);
  };
  // const deletePickup = (id) => {
  //   //delete pickup
  //   axiosWithAuth()
  //     .delete(`pickups/${id}`)
  //     .then((res) => {
  //       update();
  //       setIsLoading(true);
  //       push('/business-profile');
  //         go(0)
  //       setTimeout(function () {
  //         setIsLoading(false);
  //       }, 1000);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className="container">
      {loading
        ? "loading"
        : pickups === undefined
        ? "loading"
        : pickups.map((p) => (
            <div className="List" key={p["pickup-id"]}>
              <h2>{p.type}</h2>
              <h2>{p["business-address"]}</h2>
              <h2>{p.amount}</h2>
              <h2>{p["business-name"]}</h2>
              {p["volunteer-info"] &&
              typeof p["volunteer-info"] === "object" ? (
                <>
                  <h2>{p["volunteer-info"]["volunteer-name"]}</h2>
                  <h2>{p["volunteer-info"]["volunteer-phone"]}</h2>
                </>
              ) : (
                <h2>No Volunteer Assigned Currently</h2>
              )}
              <h2>{date(p["pickup-date"]).format("ll")}</h2>
              <h2>{p["business-phone"]}</h2>
              <button onClick={() => editPickup(p)}>Edit</button>
              <button onClick={() => deletePickup(p["pickup-id"])}>
                Delete
              </button>
            </div>
          ))}

      {isEditing ? (
        <EditPickup
          setPickups={setPickups}
          setIsEditing={setIsEditing}
          info={editingPickup}
          all={data}
        />
      ) : null}
    </div>
  );
} //end businessProfile



const mapStateToProps = (state) => {
  console.log("this is state in business", state);
  return {
    isFetching: state.isFetching,
    pickups: state,
    error: state.error,
  };
};

export default connect(mapStateToProps, {deletePickup})(Business);



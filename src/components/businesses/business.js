import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import useForceUpdate from "use-force-update";

import EditPickup from "./editPickup";

//styles
import "../styles/pickups.css";

const date = require("moment");

function Business({ data, update}) {
  const [pickups, setPickups] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPickup, setPickupToEdit] = useState(null);

  console.log(data)

  const forceUpdate = useForceUpdate();

  const { push } = useHistory();
  console.log(pickups);

  const editPickup = (pickup) => {
    setIsEditing(true);
    setPickupToEdit(pickup);
  };
  const deletePickup = (id) => {
    //delete pickup
    axiosWithAuth()
      .delete(`pickups/${id}`)
      .then((res) => {
        update([]);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      {pickups === undefined
        ? "loading"
        : pickups.map((p) => (
            <div className="List" key={p["pickup-id"]}>
              {console.log(p)}
              <h2>{p.type}</h2>
              <h2>{p["business-address"]}</h2>
              <h2>{p.amount}</h2>
              <h2>{p["business-name"]}</h2>
              {p["volunteer-info"] !== "string" ? (
                <h2>No Volunteer Assigned Currently</h2>
              ) : (
                <h2>{p["volunteer-info"]}</h2>
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

export default Business;


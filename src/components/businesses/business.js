import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import EditPickup from "./editPickup";

//styles
import "../styles/pickups.css";

const date = require("moment");

function Business({ pickup, picks }) {
  const [pickups, setPickups] = useState(pickup);
  const [isEditing, setIsEditing] = useState(false);
  const { push } = useHistory();
  return (
    <div>
      <div className="container">
        <div className="pickups-container">
          <h2>{pickup.type}</h2>
          <h2>{pickup["business-phone"]}</h2>
          <h2>{pickup["business-name"]}</h2>
          <h2>{pickup["business-address"]}</h2>
          <h2>{pickup["amount"]}</h2>
          {pickup["volunteer-info"] === null ? (
            <h2>No Volunteer Assigned Currently</h2>
          ) : (
            <h2>{pickup["volunteer-info"]}</h2>
          )}
          <h2>{date(pickup["pickup-date"]).format("ll")}</h2>
          {isEditing ? (
            <EditPickup
              picks={picks}
              pickup={pickup}
              setPickups={setPickups}
              setIsEditing={setIsEditing}
              id={pickup["pickup-id"]}
              type={pickup.type}
              amount={pickup.amount}
              date={date(pickup["pickup-date"]).format("ll")}
              newDate={pickup["pickup-date"]}
            />
          ) : (
            <>
              <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
              <button>Delete</button>
            </>
          )}
        </div>
      </div>
      <button onClick={() => push("/add-pickup")}>Add Pickup</button>
    </div>
  );
} //end businessProfile

export default Business;

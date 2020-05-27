import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

import EditPickup from "./editPickup";

//styles
import "../styles/pickups.css";

const date = require("moment");

function Business({ data }) {
  const [pickups, setPickups] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPickup, setPickupToEdit] = useState(null);
  const { push } = useHistory();
  console.log(pickups);

  const editPickup = (pickup) => {
    setIsEditing(true);
    setPickupToEdit(pickup);
  };
  return (
    <div className="container">
    
      {pickups === undefined
        ? "loading"
        : pickups.map((p) => (
            <div className="List" key={p["pickup-id"]}>
              <h2>{p.type}</h2>
              <h2>{p["business-address"]}</h2>
              <h2>{p.amount}</h2>
              <h2>{p["business-name"]}</h2>
              {p["volunteer-info"] === null ? (
                <h2>No Volunteer Assigned Currently</h2>
              ) : (
                <h2>{p["volunteer-info"]}</h2>
              )}
              <h2>{date(p["pickup-date"]).format("ll")}</h2>
              <h2>{p["business-phone"]}</h2>
              <button onClick={() => editPickup(p)}>Edit</button>
              <button>Delete</button>
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

// return (
//     <div>
//       <div className="container">
//         <div className="pickups-container">
//           <h2>{pickup.type}</h2>
//           <h2>{pickup["business-phone"]}</h2>
//           <h2>{pickup["business-name"]}</h2>
//           <h2>{pickup["business-address"]}</h2>
//           <h2>{pickup["amount"]}</h2>
//           {pickup["volunteer-info"] === null ? (
//             <h2>No Volunteer Assigned Currently</h2>
//           ) : (
//             <h2>{pickup["volunteer-info"]}</h2>
//           )}
//           <h2>{date(pickup["pickup-date"]).format("ll")}</h2>
//           {isEditing ? (
//             <EditPickup
//               picks={picks}
//               pickup={pickup}
//               setPickups={setPickups}
//               setIsEditing={setIsEditing}
//               id={pickup["pickup-id"]}
//               type={pickup.type}
//               amount={pickup.amount}
//               date={date(pickup["pickup-date"]).format("ll")}
//               newDate={pickup["pickup-date"]}
//             />
//           ) : (
//             <>
//               <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
//               <button>Delete</button>
//             </>
//           )}
//         </div>
//       </div>
//       <button onClick={() => push("/add-pickup")}>Add Pickup</button>
//     </div>
//   );

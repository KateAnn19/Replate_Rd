//this will display a particular businesse's profile
//the business will be able to edit their profile which includes their name, phone number and address
//if the business updates any of their information the updated information will also effect the pickups they
//have in progress whether it is accepted by a volunteer or if it is on the pickup list unassigned
//the business will be able to edit or delete pickups they have created
//the businesse's profile will display the pickups they have created along with the volunteer info that has agreed to pick it up ////if a volunteer is assigned and if a volunteer is not assigned then this information is blank
//the pickups data will include ...
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

//styles
import "../styles/pickups.css";

const date = require('moment');

let fakeProfile = {
  name: "Ikea",
  username: "Ikea-Gives",
  phone: "777-333-2222",
  address: "2 Swedish Lande, CA 7315",
  role: "donor",
};

// ---------------------------------------------------
// Dummy Data to be ignored
//----------------------------------------------------
// let fakePickups = [
//   {
//     type: "Bread",
//     amount: "2 pounds",
//     pickupTime: "May 3, 2022",
//   },
//   {
//     type: "Fruit",
//     amount: "6 pounds",
//     pickupTime: "June 5, 2022",
//   },
//   {
//     type: "Cereal",
//     amount: "5 pounds",
//     pickupTime: "June 23, 2022",
//   },
// ];
// ---------------------------------------------------
// Dummy Data to be ignored
//----------------------------------------------------

function BusinessProfile() {
  const [profile, setProfile] = useState(fakeProfile);
  const [pickups, setPickups] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    // make a GET request to fetch the data
    // pass the token with the request on the Authorization request header
    axiosWithAuth()
      .get("pickups")
      .then((res) => {
       console.log(res);
        setPickups(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

 
  //add pickup
  const editBusProfile = () => {
       //edit profile
  };

  const editPickup = () => {
      //edit pickup
  };

  const deletePickup = () => {
    //delete pickup
};

  const deleteBusProfile = () => {
      //delete profile
  };

  return (
    <div>
      <h3>{profile.name}</h3>
      <h3>{profile.address}</h3>
      <h3>{profile.phone}</h3>
      <h3>{profile.username}</h3>
      <h2>Current Pickups</h2>
        <div className="container">
        {pickups.map((pickup) => (
          <div key={pickup["pickup-id"]} className="pickups">
              <div className="pickups-container">
            <h2>{pickup.type}</h2>
            <h2>{pickup["business-phone"]}</h2>
            <h2>{pickup["business-name"]}</h2>
            <h2>{pickup["business-address"]}</h2>
            <h2>{pickup["amount"]}</h2>
           {pickup["volunteer-info"] === null ? <h2>No Volunteer Assigned Currently</h2>:<h2>{pickup["volunteer-info"]}</h2>}
            <h2>{date(pickup["pickup-date"]).format('ll')}</h2>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => push("/add-pickup")}>Add Pickup</button>
      <button onClick={editBusProfile}>Edit Profile</button>
      <button onClick={deleteBusProfile}>Delete Profile</button>
    </div>
  );
} //end businessProfile

export default BusinessProfile;



//------------------------------------------------------
//this is for testing purposes and can be ignored
//------------------------------------------------------

// eslint-disable-next-line no-lone-blocks
{/* <div className="container">
        {pickups.map((pickup) => (
          <div className="pickups">
            <div className="pickups-container">
              <h2>{pickup.type}</h2>
              <h2>{pickup.amount}</h2>
              <h2>{pickup.pickupTime}</h2>
            </div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div> */}

//------------------------------------------------------
//this is for testing purposes and can be ignored
//------------------------------------------------------
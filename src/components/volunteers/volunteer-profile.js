//this will display a particular volunteers profile
//the volunteer will be able to edit their profile which includes their name and phone number
//if the volunteer updates their profile and they have pickups in progress it should also update on the business that owns that /////pickup
//the volunteer will be able to go to the list of pickups and add a pickup
//the volunteer's profile will display the pickups they have agreed to pickup
//the pickups data will include ...
//the volunteer cannot edit the pickup, but they can delete it from their profile

import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
//styles
import "../styles/pickups.css";

const date = require("moment");

let fakeProfile = {
  name: "Tracy",
  username: "Tracy-Volunteers",
  phone: "909-808-1010",
  role: "volunteer",
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

function VolunteerProfile() {
  const [profile, setProfile] = useState(fakeProfile);
  const [pickups, setPickups] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    // make a GET request to fetch the data
    // pass the token with the request on the Authorization request header
    getData();
    getProfileDetails();
  }, []);

  //add pickup

  const getData = () => {
    axiosWithAuth()
      .get("pickups")
      .then((res) => {
        console.log(res);
        setPickups(res.data);
      })
      .catch((err) => console.log(err.response));
  };

  const getProfileDetails = () => {
    axiosWithAuth()
      .get("volunteers")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const deletePickup = () => {
    //delete pickup from profile
  };

  const editVolProfile = () => {
    //edit profile
  };

  const deleteVolProfile = () => {
    //delete profile
    axiosWithAuth()
      .delete("volunteers")
      .then((res) => {
        console.log(res);
        push('/logout')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>{profile.name}</h3>
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
              <h2>{date(pickup["pickup-date"]).format("ll")}</h2>
            </div>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => push("/pickup-list")}>Add Pickup</button>
      <button onClick={editVolProfile}>Edit Profile</button>
      <button onClick={deleteVolProfile}>Delete Profile</button>
    </div>
  );
} //end volunteerProfile

export default VolunteerProfile;

//----------------------------------------------------
// for testing purposes - can be ignored
//----------------------------------------------------

// eslint-disable-next-line no-lone-blocks
{
  /* {pickups.map((pickup) => (
          <div className="pickups">
            <div className="pickups-container">
              <h2>{pickup.type}</h2>
              <h2>{pickup.amount}</h2>
              <h2>{pickup.pickupTime}</h2>
            </div>
            <button onClick={deletePickup}>Delete</button>
          </div>
        ))} */
}
//----------------------------------------------------
// for testing purposes - can be ignored
//----------------------------------------------------

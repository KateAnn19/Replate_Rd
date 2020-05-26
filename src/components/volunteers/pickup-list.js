//this will make a get request to display all the pickups
import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import moment from 'moment';

import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

import "../styles/pickup-list.css";

//----------------------------------------------------
//this is just fake data for testing - can ignore
//----------------------------------------------------

// let fakePickups = [
//   {
//     type: "Bread",
//     amount: "1 pound",
//     pickUpTime: "May 2, 2022",
//     business: "Target",
//   },
//   {
//     type: "Eggs",
//     amount: "2 carts",
//     pickUpTime: "July 4, 2023",
//     business: "Safeway",
//   },
//   {
//     type: "Chips",
//     amount: "16 bags",
//     pickUpTime: "September 2, 2022",
//     business: "Ikea",
//   },
//   {
//     type: "Soda",
//     amount: "2 liters",
//     pickUpTime: "October 2, 2022",
//     business: "Walmart",
//   },
// ];
//----------------------------------------------------
//this is just fake data for testing - can ignore
//----------------------------------------------------

const date = require('moment');


const PickUpList = () => {
  const [pickups, setPickups] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    // make a GET request to fetch the data
    // pass the token with the request on the Authorization request header
    axiosWithAuth()
      .get("/pickups/all/unassigned")
      .then((res) => {
       console.log(res);
        setPickups(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div>
      <div className="pickup-container">
        {pickups.map((pickup) => (
          <div key={pickup["pickup-id"]} className="pickups">
            <h2>{pickup.type}</h2>
            <h2>{pickup["business-phone"]}</h2>
            <h2>{pickup["business-name"]}</h2>
            <h2>{pickup["business-address"]}</h2>
            <h2>{date(pickup["pickup-date"]).format('ll')}</h2>
            <button>Accept</button>
          </div>
        ))}
      </div>
      <button onClick={() => push("/volunteer-profile")}>
        Back to Profile
      </button>
    </div>
  );
};

export default PickUpList;

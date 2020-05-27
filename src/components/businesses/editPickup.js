//this is a form that will allow the business to edit a pickup on their profile
//when the business creates a new pickup it will also display an edit button
//it will also display on the business profile

import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const EditPickup = ({
  id,
  picks,
  pickup,
  setPickups,
  setIsEditing,
  type,
  amount,
  date,
  newDate,
}) => {
  const [editPickup, setEditPickup] = useState({
    "pickup-id": id,
    "type": type,
    "amount": amount,
    "pickup-date": date,
  });
  const { push } = useHistory();

  console.log(editPickup)

//   useEffect(() => {
//     // make a GET request to fetch the data
//     // pass the token with the request on the Authorization request header
//     setEditPickup({
//       "pickup-id": id,
//       "type": type,
//       "amount": amount,
//       "pickup-date": date,
//     });
//   }, []);

  //   {
  //     "pickup-id": 13,
  //     "type": "naan",
  //     "amount": "20kg ",
  //     "pickup-date": "2020-05-30T05:00:00.000Z"
  // }

  console.log(editPickup);

  const handleChange = (e) => {
    setEditPickup({
      ...editPickup,
      [e.target.name]: e.target.value,
    });
  };

  const edit = (e) => {
    setIsEditing(false);
  };
  const updatePickup = (e) => {
    axiosWithAuth()
      .put(`pickups/${id}`, editPickup)
      .then((response) => {
        setPickups([...picks, response]);
        setTimeout(function () {
          setIsEditing(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="addPlateForm">
      <form onSubmit={updatePickup}>
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          name= "type"
          value={editPickup["type"]}
          onChange={handleChange}
        />

        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          onChange={handleChange}
          name="amount"
          value={editPickup["amount"]}
        />

        <label htmlFor="pickup-date">Pickup Date</label>
        <input
          id="pickup-date"
          onChange={handleChange}
          type="text"
          name="pickup-date"
          placeholder="yyyy-mm-dd"
        //   value={editPickup["pickup-date"]}
        />

        <button type="submit">Add Updated Pickup</button>
      </form>
      <button onClick={edit}>X</button>
    </div>
  );
};

export default EditPickup;

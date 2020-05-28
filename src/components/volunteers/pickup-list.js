// this will make a get request to display all the pickups
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom"; //this can be used to easily navigate to a certain page

// this is so the request is authenticated. Look at the addPickup form you created to see how to correctly implement this on your get request 
import { axiosWithAuth } from "../../utils/axiosWithAuth"; 

import "../styles/pickup-list.css";

const date = require('moment');  //this is to format the date so it shows up more nicely. I can show you how it works if you are
//having trouble with it. If you look at Gordon's back-end repo docs in our Replate project he gives an example of exactly how to set this up which is how I have it here. You'll just need to wrap the date response you get back from your get request with this variable. It's a little tricky so don't worry if you have trouble. We'll go through it. 

const PickUpList = () => {
  const [pickupList, setPickupList] = useState([])
  const source = "/pickups/unassigned"

  // GET the data that represents orders to be picked up
  useEffect(() => {
    getPickupList();
  }, []);
  
  const getPickupList = () => {
    axiosWithAuth()
    .get("/pickups/unassigned")
    .then((res) => {
      setPickupList(res.data)
    })
    .catch((err) => console.error(err));
  };
  
  const { push } = useHistory();


  //make your get request here
  //display the data 
  //the data we want displayed is 
  //type
  //"business-phone"
  //"business-name"
  //"business-address"
  //"pickup-date" 
  
  //getting the data to display may be a little tricky. Remember there are two ways to access an object... with dot notation
  //and with bracket notation. 
  
  
  return (
    <div> 
    {pickupList.map(item => {
      return (
        <div key={item['pickup-id']}>
        <h1>{item['business-name']}</h1>
        <p>{item['business-address']}<br />
        {item['business-phone']}<br />
        {item['amount']} of {item['type']}<br />
        {item['pickup-date'].slice(0,10)}</p>
        </div>)
    })}    
    <button onClick={() => push("/volunteer-profile")}>
    Back to Profile
    </button>&nbsp;
    <button onClick={() => console.log('Pickup accepted')}>Accept pickup</button>
    </div>
    );
  };
  
  
  export default PickUpList;


  //----------------------------------------------------
  //this is just fake data for testing - can ignore
  //----------------------------------------------------
  
  
  // const onSubmit = (formData) => {
  
  //   //   e.preventDefault()
  //   axiosWithAuth()
  //     .post("pickups", formData)
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err.response))
  
  //     // Clear the form
  //     console.log(register)
  //     reset()
  // }
  
  
  
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






//this will make a get request to display all the pickups
import React, { useState, useEffect } from "react";


import { useHistory } from "react-router-dom"; //this can be used to easily navigate to a certain page

import { axiosWithAuth } from "../../utils/axiosWithAuth"; //this is so the request is authenticated. Look at the addPickup form you created to see how to correctly implement this on your get request 

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

const date = require('moment');  //this is to format the date so it shows up more nicely. I can show you how it works if you are
//having trouble with it. If you look at Gordon's back-end repo docs in our Replate project he gives an example of exactly how to set this up which is how I have it here. You'll just need to wrap the date response you get back from your get request with this variable. It's a little tricky so don't worry if you have trouble. We'll go through it. 

const PickUpList = () => {
  
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
        
        
        <button onClick={() => push("/volunteer-profile")}>
          Back to Profile
        </button>
      </div>
    );
  };


export default PickUpList;

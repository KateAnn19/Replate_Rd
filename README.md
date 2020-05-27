//this is a form that will allow the business to add a pickup to their profile
//when the business creates a new pickup it will also display on the pickup list 
//it will also display on the business profile


// let initialState = {
//     "amount": '',
//     "pickup-date": '',
//     "type": ''
// }


import React, { useState, useEffect } from "react";
//import Moment from 'react-moment';
//import moment from 'moment';
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

let pickup = [];

let initialState = {
    "amount": '',
    "pickup-date": '',
    "type": ''
}

const AddPickup = () => {
  const [newPickup, setPickup] = useState(initialState);
  const { push } = useHistory();
  
  console.log(newPickup)
  
  const handleChange = (e) => {
      setPickup({
          ...newPickup,
          <!-- [e.target.name]: e.target.value -->
      });
    };
    
  const addPickup = e => {
      e.preventDefault();
      axiosWithAuth()
      .post("pickups", newPickup)
      .then(response => {
        <!-- pickup = [{...response.data}] -->
        console.log(response)
        push('/business-profile')
      })
      .catch(err => {
        console.log(err)
      });
  }
    
    return (
      <div className="addPlateForm">
        <form onSubmit={addPickup}>
          <label htmlFor="type">Type</label>
          <input id="type" type="text" name="type" onChange= {handleChange} placeholder="type"/>
  
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="text" onChange= {handleChange} name="amount" placeholder="amount"/>
      
          <label htmlFor="pickup-date">Pickup Date</label>
          <input id="pickup-date" onChange= {handleChange} type="text" name="pickup-date" placeholder="yyyy-mm-dd"/>
                   
          <button type="submit">Add Pickup</button>
        </form>
        <button onClick={() => push('/business-profile')}>Back To Profile</button>
      </div>
    );
  };
  
  
    
  export default AddPickup;
  



//pickup list get --- testing purposes only 


const PickUpList = () => {
  
  const { push } = useHistory();

  

 

  return (
    <!-- <div> -->
      
      
      <button onClick={() => push("/volunteer-profile")}>
        Back to Profile
      </button>
    </div>
  );
};


const [pickups, setPickups] = useState([]);  

useEffect(() => {
    // make a GET request to fetch the data
    // pass the token with the request on the Authorization request header
    axiosWithAuth()
      .get("/pickups/unassigned")
      .then((res) => {
       console.log(res);
        setPickups(res.data);
      })
      .catch((err) => console.log(err.response));
  }, []);



  <!-- <div className="pickup-container">
        {pickups.map((pickup) => (
          <div id={pickup["pickup-id"]} key={pickup["pickup-id"]} className="pickups">
            <h2>{pickup.type}</h2>
            <h2>{pickup["business-phone"]}</h2>
            <h2>{pickup["business-name"]}</h2>
            <h2>{pickup["business-address"]}</h2>
            <h2>{date(pickup["pickup-date"]).format('ll')}</h2>
            <button onClick={() => 
            //e.preventDefault()
            //console.log(pickup["pickup-id"])
            axiosWithAuth()
            .put(`pickups/assign/${pickup["pickup-id"]}`, {"volunteer-id" :"assign"})
            .then((res) => {
                //add a successfully assigned to profile message
              push("/volunteer-profile")
            })
            .catch((err) => console.log(err.response))
            }>Accept</button>
          </div>
        ))} -->

    </div>
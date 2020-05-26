//add pickup test form 

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
  


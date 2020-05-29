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


    --------------------------------------
    for addPickup 
    -------------------------------------------
        setTimeout(function () {
          push("/business-profile");
        }, 1000);
      })
      .catch((err) => console.log(err.response));
  };



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



  //-----------------------------------------------------------------------------------
  // Functions and state that was in my components that now live in Redux
  //-----------------------------------------------------------------------------------


  // inside business-profile

 const [profile, setProfile] = useState(fakeProfile);

  // const getProfileDetails = () => {
  //   axiosWithAuth()
  //     .get("donors")
  //     .then((res) => {
  //       console.log("profile details")
  <!-- //       setProfile({ address: res.data["business-address"], name: res.data["business-name"], phone: res.data["business-phone"], username: res.data["username"], id: res.data["business-id"] }); -->
  //       setTimeout(function () {
  //         setIsLoaded(true);
  //       }, 1000);
  //     })
  //     .catch((err) => console.log(err));
  // };



const deleteBusProfile = () => {
    //delete profile
    axiosWithAuth()
      .delete("donors")
      .then((res) => {
        console.log(res);
        push("/logout");
      })
      .catch((err) => console.log(err));
  };




  //inside business

  // const deletePickup = (id) => {
  //   //delete pickup
  //   axiosWithAuth()
  //     .delete(`pickups/${id}`)
  //     .then((res) => {
  //       update();
  //       setIsLoading(true);
  //       push('/business-profile');
  //         go(0)
  //       setTimeout(function () {
  //         setIsLoading(false);
  //       }, 1000);
  //     })
  //     .catch((err) => console.log(err));
  // };


  //inside volunteer-profile 

const [profile, setProfile] = useState({});

  // const getProfileDetails = () => {
  //   axiosWithAuth()
  //     .get("volunteers")
  //     .then((res) => {
  //       console.log("profile details", res);
  <!-- //       setProfile({
  //         name: res.data["volunteer-name"],
  //         phone: res.data["volunteer-phone"],
  //         username: res.data["username"],
  //         id: res.data["volunteer-id"],
  //       }); -->
  //       setTimeout(function () {
  //         setIsLoaded(true);
  //       }, 1000);
  //     })
  //     .catch((err) => console.log(err));
  // };


  // const deleteVolProfile = () => {
  //   //delete profile
  //   axiosWithAuth()
  //     .delete("volunteers")
  //     .then((res) => {
  //       console.log(res);
  //       push("/logout");
  //     })
  //     .catch((err) => console.log(err));
  // };


  // const login = (e) => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post("auth/login", loginInfo)
//     .then((res) => {
//       console.log(res)
//       localStorage.setItem("token", res.data.token);
//       console.log(localStorage.getItem("token"))
//       //if volunteer push to volunteer profile
//       //if business push to business profile
//       // eslint-disable-next-line no-lone-blocks
      
//       // eslint-disable-next-line no-lone-blocks
//       {loginInfo.role === 'business' ? push("/business-profile") : push("/volunteer-profile")} //we will want to push to volunteer page if volunteer and donor page if donor
      
//     })
//     .catch((err) => console.log(loginInfo.error));
// };
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const EditProfileForm = ({ setToggle, profile }) => {
  const [editProfile, setEditedProfile] = useState({
    address: profile["business-address"],
    name: profile["business-name"],
    phone: profile["business-phone"],
    username: profile["username"],
    id: profile["business-id"],
  });
  const { push } = useHistory();
  console.log("HERE", profile);
  console.log(editProfile);

  const handleChange = (e) => {
    setEditedProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  };

  const exit = (e) => {
    setToggle(false);
  };

  const editBusProfile = (e) => {
    //edit profile

    axiosWithAuth()
      .put("donors", editProfile)
      .then((res) => {
        console.log("IINSDIE BUSINESS", res);
        //getData()
        //add a successfully assigned to profile message
        push("/business-profile");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="">
      <form onSubmit={editBusProfile}>
        <label htmlFor="type">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={editProfile.name}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          onChange={handleChange}
          name="phone"
          value={editProfile.phone}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          onChange={handleChange}
          name="address"
          value={editProfile.address}
        />
        <button type="submit">Add Updated Profile Information</button>
      </form>
      <button onClick={exit}>X</button>
    </div>
  );
};

export default EditProfileForm;

import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

//styles
import "./styles/login.css";

import { connect } from "react-redux";
import { login } from "./store/actions/index";

let initialState = {
  username: "",
  password: "",
  role: "",
};

const Login = () => {
  const { push } = useHistory();
  const [loginInfo, setLoginInfo] = useState(initialState);

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log("This is login form", loginInfo);
 
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("auth/login", loginInfo)
      .then((res) => {
        console.log("This is response", res);
        localStorage.setItem("token", res.data.token);
        //if volunteer push to volunteer profile
        //if business push to business profile
        // eslint-disable-next-line no-lone-blocks

        // eslint-disable-next-line no-lone-blocks
        {
          loginInfo.role === "business"
            ? push("/business-profile")
            : push("/volunteer-profile");
        } //we will want to push to volunteer page if volunteer and donor page if donor
      })
      .catch((err) => console.log(loginInfo.error));
  };

  return (
    <div>
      <h1 className="replate-header">Replate</h1>
      <form className="login" onSubmit={login}>
        <input
          type="text"
          name="username"
          value={loginInfo.username}
          onChange={handleChange}
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          placeholder="password"
        />
        <label htmlFor="role">
          Please Select
          <select id="role" name="role" onChange={handleChange}>
            <option value=""></option>
            <option value="volunteer">Volunteer</option>
            <option value="business"> Business</option>
          </select>
        </label>
        <button>Submit Form</button>
      </form>
      <h2>Login</h2>
      <h2>New to Replate?</h2>
      <h2>Register Below</h2>
      <button onClick={() => push("/business-registration")}>
        Register as a Business
      </button>
      <button onClick={() => push("/volunteer-registration")}>
        Sign Up as a Volunteer
      </button>
    </div>
  );
};

export default Login;

//.post("/pickups", newPickup)

//api/pickups/unassigned (list unassigned)

//get pickups (list of pickups) - volunteer information if associated w/pickup if it has it (volunteer can see on profile)

//post pickups (working)
// businesses (working)

//business (get) (if logged in as a business)
//business can create a pickup (post) (if logged in as business)

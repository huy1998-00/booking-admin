import React from "react";

import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/user";
import { getHotel } from "../redux/hotel";
import { getTrans } from "../redux/trans";
import { getRoom } from "../redux/room";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");

  const handleUser = (e) => {
    setemail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async () => {
    const request = await axios
      .post(`http://localhost:5000/admin/login`, {
        email: email,
        password: pass,
      })
      .then((result) => {
        dispatch(getUser());
        dispatch(getHotel());
        dispatch(getTrans());
        dispatch(getRoom());
        alert("dang nhap thanh cong");
        navigate("/admin");
      })
      .catch((err) => {
        setemail("");
        setPass("");
        alert(err.response.data);
      });
  };

  return (
    <div className="login_container">
      <div className="login_items">
        <label> Email:</label>
        <input
          type="text"
          name="email"
          id="user"
          value={email}
          onChange={handleUser}
        />
      </div>
      <div>
        <label> Password:</label>
        <input
          type="text"
          name="password"
          id="pass"
          value={pass}
          onChange={handlePass}
        />
      </div>
      <button onClick={handleSubmit}>Login </button>
    </div>
  );
};

export default Login;

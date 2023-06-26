import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const Register = ({isToken}) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isToken) {
      navigate("/")
   }
  },[])



  const registerOperation = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const {token} = await response.json();
      dispatch(login(token))

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>REJESTRACJA</h1>
      <form onSubmit={registerOperation}>
        <label htmlFor="name">NAZWA UŻYTKOWNIKA:</label>
        <input
          name="name"
          id="name"
          value={registerData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">E-MAIL:</label>
        <input
          name="email"
          id="email"
          value={registerData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">HASŁO:</label>
        <input
          name="password"
          id="password"
          value={registerData.password}
          onChange={handleChange}
        />
        <button type="submit">PRZEŚLIJ</button>
      </form>
    </>
  );
};

export default Register;

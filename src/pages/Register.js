import React, { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      const data = await response.json();
      console.log(data);
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

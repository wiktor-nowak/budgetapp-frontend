import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useRegisterUserMutation } from "../features/api/userApi";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const registerOperation = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await registerUser(registerData);
      dispatch(login(token));
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
        <p>
          MASZ JUŻ KONTO? <Link to="/login">ZALOGUJ</Link>
        </p>
      </form>

      {isLoading && <p>Przetwarzanie.....</p>}
      {isError && <p>Nie udało się zarejestrować</p>}
    </>
  );
};

export default Register;

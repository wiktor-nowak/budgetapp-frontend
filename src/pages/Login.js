import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../features/api/userApi";
import { login } from "../features/auth/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const [loginUser, { isError, isLoading }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await loginUser(loginData);
      dispatch(login(token));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-MAIL:</label>
        <input
          name="email"
          id="email"
          value={loginData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">HASŁO:</label>
        <input
          name="password"
          id="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">ZALOGUJ</button>
        <p>
          NIE MASZ KONTA? <Link to="/register">ZAREJESTRUJ</Link>
        </p>
      </form>

      {isLoading && <p>Przetwarzanie.....</p>}
      {isError && <p>Nie udało się zalogować</p>}
    </>
  );
};

export default Login;

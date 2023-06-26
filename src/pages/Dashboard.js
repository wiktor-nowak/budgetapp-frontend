import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  return <div>
    <h3>Siema</h3>
    <div>
      <p>Oto moja wersja strony</p>
      <button onClick={()=>dispatch(logout())}>Wyloguj się</button>
    </div>
  </div>;
};

export default Dashboard;

import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useGetUserQuery } from "../features/api/userApi";


const Dashboard = () => {
  const dispatch = useDispatch();
  const {data, isLoading, isError} = useGetUserQuery();

  return <div>
    {isLoading ? <p>Loading...</p> : (
      <>
         <h3>{data.user.user_name}</h3>
         <p>{data.user.user_email}</p>
      </>
    )}
    <div>
      <p>Oto moja wersja strony</p>
      <button onClick={()=>dispatch(logout())}>Wyloguj się</button>
    </div>
    {isError && <p>Błąd pobierania. Skontakuj się z administratorem</p>} 
  </div>;
};

export default Dashboard;

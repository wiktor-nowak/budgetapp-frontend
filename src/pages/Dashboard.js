import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useGetUserQuery } from "../features/api/userApi";
import {
  useGetExpensesQuery,
  useGetSumQuery,
} from "../features/api/expensesApi";
import ExpenseCard from "../features/expenses/ExpenseCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetUserQuery();
  const {
    data: expensesData,
    isLoading: isLoadingExpense,
    isError: isErrorExpense,
    refetch,
  } = useGetExpensesQuery();
  console.log(expensesData);
  const {
    data: balance,
    isLoading: isLoadingSum,
    isError: isErrorSum,
  } = useGetSumQuery();
  console.log(balance);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{data.user.user_name}</h3>
          <p>{data.user.user_email}</p>
        </>
      )}
      <div>
        {isLoadingSum ? (
          <p>Loading...</p>
        ) : (
          <h2>SUMA WYDATKÓW: {balance.balance.sum} PLN</h2>
        )}
        <button onClick={() => dispatch(logout())}>Wyloguj się</button>
      </div>
      {isError && <p>Błąd pobierania. Skontakuj się z administratorem</p>}

      <br />

      {isLoadingExpense ? (
        <p>Expenses Loading...</p>
      ) : (
        expensesData.expenses.map((expense) => (
          <ExpenseCard key={expense.expense_id} {...expense} />
        ))
      )}
      <p>
        <Link to="/add-expense">DODAJ</Link> NOWY REKROD DO BAZY
      </p>
    </div>
  );
};

export default Dashboard;

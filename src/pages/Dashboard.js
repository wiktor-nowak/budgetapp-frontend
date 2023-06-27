import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useGetUserQuery } from "../features/api/userApi";
import { useGetExpensesQuery } from "../features/api/expensesApi";
import ExpenseCard from "../features/expenses/ExpenseCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetUserQuery();
  const {
    data: expensesData,
    isLoading: isLoadingExpense,
    isError: isErrorExpense,
  } = useGetExpensesQuery();
  console.log(expensesData);

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
        <p>Oto moja wersja strony</p>
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
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { useAddExpenseMutation } from "../features/api/expensesApi";
import { useNavigate } from "react-router-dom";

const AddExpense = () => {
  const [newExpense, setNewExpense] = useState({
    category: "",
    title: "",
    amount: 0,
  });

  const navigate = useNavigate();

  const [addExpense, { isLoading: isLoadingAdd, isError: isErrorAdd }] =
    useAddExpenseMutation();

  const addExpenseOperation = async (e) => {
    e.preventDefault();
    try {
      const data = await addExpense(newExpense);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>DODAJ REKORD</h1>
      <form onSubmit={addExpenseOperation}>
        <label htmlFor="amount">KWOTA: </label>
        <input
          name="amount"
          id="amount"
          value={newExpense.amount}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">KATEGORIA: </label>
        <input
          name="category"
          id="category"
          value={newExpense.category}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">TYTUŁ: </label>
        <input
          name="title"
          id="title"
          value={newExpense.title}
          onChange={handleChange}
        />
        <br />
        <button type="submit">DODAJ</button>
        {/* <button type="">EDYTUJ</button> */}
      </form>

      {isLoadingAdd && <p>Dodawanie....</p>}
      {isErrorAdd && <p>Nie udało się dodać rekordu!</p>}
    </>
  );
};

export default AddExpense;

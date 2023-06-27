import React from "react";
import { useDeleteExpenseMutation } from "../api/expensesApi";

const ExpenseCard = ({
  expense_amount,
  expense_category,
  expense_title,
  expense_date,
  expense_id:id,
  deleteExpense
}) => {


  // console.log(res)



  return (
    <div>
      <span>Kwota: {expense_amount}</span>
      <br />
      <span>Kategoria: {expense_category}</span>
      <br />
      <span>Opis: {expense_title}</span>
      <br />
      <span>Data: {expense_date}</span>
      <br />
      <button>ZMIEŃ</button>
      <button onClick={deleteExpense}>USUŃ</button>
      <br />
    </div>
  );
};

export default ExpenseCard;

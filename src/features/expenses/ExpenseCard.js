import React from "react";

const ExpenseCard = ({
  expense_amount,
  expense_category,
  expense_title,
  expense_date,
}) => {
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
      <button>USUŃ</button>
      <br />
    </div>
  );
};

export default ExpenseCard;

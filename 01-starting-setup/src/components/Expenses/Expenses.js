import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (filterData) => {
    setFilteredYear(filterData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterAction={filterHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key ={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (filterData) => {
    setFilteredYear(filterData);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ol>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterAction={filterHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </ol>
  );
};
export default Expenses;

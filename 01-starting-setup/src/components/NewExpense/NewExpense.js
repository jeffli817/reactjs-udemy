import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showFlag, setShowFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setShowFlag(false);
  };

  const showHandler = () => {
    setShowFlag(true);
  };

  const stopShowHandler = () => {
    setShowFlag(false);
  };

  return (
    <div className="new-expense">
      {!showFlag && <button onClick={showHandler}>Add New Expense</button>}
      {showFlag && (
        <ExpenseForm
          onCancel={stopShowHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

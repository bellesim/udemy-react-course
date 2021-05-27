import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  //default value = 2020 via selected
  const [filteredYear, setFilteredYear] = useState("2020");

  //Change the dropdown filter option and update the filteredYear
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  //Filtered year return new array
  //Passing expense from ExpensesFilter 
  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense);
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //Conditional statements 
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        //special prop key
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  //change the state and event
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
};
export default Expenses;

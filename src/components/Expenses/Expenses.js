import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

 
  //change the state and event
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;

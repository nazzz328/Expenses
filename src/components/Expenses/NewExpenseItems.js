import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../Card/Card";
import "./NewExpenseItems.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenseItems(props) {
  const defaultYear = 2020;
  const [year, setYear] = useState(`${defaultYear}`);
  const selectYearHandler = (filterYear) => {
    setYear(filterYear);
  };
  const filteredExpenses = props.expenses.filter(
    (ex) => ex.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter default={year} onSelectYear={selectYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default NewExpenseItems;

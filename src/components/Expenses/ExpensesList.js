import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expense found</h2>;

  return (
    <ul className="expenses-list">
      {props.items.map((ex) => (
        <ExpenseItem
          title={ex.title}
          amount={ex.amount}
          date={ex.date}
          key={ex.id}
        />
      ))}
    </ul>
  );
}

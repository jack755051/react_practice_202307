import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("test!!!test");

  const clickerHandler = () => {
    setTitle("Update!!!");
    console.warn("I'm Johnny!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickerHandler}>Click me</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

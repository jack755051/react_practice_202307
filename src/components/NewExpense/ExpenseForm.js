import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const TitleChanger = (event) => {
    //此種方式可能會取道過時或不正確的快照
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.title.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.title.value };
    });
  };

  const inputChangedHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (identifier === "date") {
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    console.warn(expenseData);

    props.onSaveExpenseData(expenseData);
    //提交後需要將所有重製
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={(event) => {
                inputChangedHandler("title", event.target.value);
              }}
            />
          </div>

          <div className="new-expense__control">
            <label>amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={(event) => {
                inputChangedHandler("amount", event.target.value);
              }}
            />
          </div>

          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={(event) => {
                inputChangedHandler("date", event.target.value);
              }}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default ExpenseForm;

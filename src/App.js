import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  //radom number

  const expenses = [
    {
      id: "e1",
      title: "March Rent Cost",
      amount: 15000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 300,
      date: new Date(2021, 2, 1),
    },
    {
      id: "e3",
      title: "Meal Cost (Breakfast / Lunch / Dinner)",
      amount: 7500,
      date: new Date(2021, 2, 16),
    },
    {
      id: "e4",
      title: "Drink (Water / Whisky / Sake)",
      amount: 600,
      date: new Date(2021, 2, 3),
    },
    {
      id: "e5",
      title: "Game (Steam / PS5 installments 7/12)",
      amount: 1450,
      date: new Date(2021, 2, 20),
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log("InApp.js");
    console.log("expenses", expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

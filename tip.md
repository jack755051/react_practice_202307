## 小技巧

1.  花括號中不允許存在 if 或 for 等條件判斷，僅允許三元表達式

        {filteredExpenses.length === 0 ? (
          <p>No expense found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
2. 以上呈現之三元表達式不好閱讀，可以調整為雙條件式，有點像angular當中的*ngIf

        {filteredExpenses.length === 0 && <p>No expense found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}

3. 或者將其狀態存為變量

  let expensesContent = <p>No expense found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

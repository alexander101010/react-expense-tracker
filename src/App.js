// import ExpenseItem from './components/ExpenseItem';
import { useState } from 'react';
import ExpenseList from './components/Expenses/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Emma Matras',
      amount: 800,
      date: new Date(2021, 5, 20),
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (addedExpense) => {
    console.log('In App.js');
    console.log(addedExpense);
    // expenses.push(addedExpense);
    setExpenses((prevState) => [...prevState, addedExpense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpenseList expenses={expenses} /> */}
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

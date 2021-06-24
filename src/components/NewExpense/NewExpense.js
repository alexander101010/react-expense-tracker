import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // good enough id for this demo but could have repeats theoretically, and the ids will be unordered
    };
    props.onAddExpense(expenseData);
    setFormShow(false);
  };

  const cancelClickHandler = () => {
    setFormShow(false);
  };

  const formButtonClickHandler = () => {
    setFormShow(true);
  };

  const form = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={cancelClickHandler}
    />
  );

  const formButton = (
    <button onClick={formButtonClickHandler}>Add New Expense</button>
  );

  return <div className='new-expense'>{formShow ? form : formButton}</div>;
};

export default NewExpense;

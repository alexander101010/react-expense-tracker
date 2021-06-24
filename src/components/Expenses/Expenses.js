import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = ({ expenses }) => {
  const [filterSelection, setFilterSelection] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterSelection(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (exp) => exp.date.getFullYear() === parseInt(filterSelection, 10)
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filterSelection}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

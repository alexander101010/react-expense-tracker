import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './ExpenseList.css';

const ExpenseList = (props) => {
  const [filterSelection, setFilterSelection] = useState('2020');

  const handleFilterChange = (selectedYear) => {
    console.log(selectedYear, 'in ExpenseList');
    setFilterSelection(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        onFilterChange={handleFilterChange}
        selected={filterSelection}
      />
      {props.expenses.map((exp) => {
        return (
          <ExpenseItem
            date={exp.date}
            title={exp.title}
            amount={exp.amount}
            key={exp.id}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseList;

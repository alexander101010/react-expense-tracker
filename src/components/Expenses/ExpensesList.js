import React from 'react';

import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((exp) => {
        return (
          <ExpenseItem
            date={exp.date}
            title={exp.title}
            amount={exp.amount}
            key={exp.id}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;

import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <Card className='expenses'>
      {props.expenses.map((exp) => {
        return (
          <ExpenseItem date={exp.date} title={exp.title} amount={exp.amount} />
        );
      })}
    </Card>
  );
}

export default ExpenseList;

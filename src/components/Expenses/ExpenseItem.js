import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css'; // tells build process to consider this css

function ExpenseItem({ title, amount, date }) {
  // using destructuring with props
  // return (
  //   <div className='expense-item'>
  //     <ExpenseDate date={props.date} />
  //     <div className='expense-item__description'>
  //       <h2>{props.title}</h2>
  //       <div className='expense-item__price'>{`${props.amount}€`}</div>
  //     </div>
  //   </div>
  // );
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`${amount}€`}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

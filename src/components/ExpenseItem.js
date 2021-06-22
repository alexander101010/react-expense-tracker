// import React from 'react';
import './ExpenseItem.css'; // tells build process to consider this css

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className='expense-item'>
      <div>
        <div className='date-month'>{month}</div>
        <div className='date-year'>{year}</div>
        <div className='date-day'>{day}</div>
      </div>

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{`${props.amount}€`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

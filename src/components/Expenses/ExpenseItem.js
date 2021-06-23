import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css'; // tells build process to consider this css

const ExpenseItem = (props) => {
  // useState always returns an array with two values
  // first value is pointing at the value, second is a function that can be called to change the value
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New Title');
    // using this function from useState schedules a reevaluation and update of component
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{`${props.amount}€`}</div>
      </div>
      <button className='displayNone' onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;

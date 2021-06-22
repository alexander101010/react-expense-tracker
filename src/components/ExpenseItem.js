// import React from 'react';
import './ExpenseItem.css'; // tells build process to consider this css

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>June 15th, 2021</div>
      <div className='expense-item__description'>
        <h2>Emma Matras</h2>
        <div className='expense-item__price'>800€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

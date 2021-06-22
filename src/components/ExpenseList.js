import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <div className='expenses'>
      {props.expenses.map((exp) => {
        return (
          <ExpenseItem date={exp.date} title={exp.title} amount={exp.amount} />
        );
      })}
    </div>
  );
}

export default ExpenseList;

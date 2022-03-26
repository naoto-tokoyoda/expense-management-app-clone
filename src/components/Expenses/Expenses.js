import React, {useState} from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {
  //to make default settings of year
  const [filteredYear, setFilteredYear] = useState('2019');


  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  }

  //fetch data which items from App.js, and use filter() to return data
  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filterdExpenses} />

      {/* props.items has expense data in App.js and 
      using this dataa with map() and hand it to <ExpenseItem /> */}
      <ExpenseList items={filterdExpenses} />
     

    </Card>
  );
}

export default Expenses;
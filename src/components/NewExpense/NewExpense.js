import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            //all expense data and add id more
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //go to App.js
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {/* go to saveExpenseDataHandler function */}
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>   
        </div>
    )
}

export default NewExpense;
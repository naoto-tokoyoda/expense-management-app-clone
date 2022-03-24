import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [clickAdButton, setClickAdButton] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            //all expense data and add id more
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //go to App.js
        props.onAddExpense(expenseData);
    }

    const clickAddNewExpenseHandler = () => {
        setClickAdButton(true);
    }

    //after clicking cancel button, it will close ExpenseForm
    const closeAddNewExpenseHandler = () => {
        setClickAdButton(false);
    }

    return (
        <div className='new-expense'>

            {/* When clicking add new expense button, open the form. */}
            {!clickAdButton && <button onClick={clickAddNewExpenseHandler}>Add New Expence</button>}

            {/* go to saveExpenseDataHandler function */}
           {clickAdButton && <ExpenseForm 
                                onSaveExpenseData={saveExpenseDataHandler}
                                onCancel={closeAddNewExpenseHandler}
                                />}
        </div>
    )
}

export default NewExpense;
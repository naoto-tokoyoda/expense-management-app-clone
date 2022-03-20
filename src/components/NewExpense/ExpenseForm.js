import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    }    

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    } 

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    } 

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        //go to NewExpense.js
        props.onSaveExpenseData(expenseData);

        // remove data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                {/* title */}
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                        required
                    />
                </div>

                {/* Amount */}
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler} 
                        required
                        
                    />
                </div>

                {/* date */}
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                        required
                    />
                </div>
            </div>

             {/* submit button */}
             <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
        </form>
    )

}

export default ExpenseForm;
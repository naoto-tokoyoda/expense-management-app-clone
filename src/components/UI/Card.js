import React from "react";
import './Card.css';

function Card(props) {
    //to add class name to add CSS styling
    //do not forget about space after card because another class names will be added for each js file
    const classes = 'card ' + props.className;

    return (
            <div className={classes}>
                {/* this is from parent jsx so, ExpenseItem.js and Expenses.js are applied. */}
                {props.children}
            </div>
    )
}

export default Card;

import React, { useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//pass one parameter known as props
//props holds all attributes of the element
//props can access each attribute name
const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);

  const clickHandler = () => {
    //state updating function
    setTitle('Updated');
    console.log(title)
  }
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount} </div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
}
export default ExpenseItem;

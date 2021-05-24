import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//pass one parameter known as props
//props holds all attributes of the element
//props can access each attribute name
const ExpenseItem = (props) => {
    return (
      
    <Card className="expense-item">
          <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 className="expense-item">{props.title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
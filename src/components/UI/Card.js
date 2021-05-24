import './Card.css';

const Card = (props) =>{
    //adding expense-item css to card 
    const classes = ' card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}
export default Card;
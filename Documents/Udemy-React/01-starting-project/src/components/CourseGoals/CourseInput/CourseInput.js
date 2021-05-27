import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  //State changes
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  //Extract value entered
  const goalInputChangeHandler = (event) => {
    //When enter value, it will become valid
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  //preventDefault = prevent browser from executing the default function
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    //Add given goal value
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            "border-color": !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" >Add Goal</Button>
    </form>
  );
};

export default CourseInput;

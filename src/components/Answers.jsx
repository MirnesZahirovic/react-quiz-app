import classes from "./Answers.module.css";

import React from "react";
import Answer from "./Answer";

function Answers(props) {
  return (
    <div className={classes.answers}>
      {props.question.answers.map((answer) => (
        <Answer answer={answer} key={answer.id} />
      ))}
    </div>
  );
}

export default Answers;

import classes from "./Answers.module.css";

import React, { useState } from "react";
import Answer from "./Answer";

function Answers(props) {
  return (
    <div className={classes.answers}>
      {props.question.answers.map((answer) => (
        <Answer
          answer={answer}
          key={answer.id}
          onClick={props.checkAnswer}
          isPlaying={props.isPlaying}
        />
      ))}
    </div>
  );
}

export default Answers;

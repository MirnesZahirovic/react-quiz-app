import classes from "./Answer.module.css";

import React from "react";

function Answer(props) {
  return <div className={classes.answer}>{props.answer.answer}</div>;
}

export default Answer;

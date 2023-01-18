import classes from "./Answer.module.css";

import React, { useState } from "react";

function Answer(props) {
  const [classNames, setClassNames] = useState(classes.answer);

  return (
    <div
      className={classNames}
      onClick={(e) => {
        if (props.isPlaying) {
          console.log(props.answer);
          props.onClick(props.answer);
        }
      }}
    >
      {props.answer.answer}
    </div>
  );
}

export default Answer;

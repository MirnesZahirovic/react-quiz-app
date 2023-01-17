import classes from "./Question.module.css";

function Question(props) {
  return <div className={classes.question}>{props.question.question}</div>;
}

export default Question;

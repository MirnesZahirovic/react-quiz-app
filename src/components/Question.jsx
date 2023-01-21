import classes from "./Question.module.css";
import questions from "./Questions";

const Question = ({ aq }) => {
  return <div className={classes.question}>{questions[aq].question}</div>;
};

export default Question;

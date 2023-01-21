import classes from "./Answers.module.css";
import questions from "./Questions";
import { useState } from "react";

const Answers = ({ aq, setAq, setIsClicked, setGameOver, gameOver }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [classNames, setClassNames] = useState(classes.answer);

  const nextQuestion = () => {
    setAq((prev) => prev + 1);
    setSelectedAnswer(null);
    setIsClicked(false);
  };

  const checkAnswer = (answer) => {
    if (answer.correct) {
      setClassNames(`${classes.answer} ${classes.correct}`);
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    } else {
      setClassNames(`${classes.answer} ${classes.wrong}`);
      setGameOver(true);
    }
  };

  const clickHandler = (answer) => {
    setIsClicked(true);
    setClassNames(`${classes.answer} ${classes.active}`);
    setTimeout(() => {
      checkAnswer(answer);
    }, 3000);
  };

  return (
    <div className={classes.answers}>
      {questions[aq].answers.map((a) => (
        <div
          key={a.id}
          className={selectedAnswer === a.id ? classNames : classes.answer}
          onClick={(e) => {
            if (!gameOver) {
              setSelectedAnswer(a.id);
              clickHandler(a);
            }
          }}
        >
          {a.answer}
        </div>
      ))}
    </div>
  );
};

export default Answers;

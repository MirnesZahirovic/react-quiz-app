import React from "react";
import classes from "./Question.module.css";
import { useState } from "react";
import useSound from "use-sound";
import correctAnswer from "../assets/sounds/correct-answer.mp3";
import wrongAnswer from "../assets/sounds/wrong-answer.mp3";

function Question({
  question,
  nextQuestion,
  tq,
  qn,
  setEndGame,
  setMessage,
  endGame,
}) {
  const [answerClasses, setAnswerClasses] = useState(classes.answer);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [wrongAnswerSound] = useSound(wrongAnswer);
  const [correctAnswerSound] = useSound(correctAnswer);

  const checkAnswer = (a, e) => {
    setSelectedAnswer(a);
    setAnswerClasses(`${classes.answer} ${classes.active}`);
    setTimeout(() => {
      setAnswerClasses(
        a.correct
          ? `${classes.answer} ${classes.correct}`
          : `${classes.answer} ${classes.wrong}`
      );
      setTimeout(() => {
        a.correct ? correctAnswerSound() : wrongAnswerSound();
        setTimeout(() => {
          if (qn < tq) {
            a.correct && nextQuestion();
            if (!a.correct) {
              setEndGame(true);
              setMessage("Your answer is wrong! You lost!");
            }
          } else {
            setEndGame(true);
            a.correct
              ? setMessage("Congrulations! You are now millionare!")
              : setMessage("Your answer is wrong! You lost!");
          }
        }, 2000);
      }, 1000);
    }, 2000);
  };
  return (
    <div className={classes.questionWrapper}>
      <div className={classes.question}>{question.question} </div>
      <div className={classes.answers}>
        {question.answers.map((a) => (
          <div
            className={selectedAnswer === a ? answerClasses : classes.answer}
            key={a.id}
            onClick={(e) => {
              !endGame && checkAnswer(a);
            }}
          >
            {a.answer}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;

import React from "react";
import classes from "./Question.module.css";
import Questions from "./Questions";
import { useState } from "react";
import useSound from "use-sound";
import correctAnswer from "../assets/sounds/correct-answer.mp3";
import wrongAnswer from "../assets/sounds/wrong-answer.mp3";

const questions = Questions;

function Question({ qn }) {
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
      }, 1000);
    }, 2000);
  };
  return (
    <div className={classes.questionWrapper}>
      <div className={classes.question}>{questions[qn].question} </div>
      <div className={classes.answers}>
        {questions[qn].answers.map((a) => (
          <div
            className={selectedAnswer === a ? answerClasses : classes.answer}
            key={a.id}
            onClick={(e) => {
              checkAnswer(a);
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

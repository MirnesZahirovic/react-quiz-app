import classes from "./Answers.module.css";
import questions from "./Questions";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import correctAnswerSound from "../assets/sounds/correct-answer.mp3";
import wrongAnswerSound from "../assets/sounds/wrong-answer.mp3";
import startSound from "../assets/sounds/lets-play.mp3";

const Answers = ({
  aq,
  setAq,
  setIsClicked,
  setGameOver,
  gameOver,
  setMessage,
  startedAgain,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [classNames, setClassNames] = useState(classes.answer);
  const [playCorrectAnswer] = useSound(correctAnswerSound);
  const [playWrongAnswer] = useSound(wrongAnswerSound);
  const [playStartSound] = useSound(startSound);

  const nextQuestion = () => {
    if (aq < 14) {
      setAq((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsClicked(false);
    } else {
      setGameOver(true);
      setMessage("You are now millionaire! Congrulations! 🎉");
    }
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setClassNames(classes.answer);
    playStartSound();
  }, [startedAgain]);

  const checkAnswer = (answer) => {
    if (answer.correct) {
      setClassNames(`${classes.answer} ${classes.correct}`);
      playCorrectAnswer();
      setTimeout(() => {
        nextQuestion();
      }, 2000);
    } else {
      setClassNames(`${classes.answer} ${classes.wrong}`);
      playWrongAnswer();
      setMessage("Your answer is wrong! You lost the game!");
      setGameOver(true);
      setIsClicked(false);
    }
  };

  const clickHandler = (answer) => {
    setIsClicked(true);
    setClassNames(`${classes.answer} ${classes.active}`);
    setTimeout(() => {
      checkAnswer(answer);
    }, 2000);
  };

  const putClasses = (a) => {
    if (gameOver) {
      setTimeout(() => {
        return classes.inactive;
      }, 1000);
    }
    if (selectedAnswer === a.id) {
      return classNames;
    } else {
      return classes.answer;
    }
  };

  return (
    <div className={classes.answers}>
      {questions[aq].answers.map((a) => (
        <div
          key={a.id}
          className={putClasses(a)}
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

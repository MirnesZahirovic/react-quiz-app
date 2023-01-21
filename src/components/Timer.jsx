import classes from "./Timer.module.css";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import wrongAnswerSound from "../assets/sounds/wrong-answer.mp3";

const Timer = ({ setGameOver, gameOver, aq, isClicked, setMessage }) => {
  const [time, setTime] = useState(30);
  const [playWrongAnswer] = useSound(wrongAnswerSound);

  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      isClicked && clearInterval(timer);
      return () => {
        clearInterval(timer);
      };
    }
  }, [gameOver, isClicked, time, setTime]);

  if (time === 0) {
    setMessage("Your time is left! You lost the game!");
    playWrongAnswer();
    setGameOver(true);
  }

  useEffect(() => {
    setTime(30);
  }, [aq]);

  return <div className={classes.timer}>{time}</div>;
};

export default Timer;

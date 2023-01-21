import classes from "./Timer.module.css";
import { useEffect, useState } from "react";

const Timer = ({ setGameOver, gameOver, aq, isClicked, setMessage }) => {
  const [time, setTime] = useState(30);

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
    setGameOver(true);
  }

  useEffect(() => {
    setTime(30);
  }, [aq]);

  return <div className={classes.timer}>{time}</div>;
};

export default Timer;

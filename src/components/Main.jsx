import classes from "./Main.module.css";
import Timer from "./Timer";
import Question from "./Question";
import Answers from "./Answers";
import { useState } from "react";

const Main = ({ aq, setAq, gameOver, setGameOver }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [startedAgain, setStartedAgain] = useState(1); // This is only for useEffect
  const [message, setMessage] = useState();

  const startAgain = () => {
    setAq(0);
    setGameOver(false);
    setStartedAgain((prev) => prev + 1);
  };

  return (
    <div className={classes.main}>
      {!gameOver ? (
        <Timer
          setGameOver={setGameOver}
          aq={aq}
          isClicked={isClicked}
          setMessage={setMessage}
          gameOver={gameOver}
        />
      ) : (
        <div className={classes.message}>{message}</div>
      )}
      <Question aq={aq} />
      <Answers
        aq={aq}
        setAq={setAq}
        setIsClicked={setIsClicked}
        setGameOver={setGameOver}
        gameOver={gameOver}
        setMessage={setMessage}
        startedAgain={startedAgain}
      />
      {gameOver && (
        <button className={classes.startAgain} onClick={startAgain}>
          Start again
        </button>
      )}
    </div>
  );
};

export default Main;

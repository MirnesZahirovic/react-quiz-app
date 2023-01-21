import classes from "./Main.module.css";
import Timer from "./Timer";
import Question from "./Question";
import Answers from "./Answers";
import { useState } from "react";

const Main = ({ aq, setAq, gameOver, setGameOver }) => {
  const [isClicked, setIsClicked] = useState(false);

  const [message, setMessage] = useState();

  return (
    <div className={classes.main}>
      {!gameOver ? (
        <Timer
          setGameOver={setGameOver}
          aq={aq}
          isClicked={isClicked}
          setMessage={setMessage}
        />
      ) : (
        message
      )}
      <Question aq={aq} />
      <Answers
        aq={aq}
        setAq={setAq}
        setIsClicked={setIsClicked}
        setGameOver={setGameOver}
        gameOver={gameOver}
      />
    </div>
  );
};

export default Main;

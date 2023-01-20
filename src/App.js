import classes from "./App.module.css";
import Questions from "./components/Questions";
import MoneyPyramid from "./components/MoneyPyramid";
import Question from "./components/Question";
import { Fragment, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import startGameSound from "./assets/sounds/lets-play.mp3";
import { clear } from "@testing-library/user-event/dist/clear";

const questions = Questions.reverse();
console.log(questions);

function App() {
  const [qn, setQn] = useState(0);
  const [time, setTime] = useState(30);
  const [userName, setUserName] = useState(null);
  const [playSound] = useSound(startGameSound);
  const [endGame, setEndGame] = useState(false);
  const [message, setMessage] = useState("");
  const enteredUserName = useRef();

  const startGameHandler = () => {
    setUserName(enteredUserName.current.value);
    playSound();
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time === 0 && !endGame) {
      setEndGame(true);
      setMessage("You lost the game!");
    }
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return clearInterval(interval);
  }, [time]);

  const nextQuestion = () => {
    setQn((prev) => prev + 1);
    setTime(30);
  };

  return (
    <div className={classes.app}>
      {!userName && (
        <div className={classes.userNameScreen}>
          <span>Enter username:</span>
          <input
            type="text"
            placeholder="Username"
            ref={enteredUserName}
          ></input>
          <button onClick={startGameHandler}>Start Game</button>
        </div>
      )}
      {userName && (
        <Fragment>
          <div className={classes.main}>
            {!endGame ? (
              <div className={classes.clock}>{time}</div>
            ) : (
              <div className={classes.message}>{message}</div>
            )}
            <div className={classes.game}>
              <Question
                question={questions[qn]}
                nextQuestion={nextQuestion}
                tq={questions.length - 1}
                qn={qn}
                setEndGame={setEndGame}
                setMessage={setMessage}
                endGame={endGame}
              />
            </div>
          </div>
          <MoneyPyramid qn={qn} />
        </Fragment>
      )}
    </div>
  );
}

export default App;

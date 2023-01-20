import classes from "./App.module.css";
import Questions from "./components/Questions";
import MoneyPyramid from "./components/MoneyPyramid";
import Question from "./components/Question";
import { Fragment, useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import startGameSound from "./assets/sounds/lets-play.mp3";

function App() {
  const [qn, setQn] = useState(0);
  const [time, setTime] = useState(30);
  const [userName, setUserName] = useState(null);
  const [playSound] = useSound(startGameSound);
  const enteredUserName = useRef();

  const startGameHandler = () => {
    setUserName(enteredUserName.current.value);
    playSound();
    // setInterval(() => {
    //   setTime((prev) => prev - 1);
    // }, 1000);
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
            <div className={classes.clock}>{time}</div>
            <div className={classes.game}>
              <Question qn={qn} />
            </div>
          </div>
          <MoneyPyramid />
        </Fragment>
      )}
    </div>
  );
}

export default App;

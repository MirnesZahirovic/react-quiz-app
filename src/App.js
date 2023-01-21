import { Fragment, useState } from "react";
import classes from "./App.module.css";
import Main from "./components/Main";
import MoneyPyramid from "./components/MoneyPyramid";
import StartScreen from "./components/StartScreen";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className={classes.app}>
      {!isPlaying && <StartScreen setIsPlaying={setIsPlaying} />}
      {isPlaying && (
        <Fragment>
          <Main
            aq={activeQuestion}
            setAq={setActiveQuestion}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />
          <MoneyPyramid aq={activeQuestion} />
        </Fragment>
      )}
    </div>
  );
}

export default App;

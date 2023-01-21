import { Fragment, useState } from "react";
import classes from "./App.module.css";
import Main from "./components/Main";
import MoneyPyramid from "./components/MoneyPyramid";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className={classes.app}>
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

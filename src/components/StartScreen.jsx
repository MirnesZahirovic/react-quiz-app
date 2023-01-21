import classes from "./StartScreen.module.css";
import startSound from "../assets/sounds/lets-play.mp3";
import useSound from "use-sound";

const StartScreen = ({ setIsPlaying }) => {
  const [startGameSound] = useSound(startSound);

  return (
    <div className={classes.startScreen}>
      <button
        onClick={() => {
          startGameSound();
          setIsPlaying(true);
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartScreen;

import classes from "./App.module.css";
import Questions from "./components/Questions";
import MoneyPyramid from "./components/MoneyPyramid";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.main}>Main</div>
      <MoneyPyramid />
    </div>
  );
}

export default App;

import classes from "./App.module.css";
import Answers from "./components/Answers";
import Question from "./components/Question";

const questions = [
  {
    question: "What is capital city of France?",
    answers: [
      { id: "a1", answer: "Sarajevo", correct: false },
      { id: "a2", answer: "Madrid", correct: false },
      { id: "a3", answer: "Paris", correct: true },
      { id: "a4", answer: "Budapest", correct: false },
    ],
  },
];

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.logo}>Quiz App</div>
      <div className={classes.questionNumber}>Question 1/10</div>
      <Question question={questions[0]} />
      <Answers question={questions[0]} />
    </div>
  );
}

export default App;

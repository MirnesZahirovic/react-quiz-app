import classes from "./App.module.css";
import Answers from "./components/Answers";
import Question from "./components/Question";
import { useState } from "react";

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
  {
    question: "What is capital city of Bosnia?",
    answers: [
      { id: "a1", answer: "Sarajevo", correct: false },
      { id: "a2", answer: "Madrid", correct: false },
      { id: "a3", answer: "Paris", correct: true },
      { id: "a4", answer: "Budapest", correct: false },
    ],
  },
];

function App() {
  const [qn, setQn] = useState(0); // Trenutni broj pitanja
  const [isCorrect, setIsCorrect] = useState(""); // Postavlja state da li je trenutni odgovor tačan
  const [isPlayed, setIsPlayed] = useState(false); // Postavlja state da li je igrac poceo da igra
  const [isPlaying, setIsPlaying] = useState(true); // postavlja state da li igrac moze da igra
  const [isWin, setIsWin] = useState(false); // Postavlja state da li je igrac pobijedio
  const questionsLenght = questions.length - 1; // Definise broj pitanja u kvizu

  // Funkcija 'nextQuestion' postavlja igracu novo pitanje

  const nextQuestion = () => {
    setQn((prevState) => prevState + 1);
  };

  /* Funkcija 'checkAnswer' provjerava da li je igrac odgovorio tačno, u slucaju da je njegov odgovor tačan, 
  provjerava se broj pitanja, odnosno da li je to bilo posljednje postavljeno pitanje,
  ako nije onda se igracu postavlja slj. pitanje a ako jeste posljednje onda se igracu prikazuje poruka da je pobijedio. */

  const checkAnswer = (answer) => {
    setIsPlayed(true);
    if (answer.correct) {
      console.log(answer.correct);
      if (qn < questionsLenght) {
        setIsCorrect(true);
        setTimeout(() => {
          nextQuestion();
          setIsPlayed(false);
        }, 2000);
      } else {
        setIsWin(true);
        setIsPlaying(false);
        console.log("You win");
      }
    } else {
      setIsCorrect(false);
      setIsPlaying(false);
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.logo}>Quiz App</div>

      <div className={classes.questionNumber}>
        Question {qn + 1}/{questionsLenght + 1}
      </div>

      <Question question={questions[qn]} />

      {isPlayed && !isWin && (
        <p
          className={
            isCorrect ? classes.messageCorrect : classes.messageIncorrect
          }
        >
          Your answer is {isCorrect ? "correct" : "incorrect"}!
        </p>
      )}

      {isPlayed && isWin && (
        <p className={classes.winMessage}>
          You succesfully answered all questions. You win!
        </p>
      )}

      <Answers
        question={questions[qn]}
        checkAnswer={checkAnswer}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Questions from "./data.json";
import Question from "./Question";
import Result from "./Result";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setUserAnswers((prev) => [...prev, isCorrect]);
    setCurrentQuestion((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="app-container">
      {currentQuestion < Questions.length && (
        <Question
          question={Questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion === Questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={Questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;

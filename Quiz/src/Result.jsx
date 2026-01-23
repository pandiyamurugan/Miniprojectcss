import React from "react";

function Result({ userAnswers, questions, resetQuiz }) {
  const correctAnswer = userAnswers.filter(Boolean).length;

  return (
    <div className="result-container">
      <h2>Result</h2>

      <p className="score-text">
        You answered <strong>{correctAnswer}</strong> out of{" "}
        <strong>{questions.length}</strong>
      </p>

      <button className="retry-btn" onClick={resetQuiz}>
        Retry Quiz
      </button>

      <ul className="result-list">
        {questions.map((item, index) => (
          <li
            key={index}
            className={`result-item ${
              userAnswers[index] ? "correct" : "wrong"
            }`}
          >
            <strong>Q{index + 1}.</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;

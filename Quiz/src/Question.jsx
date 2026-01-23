import React from "react";

function Question({ question, onAnswerClick }) {
  return (
    <div className="question-card">
      <h2 className="question-title">{question.question}</h2>

      <div className="options-grid">
        {question.Options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onAnswerClick(option.isCorrect)}
          >
            {option.text} 
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

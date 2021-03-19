import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Answer from "./Answer.jsx";
import Question from "./Question.jsx";
import NextQuestion from "./NextQuestion.jsx";

function App() {
  let [questionIndex, setNextQuestion] = useState(0);
  const nextQuestion = () => {
    setNextQuestion(questionIndex + 1);
    setIsAnswered("unanswered");
  };

  let answers = data[questionIndex].question.choices;
  let [isAnswered, setIsAnswered] = useState("unanswered");
  const buttonClicked = () => {
    let answerIndex = data[questionIndex].question.correct_choice_index;
    setIsAnswered(answers[answerIndex]);
    console.log(isAnswered);
  };

  let correctAnswer;


  let nextQuestions;
  let arrayLength = data.length - 1;
  if (questionIndex < arrayLength) {
    nextQuestions = <NextQuestion justClicked={nextQuestion} />;
  } else {
    nextQuestions = "";
  }

  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionIndex].question.text}
        answers={answers}
        checkOnClick={buttonClicked}
      />
      <div>
        <button onClick={buttonClicked}>Show the correct answer</button>
        <p>The correct answer is {isAnswered}.</p>
      </div>
      {nextQuestions}
    </div>
  );
}

export default App;

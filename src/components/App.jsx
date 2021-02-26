import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props){
  console.log(data[0].question.choices);
  let answers = props.answers;
  let question = props.question;
  let newAnswers = answers.map(answer => <Answer text={answer}/>);
  return (<div>
    <p>{question}</p>
    <div>
      {newAnswers}
    </div>
    </div>);
}

function NextQuestion(props) {
  return <button onClick={props.justClicked}>Next Question</button>;
}

function App() {
  //let question = 0;
  let [question, setNextQuestion] = useState(0);
  const nextQuestion = () => {
    setNextQuestion(question + 1);
    setIsAnswered("unanswered");
    console.log(question);
  };
  let answers = data[question].question.choices;
  let [isAnswered, setIsAnswered] = useState("unanswered");
  const buttonClicked = () => {
    let answerIndex = data[question].question.correct_choice_index;
    setIsAnswered(answers[answerIndex]);
    console.log(isAnswered);
  };
  return (<div className="app">Trivia!
    <Question question={data[question].question.text} answers={answers}/>
    <div>
      <button onClick={buttonClicked}>Show the correct answer</button>
      <p>The correct answer is {isAnswered}.</p>
    </div>
    <NextQuestion justClicked={nextQuestion}/>
  </div> );
}

function Answer(props) {
  return(
    <p>{props.text}</p>
  );
}

export default App;

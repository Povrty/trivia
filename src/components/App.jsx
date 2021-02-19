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

function NextQuestion() {
  return <button>Next Question</button>;
}

function App() {
  let question = 0;
  let answers = data[question].question.choices;
  let [isAnswered, setIsAnswered] = useState(false);
  const buttonClicked = setIsAnswered(true);
  return (<div className="app">Trivia!
    <Question question={data[question].question.text} answers={answers}/>
    <div>
      <button>Show the correct answer</button>
    </div>
    <NextQuestion />
  </div> );
}

function Answer(props) {
  return(
    <p>{props.text}</p>
  );
}

export default App;

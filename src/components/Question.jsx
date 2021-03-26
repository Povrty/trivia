import React from "react";
import data from "../sample_data.json";
import Answer from "./Answer.jsx";

function Question(props){
  let answers = props.answers;
  let question = props.question;
  let buttonCheck = props.checkOnClick;
  // let 
  let newAnswers = answers.map((answer, index) => 
    <Answer key={index} buttonCheckFunction={buttonCheck} text={answer}/>);
  return (<div>
    <p>{question}</p>
    <div>
      {newAnswers}
    </div>
    </div>);
}

export default Question;
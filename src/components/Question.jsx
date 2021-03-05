import React from "react";
import data from "../sample_data.json";
import Answer from "./Answer.jsx";

function Question(props){
  console.log(data[0].question.choices);
  let answers = props.answers;
  let question = props.question;
  let buttonCheck = props.checkB;
  let newAnswers = answers.map(answer => <Answer onClick={() => props.checkB()} text={answer}/>);
  return (<div>
    <p>{question}</p>
    <div>
      {newAnswers}
    </div>
    </div>);
}

export default Question;
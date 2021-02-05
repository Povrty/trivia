import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props){
  return <p>{props.question}</p>;
}

function App() {
  console.log(data[0].question.text);
  let question=0;
  return (<div className="app">Trivia!
    <Question question={data[question].question.text}/>
  </div> );
}

export default App;

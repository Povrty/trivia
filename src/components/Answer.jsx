import React from "react";

function Answer(props) {
  return <p onClick={props.buttonCheckFunction} id={props.index}>{props.text}</p>;
}

export default Answer;

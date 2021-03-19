import React from "react";

function Answer(props) {
  return <p onClick={props.buttonCheckFunction}>{props.text}</p>;
}

export default Answer;

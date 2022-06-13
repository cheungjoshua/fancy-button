import { useState } from "react";

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span>I like this text</span>);
  }

  return <button className="TextRepeaterButton">{textArray}</button>;
}

export default TextRepeaterButton;

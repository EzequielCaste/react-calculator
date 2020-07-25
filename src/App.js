import React, { useState } from "react";
import "./styles.css";
import NumberPad from "./components/NumberPad";
import Display from "./components/Display";
import Operations from "./components/Operations";
//import handleOperator from "./js/handleOperator";
//import handleNumber from "./js/handleNumber";

const operandos = [];

export default function App() {
  const regExOperator = /[+,\-,/,*]/;

  const [currentDisplay, setDisplay] = useState("0");

  function handleOperator(item) {
    operandos.push(currentDisplay);
    setDisplay("");
    console.log(operandos);
  }

  function handleNumber(item) {
    if (currentDisplay === "0") {
      setDisplay(() => {
        return item;
      });
    } else {
      setDisplay(() => {
        return currentDisplay.concat(item);
      });
    }
  }

  function handleClick(item) {
    if (isOperator(item)) {
      handleOperator(item);
    } else {
      handleNumber(item);
    }
  }
  function isOperator(item) {
    return regExOperator.test(item);
  }
  return (
    <div className="App">
      <h1>Javascript Calculator</h1>
      <Display text={currentDisplay} />
      <NumberPad handleClick={handleClick} />
      <Operations handleClick={handleClick} />
    </div>
  );
}

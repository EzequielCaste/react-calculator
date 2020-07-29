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
  const [currentOperator, setOperator] = useState("");

  const calculate = {
    "+": (operand1, operand2) => operand1 + operand2
  };

  function handleOperator(item) {
    if (operandos.length === 0) {
      operandos.push(currentDisplay);
      operandos.push(item);
      //console.log(operandos);
    } else {
      operandos.push(currentDisplay);
      console.log(calculate[item](operandos[0], operandos[2]));
    }

    /*
    el primer click en un operador sólo GUARDA y ESPERA
    al proximo operador
    toma lo que hay en display y guarda
    fijar el operador actual

    */
  }

  function handleNumber(item) {
    if (regExOperator.test(operandos[operandos.length - 1])) {
      //hay operador
      setDisplay(() => {
        return item;
      });
    } else if (currentDisplay === "0") {
      setDisplay(() => {
        return item;
      });
    } else {
      setDisplay(() => {
        return currentDisplay + item;
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

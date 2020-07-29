import React, { useState } from "react";
import "./styles.css";
import Display from "./Display";
import Pad from "./Pad";

export default function App() {
  const [waitingForOperand, setWaiting] = useState(false);
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);

  function operation(operation) {
    const inputValue = parseFloat(displayValue);

    if (value === null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = Calculator[operator](currentValue, inputValue);
      setValue(newValue);
      setDisplayValue(String(newValue));
    }
    setOperator(operation);
    setWaiting(true);
  }

  const Calculator = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "/": (num1, num2) => num1 / num2,
    "*": (num1, num2) => num1 * num2,
    "=": (num1, num2) => num2
  };

  function digitInput(digit) {
    if (waitingForOperand) {
      setWaiting(false);
      setDisplayValue(() => {
        return String(value) === displayValue
          ? String(digit)
          : displayValue + digit;
      });
    } else {
      setDisplayValue(() => {
        return displayValue === "0" ? String(digit) : displayValue + digit;
      });
    }
  }
  function clear() {
    setDisplayValue("0");
    setValue(null);
    setOperator(null);
    setWaiting(false);
  }
  function decimalInput() {
    if (!/\./.test(displayValue)) {
      setDisplayValue(() => {
        return displayValue + ".";
      });
      setWaiting(false);
    }
  }
  function toggleSign() {
    setDisplayValue(() => {
      let num = parseFloat(displayValue);
      return String(num * -1);
    });
  }

  return (
    <>
      <h1>React Calculator</h1>
      <div className="App">
        <Display value={displayValue} />
        <div className="function-keys">
          <div id="clear" className="btn" onClick={() => clear()}>
            C
          </div>
          <div className="btn" onClick={() => toggleSign()}>
            ±
          </div>
        </div>
        <div className="digit-keys">
          <Pad id="seven" handleClick={() => digitInput(7)} num={7} />
          <Pad id="eight" handleClick={() => digitInput(8)} num={8} />
          <Pad id="nine" handleClick={() => digitInput(9)} num={9} />
          <Pad id="four" handleClick={() => digitInput(4)} num={4} />
          <Pad id="five" handleClick={() => digitInput(5)} num={5} />
          <Pad id="six" handleClick={() => digitInput(6)} num={6} />
          <Pad id="one" handleClick={() => digitInput(1)} num={1} />
          <Pad id="two" handleClick={() => digitInput(2)} num={2} />
          <Pad id="three" handleClick={() => digitInput(3)} num={3} />
          <Pad id="zero" handleClick={() => digitInput(0)} num={0} />
          <Pad id="decimal" handleClick={() => decimalInput()} num={"."} />
        </div>
        <div className="operator-keys">
          <div id="add" className="btn" onClick={() => operation("+")}>
            +
          </div>
          <div id="subtract" className="btn" onClick={() => operation("-")}>
            -
          </div>
          <div id="divide" className="btn" onClick={() => operation("/")}>
            /
          </div>
          <div id="multiply" className="btn" onClick={() => operation("*")}>
            *
          </div>
          <div className="btn" id="equals" onClick={() => operation("=")}>
            =
          </div>
        </div>
      </div>
    </>
  );
}
